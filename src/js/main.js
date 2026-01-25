class GalaxyAnimation {
	constructor(canvas) {
		this.canvas = canvas;
		this.scene = null;
		this.camera = null;
		this.renderer = null;
		this.controls = null;
		this.points = null;
		this.clock = null;
		this.gu = { time: { value: 0 } };
		this.animationFrame = null;
		this.isInitialized = false;
	}

	init() {
		if (this.isInitialized) return;
		// 检查 THREE 库是否已加载
		if (typeof THREE === 'undefined') {
			console.warn('Three.js not loaded, skipping galaxy animation');
			return;
		}
		try {
			// 直接使用全局 THREE 与 OrbitControls（由 scripts.pug 注入）
			this.setupScene(THREE, THREE.OrbitControls || OrbitControls);
			this.setupEventListeners();
			this.animate();
			this.isInitialized = true;
		} catch (error) {
			console.error('Failed to initialize galaxy animation:', error);
		}
	}

	setupScene(THREE, OrbitControls) {
		// 创建场景
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x160016);

		// 创建相机
		// 修复黑屏：增加远剪裁面到 2000，确保能看到远处粒子
		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
		// 初始位置设在 800，确保在视锥体内
		this.camera.position.set(0, 4, 800);

		// 创建渲染器
		this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
		this.renderer.setSize(this.canvas.clientWidth || window.innerWidth, this.canvas.clientHeight || window.innerHeight);

		// 创建控制器
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
		this.controls.enablePan = false;

		// 创建时钟（需在导入完成后）
		this.clock = new THREE.Clock();

		// 创建银河粒子系统
		this.createGalaxy(THREE);

		// 启动飞入动画
		this.flyIn();
	}

	flyIn() {
		// 虫洞穿越效果：相机从 z=120 (银河全景) 极速拉近到 z=21
		// 修正：银河半径约 40，z=120 足够产生深空感且可见
		if (typeof anime !== 'undefined') {
			anime({
				targets: this.camera.position,
				z: [120, 21],
				y: [20, 4],
				duration: 2500,
				easing: 'easeOutExpo',
				update: () => {
					this.camera.lookAt(0, 0, 0);
				}
			});

			// 旋转速度动画保持不变
			this.initialRotationSpeed = 20.0;
			anime({
				targets: this,
				initialRotationSpeed: 0.05,
				duration: 2500,
				easing: 'easeOutExpo'
			});
		} else {
			// 回退
			this.camera.position.set(0, 4, 21);
		}
	}

	createGalaxy(THREE) {
		// r128 没有 Vector3.randomDirection，这里手动生成单位随机方向向量
		const randomDirection = () => {
			const u = Math.random();
			const v = Math.random();
			const theta = 2 * Math.PI * u;
			const phi = Math.acos(2 * v - 1);
			const x = Math.sin(phi) * Math.cos(theta);
			const y = Math.cos(phi);
			const z = Math.sin(phi) * Math.sin(theta);
			return new THREE.Vector3(x, y, z);
		};
		const sizes = [];
		const shift = [];

		const pushShift = () => {
			shift.push(
				Math.random() * Math.PI,
				Math.random() * Math.PI * 2,
				(Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
				Math.random() * 0.9 + 0.1
			);
		}

		// 创建随机分布的粒子
		const pts = new Array(50000).fill().map(p => {
			sizes.push(Math.random() * 1.5 + 0.5);
			pushShift();
			return randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
		});

		// 创建银河形状的粒子
		for (let i = 0; i < 100000; i++) {
			let r = 10, R = 40;
			let rand = Math.pow(Math.random(), 1.5);
			let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
			pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2));
			sizes.push(Math.random() * 1.5 + 0.5);
			pushShift();
		}

		// 创建几何体和材质
		const geometry = new THREE.BufferGeometry().setFromPoints(pts);
		geometry.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
		geometry.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));

		const material = new THREE.PointsMaterial({
			size: 0.125,
			transparent: true,
			depthTest: false,
			blending: THREE.AdditiveBlending,
			onBeforeCompile: shader => {
				shader.uniforms.time = this.gu.time;
				// 添加交互相关的 uniforms
				shader.uniforms.uMouse = { value: new THREE.Vector3(0, 0, 0) };
				this.gu.uMouse = shader.uniforms.uMouse; // 引用以便在 update 中更新

				shader.vertexShader = `
					uniform float time;
					uniform vec3 uMouse; // 鼠标在模型坐标系中的位置
					attribute float sizes;
					attribute vec4 shift;
					varying vec3 vColor;
					${shader.vertexShader}
				`.replace(
					`gl_PointSize = size;`,
					`gl_PointSize = size * sizes;`
				).replace(
					`#include <color_vertex>`,
					`#include <color_vertex>
						float d = length(abs(position) / vec3(40., 10., 40));
						d = clamp(d, 0., 1.);
						vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
					`
				).replace(
					`#include <begin_vertex>`,
					`#include <begin_vertex>
						float t = time;
						float moveT = mod(shift.x + shift.z * t, PI2);
						float moveS = mod(shift.y + shift.z * t, PI2);
						transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;

						// --- 粒子力场交互 (Repulsion) ---
						// 计算鼠标与粒子的距离 (在同一局部坐标系)
						float dist = distance(transformed, uMouse);
						float radius = 6.0; // 交互半径
						if (dist < radius) {
							// 计算排斥力（越近越强）
							float force = (1.0 - dist / radius);
							force = force * force; // 指数衰减，更自然
							vec3 dir = normalize(transformed - uMouse);
							// 沿垂直方向和径向推开，模拟水波纹
							transformed += dir * force * 3.0; 
						}
					`
				);

				shader.fragmentShader = `
					varying vec3 vColor;
					${shader.fragmentShader}
				`.replace(
					`#include <clipping_planes_fragment>`,
					`#include <clipping_planes_fragment>
						float d = length(gl_PointCoord.xy - 0.5);
					`
				).replace(
					`vec4 diffuseColor = vec4( diffuse, opacity );`,
					`vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d) );`
				);
			}
		});

		this.points = new THREE.Points(geometry, material);
		this.points.rotation.order = "ZYX";
		this.points.rotation.z = 0.2;
		this.scene.add(this.points);

		// 初始化交互所需的 Raycaster
		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2(-1000, -1000); // 初始移出屏幕
		this.interactionPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // XZ 平面
	}

	setupEventListeners() {
		window.addEventListener("resize", () => this.handleResize());
		// 添加页面可见性变化监听
		document.addEventListener(visibilityChangeEvent, this.handleVisibilityChange.bind(this));

		// 监听鼠标移动
		window.addEventListener('mousemove', (event) => {
			this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		});

		// 移动端触摸
		window.addEventListener('touchmove', (event) => {
			if (event.touches.length > 0) {
				this.mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
				this.mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
			}
		});
	}
	// ...
	animate() {
		if (!this.scene || !this.camera || !this.renderer) return;

		this.animationFrame = requestAnimationFrame(() => this.animate());

		// 更新控制器
		this.controls.update();

		// 计算 delta time，用于平滑累加旋转
		const delta = this.clock.getDelta();
		const t = this.clock.getElapsedTime() * 0.5;
		this.gu.time.value = t * Math.PI;

		// 旋转银河
		if (this.points) {
			// 使用动态速度（flyIn期间快，之后慢）进行累加
			const speed = this.initialRotationSpeed !== undefined ? this.initialRotationSpeed : 0.05;
			this.points.rotation.y += speed * delta;

			// --- 计算交互投影 ---
			// 1. 设置 Raycaster
			this.raycaster.setFromCamera(this.mouse, this.camera);

			// 2. 计算与 XZ 平面的交点
			const target = new THREE.Vector3();
			this.raycaster.ray.intersectPlane(this.interactionPlane, target);

			if (target && this.gu.uMouse) {
				// 3. 将世界坐标转为银河的局部坐标
				// 这样即使银河在旋转，力场也会跟随鼠标位置下的星星
				this.points.worldToLocal(target);

				// 4. 更新 Shader 中的鼠标位置
				// 使用 lerp 平滑移动，避免瞬移跳变
				this.gu.uMouse.value.lerp(target, 0.1);
			}
		}

		// 渲染场景
		this.renderer.render(this.scene, this.camera);
	}

	handleVisibilityChange() {
		if (document[hiddenProperty]) {
			// 页面不可见时暂停动画
			if (this.animationFrame) {
				cancelAnimationFrame(this.animationFrame);
				this.animationFrame = null;
			}
		} else {
			// 页面重新可见时恢复动画
			if (!this.animationFrame && this.isInitialized) {
				this.animate();
			}
		}
	}

	destroy() {
		if (this.animationFrame) {
			cancelAnimationFrame(this.animationFrame);
			this.animationFrame = null;
		}

		window.removeEventListener("resize", () => this.handleResize());
		document.removeEventListener(visibilityChangeEvent, this.handleVisibilityChange.bind(this));

		// 清理Three.js资源
		if (this.renderer) {
			this.renderer.dispose();
		}
		if (this.scene) {
			this.scene.clear();
		}
	}

}

window.hiddenProperty =
	"hidden" in document
		? "hidden"
		: "webkitHidden" in document
			? "webkitHidden"
			: "mozHidden" in document
				? "mozHidden"
				: null;

window.DIRECTIONS = {
	UP: "UP",
	DOWN: "DOWN",
	LEFT: "LEFT",
	RIGHT: "RIGHT",
	UNDIRECTED: "UNDIRECTED",
};
window.isPhone =
	/Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(
		navigator.userAgent
	);

function updateSecondEntryHref() {
	const secondEntryLink = document.querySelector('a[data-entry="second"]');
	if (!secondEntryLink) return;
	secondEntryLink.href = isPhone ? "https://nav.1yo.cc" : "https://nav.1yo.cc";
}

function getMoveDirection(startx, starty, endx, endy) {
	if (!isPhone) {
		return;
	}

	const angx = endx - startx;
	const angy = endy - starty;

	if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
		return DIRECTIONS.UNDIRECTED;
	}

	const getAngle = (angx, angy) => (Math.atan2(angy, angx) * 180) / Math.PI;

	const angle = getAngle(angx, angy);
	if (angle >= -135 && angle <= -45) {
		return DIRECTIONS.UP;
	} else if (angle > 45 && angle < 135) {
		return DIRECTIONS.DOWN;
	} else if (
		(angle >= 135 && angle <= 180) ||
		(angle >= -180 && angle < -135)
	) {
		return DIRECTIONS.LEFT;
	} else if (angle >= -45 && angle <= 45) {
		return DIRECTIONS.RIGHT;
	}

	return DIRECTIONS.UNDIRECTED;
}

function loadIntro() {
	if (document[hiddenProperty] || loadIntro.loaded) {
		return;
	}

	setTimeout(() => {
		$(".wrap").classList.add("in");
		setTimeout(() => {
			$(".content-subtitle").innerHTML = `<span>${[...subtitle].join(
				"</span><span>"
			)}</span>`;
		}, 270);
	}, 0);
	loadIntro.loaded = true;
}

function switchPage() {
	if (switchPage.switched) {
		return;
	}
	const DOM = {
		intro: $(".content-intro"),
		path: $(".shape-wrap path"),
		shape: $("svg.shape"),
	};
	DOM.shape.style.transformOrigin = "50% 0%";

	anime({
		targets: DOM.intro,
		duration: 1100,
		easing: "easeInOutSine",
		translateY: "-200vh",
	});

	// 触发 Big Bang 闪光，掩盖后台加载
	const flash = $("#flash-overlay");
	if (flash) flash.classList.add("bang");

	anime({
		targets: DOM.shape,
		scaleY: [
			{
				value: [0.8, 1.8],
				duration: 550,
				easing: "easeInQuad",
			},
			{
				value: 1,
				duration: 550,
				easing: "easeOutQuad",
			},
		],
	});
	anime({
		targets: DOM.path,
		duration: 1100,
		easing: "easeOutQuad",
		d: DOM.path.getAttribute("pathdata:id"),
		complete: function (anim) {
			// 银河动效会在页面切换时自动清理
		},
	});

	switchPage.switched = true;
	// 切换到 Main 页面后，尽快显示交互提示，不依赖 Galaxy 初始化
	showInteractionHint();
}

const showInteractionHint = () => {
	const hint = document.getElementById("interaction-hint");
	if (!hint) return;

	// 稍微延迟，等待页面切换动画（550ms）基本完成
	setTimeout(() => {
		hint.classList.add("in");
	}, 800);

	const hideHint = () => {
		hint.classList.remove("in");
		// 移除后就不再显示了
		document.removeEventListener("mousedown", hideHint);
		document.removeEventListener("touchstart", hideHint);
		document.removeEventListener("wheel", hideHint);
	};

	document.addEventListener("mousedown", hideHint);
	document.addEventListener("touchstart", hideHint);
	document.addEventListener("wheel", hideHint);
};

function loadMain() {
	if (loadMain.loaded) {
		return;
	}
	// 延迟卡片显示，配合虫洞穿越动画 (Fly-in)
	// 虫洞动画约 2.5s，这里设置为 3.0s，让卡片在着陆后才开始凝聚
	setTimeout(() => {
		$(".card-inner").classList.add("in");
		const canvas = document.getElementById("galaxyCanvas");
		if (canvas) {
			const galaxyAnimation = new GalaxyAnimation(canvas);
			galaxyAnimation.init();
		}
	}, 3000);
	loadMain.loaded = true;
}

function loadAll() {
	if (loadAll.loaded) {
		return;
	}
	switchPage();
	loadMain();
	loadAll.loaded = true;
}

window.visibilityChangeEvent = hiddenProperty.replace(
	/hidden/i,
	"visibilitychange"
);
window.addEventListener(visibilityChangeEvent, loadIntro);
window.addEventListener("DOMContentLoaded", loadIntro);
// Stargate Terminal Logic
const LAUNCH_CODES = {
	"pxkjvip": "https://mobile-landing-1zi.pages.dev",
	// Add more codes here
};

const Stargate = {
	isOpen: false,
	dom: {
		terminal: null,
		input: null,
		display: null,
		status: null
	},

	init() {
		this.dom.terminal = document.getElementById('stargate-terminal');
		this.dom.input = document.getElementById('launch-code');
		this.dom.display = document.getElementById('code-display');
		this.dom.status = document.querySelector('.status-text');

		if (!this.dom.terminal) return;

		// Input Handling
		this.dom.input.addEventListener('input', (e) => this.handleInput(e));
		this.dom.input.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') this.checkCode();
			if (e.key === 'Escape') this.close();
		});

		// Focus Management
		this.dom.terminal.addEventListener('click', (e) => {
			if (e.target === this.dom.terminal || e.target.classList.contains('overlay')) {
				this.close();
			} else {
				this.dom.input.focus();
			}
		});
	},

	open() {
		if (this.isOpen) return;
		this.isOpen = true;
		this.dom.terminal.classList.remove('hidden');
		// Force reflow
		void this.dom.terminal.offsetWidth;
		this.dom.terminal.classList.add('open');

		this.dom.input.value = '';
		this.dom.display.textContent = '';
		this.dom.display.className = 'code-display'; // Reset classes
		this.dom.status.textContent = 'ENTER COORDINATES · 输入跃迁坐标';
		this.dom.status.style.color = 'rgba(255,255,255,0.4)';

		setTimeout(() => this.dom.input.focus(), 100);
	},

	close() {
		if (!this.isOpen) return;
		this.isOpen = false;
		this.dom.terminal.classList.remove('open');
		setTimeout(() => {
			this.dom.terminal.classList.add('hidden');
		}, 400);
	},

	handleInput(e) {
		const val = e.target.value.toUpperCase();
		this.dom.display.textContent = val;

		// Reset error state on input
		if (this.dom.display.classList.contains('error')) {
			this.dom.display.classList.remove('error');
			this.dom.status.textContent = 'ENTER COORDINATES · 输入跃迁坐标';
			this.dom.status.style.color = 'rgba(255,255,255,0.4)';
		}
	},

	checkCode() {
		const code = this.dom.input.value.toLowerCase().trim();
		const targetUrl = LAUNCH_CODES[code];

		if (targetUrl) {
			this.grantAccess(targetUrl);
		} else {
			this.denyAccess();
		}
	},

	grantAccess(url) {
		this.dom.display.classList.add('success');
		this.dom.status.textContent = 'COORDINATES LOCKED · 跃迁启动';
		this.dom.status.style.color = '#00ffaa';
		this.dom.input.blur();

		// Trigger Big Bang Visuals
		setTimeout(() => {
			const flash = document.getElementById("flash-overlay");
			if (flash) flash.classList.remove("bang"); // Reset first
			void flash.offsetWidth;
			flash.classList.add("bang");

			// Actual redirection
			setTimeout(() => {
				window.location.href = url;
			}, 300); // 配合 Big Bang 闪白瞬间跳转
		}, 800);
	},

	denyAccess() {
		this.dom.display.classList.add('error');
		this.dom.status.textContent = 'COORDINATES INVALID · 坐标无效';
		this.dom.status.style.color = '#ff3333';

		// Auto clear after shake
		setTimeout(() => {
			this.dom.display.classList.remove('error');
			this.dom.input.value = '';
			this.dom.display.textContent = '';
			this.dom.status.textContent = 'ENTER COORDINATES · 输入跃迁坐标';
			this.dom.status.style.color = 'rgba(255,255,255,0.4)';
		}, 1000);
	}
};

window.addEventListener('DOMContentLoaded', () => {
	Stargate.init();

	// Bind Rocket/Second Entry Click
	const secondEntryLink = document.querySelector('a[data-entry="second"]');
	if (secondEntryLink) {
		secondEntryLink.addEventListener('click', (e) => {
			e.preventDefault(); // Stop default navigation
			Stargate.open();
		});
		// Remove href to prevent hover preview, or keep it for SEO but intercept click
		secondEntryLink.setAttribute('href', 'javascript:void(0)');
	}
});
// window.addEventListener("DOMContentLoaded", updateSecondEntryHref);

const enterEl = $(".enter");
enterEl.addEventListener("click", loadAll);
enterEl.addEventListener("touchend", loadAll);

// PC端保留滚轮和箭头悬停触发
if (!isPhone) {
	document.body.addEventListener("mousewheel", loadAll, { passive: true });
	$(".arrow").addEventListener("mouseenter", loadAll);
}

// 移动端禁用滑动触发，只能点击按钮进入
// if (isPhone) {
// 	document.addEventListener(
// 		"touchstart",
// 		function (e) {
// 			window.startx = e.touches[0].pageX;
// 			window.starty = e.touches[0].pageY;
// 		},
// 		{ passive: true }
// 	);
// 	document.addEventListener(
// 		"touchend",
// 		function (e) {
// 			let endx, endy;
// 			endx = e.changedTouches[0].pageX;
// 			endy = e.changedTouches[0].pageY;

// 			const direction = getMoveDirection(startx, starty, endx, endy);
// 			if (direction !== DIRECTIONS.UP) {
// 				return;
// 			}
// 			loadAll();
// 		},
// 		{ passive: true }
// 	);
// }

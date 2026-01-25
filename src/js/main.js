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
		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
		this.camera.position.set(0, 4, 21);

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
				shader.vertexShader = `
					uniform float time;
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
	}

	setupEventListeners() {
		window.addEventListener("resize", () => this.handleResize());
		// 添加页面可见性变化监听
		document.addEventListener(visibilityChangeEvent, this.handleVisibilityChange.bind(this));
	}

	handleResize() {
		if (!this.camera || !this.renderer) return;

		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	animate() {
		if (!this.scene || !this.camera || !this.renderer) return;

		this.animationFrame = requestAnimationFrame(() => this.animate());

		// 更新控制器
		this.controls.update();

		// 更新时间
		const t = this.clock.getElapsedTime() * 0.5;
		this.gu.time.value = t * Math.PI;

		// 旋转银河
		if (this.points) {
			this.points.rotation.y = t * 0.05;
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
}

const showInteractionHint = () => {
	const hint = document.getElementById("interaction-hint");
	if (!hint) return;

	// 延迟一点显示，给银河动画一点加载时间
	setTimeout(() => {
		hint.classList.add("in");
	}, 1500);

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
	setTimeout(() => {
		$(".card-inner").classList.add("in");
		const canvas = document.getElementById("galaxyCanvas");
		if (canvas) {
			const galaxyAnimation = new GalaxyAnimation(canvas);
			galaxyAnimation.init();
			showInteractionHint(); // 显示交互提示
		}
	}, 0);
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
window.addEventListener("DOMContentLoaded", updateSecondEntryHref);

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

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
		if (typeof THREE === 'undefined') {
			console.warn('Three.js not loaded, skipping galaxy animation');
			return;
		}
		try {
			this.setupScene(THREE, THREE.OrbitControls || OrbitControls);
			this.setupEventListeners();
			this.animate();
			this.isInitialized = true;
		} catch (error) {
			console.error('Failed to initialize galaxy animation:', error);
		}
	}

	setupScene(THREE, OrbitControls) {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x160016);
		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
		this.camera.position.set(0, 4, 800);
		this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
		this.renderer.setSize(this.canvas.clientWidth || window.innerWidth, this.canvas.clientHeight || window.innerHeight);
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableDamping = true;
		this.controls.enablePan = false;
		this.clock = new THREE.Clock();
		this.createGalaxy(THREE);
		this.flyIn();
	}

	flyIn() {
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
			this.initialRotationSpeed = 20.0;
			anime({
				targets: this,
				initialRotationSpeed: 0.05,
				duration: 2500,
				easing: 'easeOutExpo'
			});
		} else {
			this.camera.position.set(0, 4, 21);
		}
	}

	createGalaxy(THREE) {
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

		const pts = new Array(50000).fill().map(p => {
			sizes.push(Math.random() * 1.5 + 0.5);
			pushShift();
			return randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
		});

		for (let i = 0; i < 100000; i++) {
			let r = 10, R = 40;
			let rand = Math.pow(Math.random(), 1.5);
			let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
			pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2));
			sizes.push(Math.random() * 1.5 + 0.5);
			pushShift();
		}

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
				shader.uniforms.uMouse = { value: new THREE.Vector3(0, 0, 0) };
				this.gu.uMouse = shader.uniforms.uMouse;

				shader.vertexShader = `
					uniform float time;
					uniform vec3 uMouse;
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

						float dist = distance(transformed, uMouse);
						float radius = 6.0;
						if (dist < radius) {
							float force = (1.0 - dist / radius);
							force = force * force;
							vec3 dir = normalize(transformed - uMouse);
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

		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2(-1000, -1000);
		this.interactionPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
	}

	setupEventListeners() {
		window.addEventListener("resize", () => this.handleResize());
		document.addEventListener(visibilityChangeEvent, this.handleVisibilityChange.bind(this));
		window.addEventListener('mousemove', (event) => {
			this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		});
		window.addEventListener('touchmove', (event) => {
			if (event.touches.length > 0) {
				this.mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
				this.mouse.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
			}
		});
	}

	handleResize() {
		if (this.camera && this.renderer) {
			this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		}
	}

	animate() {
		if (!this.scene || !this.camera || !this.renderer) return;

		this.animationFrame = requestAnimationFrame(() => this.animate());
		this.controls.update();
		const delta = this.clock.getDelta();
		const t = this.clock.getElapsedTime() * 0.5;
		this.gu.time.value = t * Math.PI;

		if (this.points) {
			const speed = this.initialRotationSpeed !== undefined ? this.initialRotationSpeed : 0.05;
			this.points.rotation.y += speed * delta;
			this.raycaster.setFromCamera(this.mouse, this.camera);
			const target = new THREE.Vector3();
			this.raycaster.ray.intersectPlane(this.interactionPlane, target);
			if (target && this.gu.uMouse) {
				this.points.worldToLocal(target);
				this.gu.uMouse.value.lerp(target, 0.1);
			}
		}
		this.renderer.render(this.scene, this.camera);
	}

	handleVisibilityChange() {
		if (document[hiddenProperty]) {
			if (this.animationFrame) {
				cancelAnimationFrame(this.animationFrame);
				this.animationFrame = null;
			}
		} else {
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
		if (this.renderer) this.renderer.dispose();
		if (this.scene) this.scene.clear();
	}
}

window.hiddenProperty = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "mozHidden" in document ? "mozHidden" : null;
window.DIRECTIONS = { UP: "UP", DOWN: "DOWN", LEFT: "LEFT", RIGHT: "RIGHT", UNDIRECTED: "UNDIRECTED" };
window.isPhone = /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent);

function updateSecondEntryHref() {
	const secondEntryLink = document.querySelector('a[data-entry="second"]');
	if (!secondEntryLink) return;
	secondEntryLink.href = isPhone ? "https://nav.1yo.cc" : "https://nav.1yo.cc";
}

function getMoveDirection(startx, starty, endx, endy) {
	if (!isPhone) return;
	const angx = endx - startx;
	const angy = endy - starty;
	if (Math.abs(angx) < 2 && Math.abs(angy) < 2) return DIRECTIONS.UNDIRECTED;
	const getAngle = (angx, angy) => (Math.atan2(angy, angx) * 180) / Math.PI;
	const angle = getAngle(angx, angy);
	if (angle >= -135 && angle <= -45) return DIRECTIONS.UP;
	else if (angle > 45 && angle < 135) return DIRECTIONS.DOWN;
	else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) return DIRECTIONS.LEFT;
	else if (angle >= -45 && angle <= 45) return DIRECTIONS.RIGHT;
	return DIRECTIONS.UNDIRECTED;
}

function loadIntro() {
	if (document[hiddenProperty] || loadIntro.loaded) return;
	setTimeout(() => {
		$(".wrap").classList.add("in");
		setTimeout(() => {
			$(".content-subtitle").innerHTML = `<span>${[...subtitle].join("</span><span>")}</span>`;
		}, 270);
	}, 0);
	loadIntro.loaded = true;
}

function switchPage() {
	if (switchPage.switched) return;

	const DOM = {
		intro: $(".content-intro"),
		title: $(".content-title"),
		subtitle: $(".content-subtitle"),
		enter: $(".enter"),
		arrow: $(".arrow")
	};

	// 创建时间轴：星尘消散效果
	const tl = anime.timeline({
		easing: 'easeOutExpo',
		complete: () => {
			// 动画结束后完全隐藏 intro 层，防止遮挡
			DOM.intro.style.display = 'none';
		}
	});

	tl
		// 1. 杂项元素（按钮、箭头）先下沉消失
		.add({
			targets: [DOM.enter, DOM.arrow],
			opacity: 0,
			translateY: 20,
			duration: 600,
			easing: 'easeOutQuad'
		})
		// 2. 文字元素上浮 + 模糊 + 淡出（交错）
		.add({
			targets: [DOM.subtitle, DOM.title],
			opacity: 0,
			translateY: -50,
			filter: 'blur(10px)',
			duration: 1000,
			delay: anime.stagger(100), // 标题和副标题错开
		}, '-=400')
		// 3. 整体容器放大 + 深度模糊 + 彻底消失
		.add({
			targets: DOM.intro,
			opacity: 0,
			scale: 1.1, // 轻微放大，营造穿过星云的感觉
			filter: 'blur(20px)',
			duration: 1200,
			easing: 'easeInOutSine'
		}, '-=800');

	// 闪光衔接：在文字消失时启动闪光
	setTimeout(() => {
		const flash = $("#flash-overlay");
		if (flash) flash.classList.add("bang");
	}, 400);

	switchPage.switched = true;
	showInteractionHint();
}

const showInteractionHint = () => {
	const hint = document.getElementById("interaction-hint");
	if (!hint) return;
	setTimeout(() => {
		hint.classList.add("in");
	}, 800);
	const hideHint = () => {
		hint.classList.remove("in");
		document.removeEventListener("mousedown", hideHint);
		document.removeEventListener("touchstart", hideHint);
		document.removeEventListener("wheel", hideHint);
	};
	document.addEventListener("mousedown", hideHint);
	document.addEventListener("touchstart", hideHint);
	document.addEventListener("wheel", hideHint);
};

function loadMain() {
	if (loadMain.loaded) return;
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
	if (loadAll.loaded) return;
	switchPage();
	loadMain();
	loadAll.loaded = true;
}

window.visibilityChangeEvent = hiddenProperty.replace(/hidden/i, "visibilitychange");
window.addEventListener(visibilityChangeEvent, loadIntro);
window.addEventListener("DOMContentLoaded", loadIntro);

// Stargate Terminal Logic (v3.1: Hybrid Input Strategy)
// 桌面端用 keydown，移动端用 input 事件 + 逆序检测
const LAUNCH_CODES = {
	"pxkjvip": "https://mobile-landing-1zi.pages.dev",
	"yzq": "https://appstore.1yo.cc/app"
};

// 辅助函数：检测输入是否可能被逆序
function detectAndFixReversed(input, knownCodes) {
	const normalizedInput = input.toLowerCase().trim();
	// 如果输入本身就是有效口令，直接返回
	if (knownCodes[normalizedInput]) return input;
	// 尝试逆序
	const reversed = normalizedInput.split('').reverse().join('');
	if (knownCodes[reversed]) {
		console.log('[Stargate] BiDi bug detected, auto-correcting:', input, '->', reversed);
		return reversed;
	}
	return input; // 无法匹配，返回原值
}

const Stargate = {
	isOpen: false,
	inputBuffer: '', // 手动管理的输入字符串
	usingKeydown: false, // 标记是否使用 keydown 捕获（桌面端）
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

		// 修复：强制 LTR 方向
		if (this.dom.display) this.dom.display.setAttribute('dir', 'ltr');
		if (this.dom.input) this.dom.input.setAttribute('dir', 'ltr');

		// ====== 桌面端：使用 keydown 直接捕获输入 ======
		this.dom.input.addEventListener('keydown', (e) => {
			// 功能键处理（所有端都生效）
			if (e.key === 'Enter') {
				e.preventDefault();
				this.checkCode();
				return;
			}
			if (e.key === 'Escape') {
				this.close();
				return;
			}

			// 以下逻辑仅在非移动端生效
			if (window.isPhone) return;

			// 删除键处理
			if (e.key === 'Backspace') {
				e.preventDefault();
				this.usingKeydown = true;
				if (this.inputBuffer.length > 0) {
					this.inputBuffer = this.inputBuffer.slice(0, -1);
					this.updateDisplay();
				}
				return;
			}

			// 忽略功能键和组合键
			if (e.ctrlKey || e.metaKey || e.altKey) return;
			if (e.key.length !== 1) return;

			// 字符输入处理
			e.preventDefault();
			this.usingKeydown = true;
			const char = e.key.toUpperCase();
			if (/^[A-Z0-9]$/.test(char)) {
				this.inputBuffer += char;
				this.updateDisplay();
			}
		});

		// ====== 移动端：使用 input 事件 ======
		this.dom.input.addEventListener('input', (e) => {
			// 桌面端如果已经在用 keydown 捕获，忽略 input 事件
			if (!window.isPhone && this.usingKeydown) return;

			// 移动端/桌面端后备：直接从 input.value 读取
			const val = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
			this.inputBuffer = val;
			this.dom.display.textContent = val;

			// 同步 input.value（去除非法字符后的版本）
			if (e.target.value !== val) {
				e.target.value = val;
			}

			// 引导文案显隐控制
			if (val === '') {
				this.dom.status.style.opacity = '1';
			} else {
				this.dom.status.style.opacity = '0';
			}

			// Reset error state
			if (this.dom.display.classList.contains('error')) {
				this.dom.display.classList.remove('error');
				this.dom.status.textContent = this.getPrompt();
				this.dom.status.style.color = 'rgba(255,255,255,0.4)';
			}
		});

		// Focus Management
		this.dom.input.addEventListener('blur', () => {
			if (this.inputBuffer === '') {
				this.dom.status.style.opacity = '1';
			}
		});

		// Click to Focus
		this.dom.terminal.addEventListener('click', (e) => {
			if (e.target === this.dom.terminal || e.target.classList.contains('overlay')) {
				this.close();
			} else {
				this.dom.input.focus();
			}
		});

		// BFCache Restore Handling
		window.addEventListener('pageshow', () => {
			this.resetInput();
		});
	},

	// 新增：统一更新显示
	updateDisplay() {
		this.dom.display.textContent = this.inputBuffer;
		// 同步 input.value（用于表单提交等场景，虽然我们不依赖它）
		this.dom.input.value = this.inputBuffer;

		// 引导文案显隐控制
		if (this.inputBuffer === '') {
			this.dom.status.style.opacity = '1';
		} else {
			this.dom.status.style.opacity = '0';
		}

		// Reset error state on input
		if (this.dom.display.classList.contains('error')) {
			this.dom.display.classList.remove('error');
			this.dom.status.textContent = this.getPrompt();
			this.dom.status.style.color = 'rgba(255,255,255,0.4)';
		}
	},

	// 辅助方法：获取端侧差异化文案
	getPrompt() {
		return window.isPhone ? '点击输入跃迁坐标' : '输入跃迁坐标';
	},

	open() {
		if (this.isOpen) return;
		this.isOpen = true;
		this.dom.terminal.classList.remove('hidden');
		void this.dom.terminal.offsetWidth;
		this.dom.terminal.classList.add('open');

		// 核心修复：重置状态
		this.inputBuffer = '';
		this.usingKeydown = false;
		this.dom.input.value = '';
		this.dom.display.textContent = '';
		this.dom.display.className = 'code-display';

		// 初始状态：显示引导文案 (端侧自适应)
		this.dom.status.textContent = this.getPrompt();
		this.dom.status.style.color = 'rgba(255,255,255,0.4)';
		this.dom.status.style.opacity = '1';

		setTimeout(() => this.dom.input.focus(), 100);
	},

	// 核心优化：后退/重载时的状态重置
	resetInput() {
		if (!this.dom.input) return;
		this.inputBuffer = '';
		this.usingKeydown = false;
		this.dom.input.value = '';
		this.dom.display.textContent = '';
		this.dom.display.classList.remove('error');
		this.dom.status.textContent = this.getPrompt();
		this.dom.status.style.color = 'rgba(255,255,255,0.4)';
		this.dom.status.style.opacity = '1';
	},

	close() {
		if (!this.isOpen) return;
		this.isOpen = false;
		this.dom.terminal.classList.remove('open');
		setTimeout(() => {
			this.dom.terminal.classList.add('hidden');
		}, 400);
	},

	checkCode() {
		// 核心修复：使用 inputBuffer，并检测逆序
		let code = this.inputBuffer.toLowerCase().trim();

		// 尝试检测并修正 BiDi bug 导致的逆序
		code = detectAndFixReversed(code, LAUNCH_CODES);

		const targetUrl = LAUNCH_CODES[code];

		// 提交时强制显示结果状态
		this.dom.status.style.opacity = '1';

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

		setTimeout(() => {
			const flash = document.getElementById("flash-overlay");
			if (flash) flash.classList.remove("bang");
			void flash.offsetWidth;
			flash.classList.add("bang");
			setTimeout(() => {
				window.location.href = url;
			}, 300);
		}, 800);
	},

	denyAccess() {
		this.dom.display.classList.add('error');
		this.dom.status.textContent = 'COORDINATES INVALID · 坐标无效';
		this.dom.status.style.color = '#ff3333';

		setTimeout(() => {
			this.dom.display.classList.remove('error');
			// 核心修复：重置 inputBuffer
			this.inputBuffer = '';
			this.dom.input.value = '';
			this.dom.display.textContent = '';
			this.dom.status.textContent = this.getPrompt();
			this.dom.status.style.color = 'rgba(255,255,255,0.4)';
			this.dom.status.style.opacity = '1';
		}, 1000);
	}
};

window.addEventListener('DOMContentLoaded', () => {
	Stargate.init();
	const secondEntryLink = document.querySelector('a[data-entry="second"]');
	if (secondEntryLink) {
		// 修复：同时绑定 click 和 touchend，解决部分安卓 WebView 点击无响应问题
		let handled = false;
		const handler = (e) => {
			if (handled) return; // 防止 touchend + click 双重触发
			handled = true;
			e.preventDefault();
			Stargate.open();
			setTimeout(() => { handled = false; }, 300); // 300ms 后重置
		};
		secondEntryLink.addEventListener('click', handler);
		secondEntryLink.addEventListener('touchend', handler);
		secondEntryLink.setAttribute('href', 'javascript:void(0)');
	}
});

const enterEl = $(".enter");
enterEl.addEventListener("click", loadAll);
enterEl.addEventListener("touchend", loadAll);

if (!isPhone) {
	document.body.addEventListener("mousewheel", loadAll, { passive: true });
	$(".arrow").addEventListener("mouseenter", loadAll);
}

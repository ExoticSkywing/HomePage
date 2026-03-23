import * as THREE from "three";
import { FontLoader } from "jsm/loaders/FontLoader.js";
import { TextGeometry } from "jsm/geometries/TextGeometry.js";


// Expose init function
export function initTorusGlass(canvasSelector, textStr) {
const canvas = document.querySelector(canvasSelector);
if (!canvas) return;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);
const getCameraZ = () => Math.max(5, 5 * (800 / window.innerWidth));
camera.position.z = getCameraZ();

const renderer = new THREE.WebGLRenderer({
canvas: canvas,
antialias: true,
		powerPreference: "high-performance",
		preserveDrawingBuffer: true,
alpha: true
});
renderer.setClearColor(0x000000, 1); // Solid black for mix-blend-mode screen
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// fonts
const fontLoader = new FontLoader();
fontLoader.load(
"./assets/fonts/helvetiker_regular.typeface.json",
(font) => {
const textGeometry = new TextGeometry(textStr, {
font,
size: 1.2,
depth: 0,
curveSegments: 5,
bevelEnabled: true,
bevelThickness: 0.05,
bevelSize: 0.02,
bevelOffset: 0,
bevelSegments: 4,
});
textGeometry.computeBoundingBox();
textGeometry.center();

const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const text = new THREE.Mesh(textGeometry, textMaterial);
scene.add(text);
}
);

const torusGeometry = new THREE.TorusGeometry(0.8, 0.35, 100, 60);
const torusMaterial = new THREE.MeshPhysicalMaterial({
    metalness: 0,
    roughness: 0.05, // 允许轻微漫反射，避免玻璃过假
    transmission: 1, // glass effect
    ior: 1.5, // 典型玻璃折射率
    thickness: 2.5, // 增加光线穿透厚度感
    transparent: true,
    opacity: 1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1 // 清漆糙度，增加高光分散
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.z = 1;
// Initial scale check
if (window.innerWidth < 800) {
    torus.scale.set(1.8, 1.8, 1.8);
}
scene.add(torus);

// lights
const ambientLight = new THREE.AmbientLight(0xffffff, 8); // 稍微调暗一点环境白光以凸显点光
scene.add(ambientLight);

// 分配冷暖对比的环境光以营造真实玻璃色散折射效果
const pointLight = new THREE.PointLight(0x00f0ff, 15); // 青蓝色主光源
pointLight.position.set(-1.5, 2, 1);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xff007f, 15); // 粉紫色侧底光
pointLight2.position.set(-1.5, -2, 1);
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xffffff, 8); // 底部白补光
pointLight3.position.set(1.5, -2, 0);
scene.add(pointLight3);

const pointLight4 = new THREE.PointLight(0xffffff, 8); // 顶部白补光
pointLight4.position.set(1.5, 2, 0);
scene.add(pointLight4);

const clock = new THREE.Clock();
let animationId;
const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const speed = 1.5; // 1.5x speed
    renderer.render(scene, camera);
    torus.rotation.x = elapsedTime * 0.5 * speed;
    torus.rotation.y = elapsedTime * 0.1 * speed;
    animationId = requestAnimationFrame(tick);
};
tick();

const resizeHandler = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.position.z = getCameraZ();
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Dynamic scale update
    if (window.innerWidth < 800) {
        torus.scale.set(1.8, 1.8, 1.8);
    } else {
        torus.scale.set(1, 1, 1);
    }
};
window.addEventListener("resize", resizeHandler);

return () => {
window.removeEventListener("resize", resizeHandler);
cancelAnimationFrame(animationId);
renderer.dispose();

};
}

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
alpha: true
});
renderer.setClearColor(0x000000, 1); // Solid black for mix-blend-mode screen
renderer.setSize(window.innerWidth, window.innerHeight);
// 适配移动设备计算性能：低于 800px 的屏幕最多允许 1.5 倍精细度以求换取稳定的 60FPS，PC 原样输出高清 2x 玻璃抗锯齿
renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 800 ? 1.5 : 2));

// fonts
const fontLoader = new FontLoader();
let textGeometry = null;
let textMesh = null;
let torusGeometry = null;
let torusMaterial = null;

fontLoader.load(
"./assets/fonts/helvetiker_regular.typeface.json",
(font) => {
textGeometry = new TextGeometry(textStr, {
font,
size: 1.2,
depth: 0,
curveSegments: 3,
bevelEnabled: true,
bevelThickness: 0.05,
bevelSize: 0.02,
bevelOffset: 0,
bevelSegments: 1,
});
textGeometry.computeBoundingBox();
textGeometry.center();

const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
textMesh = new THREE.Mesh(textGeometry, textMaterial);
scene.add(textMesh);
}
);

// 性能优化：移动端降低几何体面数 (64x32 -> 48x24)
const isMobile = window.innerWidth < 800;
torusGeometry = new THREE.TorusGeometry(0.8, 0.35, isMobile ? 48 : 64, isMobile ? 24 : 32); 
torusMaterial = new THREE.MeshPhysicalMaterial({
metalness: 0,
roughness: 0.05, 
transmission: 1, 
ior: 1.5, 
thickness: 2.5, 
transparent: true,
clearcoat: 1.0,
clearcoatRoughness: 0.1 
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
let animationId = null;

const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const speed = 1.5; // 1.5x speed
    renderer.render(scene, camera);
    torus.rotation.x = elapsedTime * 0.5 * speed;
    torus.rotation.y = elapsedTime * 0.1 * speed;
    animationId = requestAnimationFrame(tick);
};

// 增加后台休眠防跑电处理：切换出页面时关停一切管线调度渲染
const handleVisibilityChange = () => {
    if (document.hidden) {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    } else {
        if (!animationId) {
            tick();
        }
    }
};
document.addEventListener("visibilitychange", handleVisibilityChange);

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
document.removeEventListener("visibilitychange", handleVisibilityChange);
if (animationId) cancelAnimationFrame(animationId);

// Dispose resources
if (textGeometry) textGeometry.dispose();
if (torusGeometry) torusGeometry.dispose();
if (torusMaterial) torusMaterial.dispose();
if (textMesh) {
    if (textMesh.material) textMesh.material.dispose();
}

renderer.dispose();

};
}

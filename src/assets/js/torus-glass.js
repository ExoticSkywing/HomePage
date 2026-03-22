import * as THREE from "three";
import { FontLoader } from "jsm/loaders/FontLoader.js";
import { TextGeometry } from "jsm/geometries/TextGeometry.js";
import { RoomEnvironment } from "jsm/environments/RoomEnvironment.js";

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
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
canvas: canvas,
antialias: true,
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
roughness: 0,
iridescence: 1,
iridescenceIOR: 1.5,
iridescenceThicknessRange: [100, 324],
transmission: 1,
ior: 1.2,
thickness: 0.8
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.z = 1;
scene.add(torus);

// lights
const ambientLight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 10);
pointLight.position.set(-1, 2, 0);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xffffff, 10);
pointLight2.position.set(-1, -2, 0);
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xffffff, 10);
pointLight3.position.set(1, -2, 0);
scene.add(pointLight3);

const pointLight4 = new THREE.PointLight(0xffffff, 10);
pointLight4.position.set(1, 2, 0);
scene.add(pointLight4);

const clock = new THREE.Clock();
let animationId;
const tick = () => {
const elapsedTime = clock.getElapsedTime();
renderer.render(scene, camera);
torus.rotation.x = elapsedTime * 0.5;
torus.rotation.y = elapsedTime * 0.1;
animationId = requestAnimationFrame(tick);
};
tick();

const resizeHandler = () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener("resize", resizeHandler);

return () => {
window.removeEventListener("resize", resizeHandler);
cancelAnimationFrame(animationId);
renderer.dispose();
        pmremGenerator.dispose();
};
}

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load('img/13d.glb', function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();


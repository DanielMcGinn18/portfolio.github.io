import * as THREE from './assets/build/three.module.js';

document.addEventListener('DOMContentLoaded', function() {
    let camera, scene, renderer, cube;

    function init() {
        const container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0, 0, 5);

        scene = new THREE.Scene();

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        animate();
    }

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    function changeCameraPosition() {
        const randomX = Math.random() * 4 - 2;
        const randomY = Math.random() * 4 - 2;
        const randomZ = Math.random() * 4 - 2;
        cube.position.set(randomX, randomY, randomZ); // Move the cube, not the camera
    }

    init();

    const button = document.getElementById('changePositionButton');
    button.addEventListener('click', changeCameraPosition);
});

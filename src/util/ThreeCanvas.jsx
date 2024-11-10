import { useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(100, 100);

    // Torus Knot Geometry
    const geometry = new THREE.TorusKnotGeometry(0.4, 0.15, 100, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ffcc,
      metalness: 0.6,
      roughness: 0.2,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Camera Position
    camera.position.z = 2;

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Append Renderer to DOM
    const canvasContainer = document.getElementById('three-canvas');
    canvasContainer.appendChild(renderer.domElement);

    // Clean up on component unmount
    return () => {
      canvasContainer.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div id="three-canvas" className="w-16 h-16"></div>;
}

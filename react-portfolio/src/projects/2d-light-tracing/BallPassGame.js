// src/components/BallPassGame.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
// Import the experimental WebGPU renderer from your local copy
import WebGPURenderer from 'three/src/renderers/webgpu/WebGPURenderer.js';
// Import BVH from three-mesh-bvh
import { MeshBVH, acceleratedRaycast } from 'three-mesh-bvh';

// Patch Three.js raycasting to use BVH for raycast queries.
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const BallPassGame = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Ensure WebGPU support exists.
    if (!navigator.gpu) {
      console.error('WebGPU is not supported in this browser.');
      return;
    }

    // Create the WebGPU renderer.
    const renderer = new WebGPURenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create scene and camera.
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    // Create a moving ball.
    const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    ball.position.set(-5, 0, 0);
    scene.add(ball);

    // Create an obstacle – a box.
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    box.position.set(0, 0, 0);
    scene.add(box);

    // Build a BVH for the obstacle.
    box.geometry.boundsTree = new MeshBVH(box.geometry, { lazyGeneration: false });

    // Ball velocity for simple horizontal movement.
    const ballVelocity = new THREE.Vector3(0.05, 0, 0);

    // Function for collision detection between ball and an obstacle using BVH.
    const checkCollision = (sphere, obstacle) => {
      const sphereBounding = new THREE.Sphere(sphere.position, 0.5);
      const boxBounding = new THREE.Box3().setFromObject(obstacle);
      return boxBounding.intersectsSphere(sphereBounding);
    };

    // Animation loop.
    const animate = () => {
      requestAnimationFrame(animate);

      // Update ball position.
      ball.position.add(ballVelocity);

      // Reverse direction if ball reaches screen edge.
      if (ball.position.x > 5 || ball.position.x < -5) {
        ballVelocity.x = -ballVelocity.x;
      }

      // Check for collision between the ball and the obstacle.
      if (checkCollision(ball, box)) {
        ball.material.color.set(0xffff00);
      } else {
        ball.material.color.set(0xff0000);
      }

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on unmount.
    return () => {
      if (renderer) {
        if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
        try {
          if (typeof renderer.dispose === 'function') {
            renderer.dispose();
          }
        } catch (error) {
          console.warn('Error during renderer.dispose()', error);
        }
      }
    };
  }, []);

  return (
    <div>
      {/* Navigation Menu */}
      <nav style={{ padding: '1rem', background: '#333' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
          <li>
            <Link to="/ballpassgame" style={{ color: '#fff', textDecoration: 'none' }}>
              Ball Pass Game
            </Link>
          </li>
          <li>
            <Link to="/lighttracing" style={{ color: '#fff', textDecoration: 'none' }}>
              2D Light Tracing
            </Link>
          </li>
          <li>
            <Link to="/other" style={{ color: '#fff', textDecoration: 'none' }}>
              Other Projects
            </Link>
          </li>
        </ul>
      </nav>

      {/* The container where the Three.js scene will render */}
      <div
        ref={mountRef}
        style={{ width: '100%', height: 'calc(100vh - 60px)', overflow: 'hidden' }}
      />
    </div>
  );
};

export default BallPassGame;

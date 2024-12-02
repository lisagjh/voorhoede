<script>
  import { onMount } from "svelte";
  // Ensure this code runs only in the browser
  import * as THREE from "three";

  let canvas;

  // Ensure the code is wrapped to prevent execution during SSR
  onMount(() => {
    // STAP 1: setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      // renderer moet weten welk dom element gebruikt moet worden
      canvas: canvas,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    // maakt het canvas full screen
    renderer.setSize(window.innerWidth, window.innerHeight);
    // de standaard positie van de camera is in het midden van de scene,
    camera.position.setZ(30);

    renderer.render(scene, camera);

    // STAP 2: geometry
    const geometry = new THREE.TorusGeometry(8, 4, 10, 20);
    const material = new THREE.MeshBasicMaterial({
      color: 0x666666,
      wireframe: true,
    });

    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    const pointLight = new THREE.PointLight(0x666666);
    pointLight.position.set(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0x666666);
    scene.add(pointLight, ambientLight);

    // scroll animatie ?
    let previousScrollPosition = window.scrollY;

    function moveCamera() {
      const currentScrollPosition = window.scrollY;
      const delta = currentScrollPosition - previousScrollPosition;

      if (delta > 0) {
        torus.rotation.x += 0.01;
      } else if (delta < 0) {
        torus.rotation.x -= 0.05;
      }

      previousScrollPosition = currentScrollPosition;
    }
    document.body.onscroll = moveCamera;

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      // Cleanup if needed when component is destroyed
      window.onscroll = null;
    };
  });
</script>

<canvas id="bg" bind:this={canvas}></canvas>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>

<script>
  import { onMount } from "svelte";
  import * as THREE from "three";

  let canvas;

  onMount(() => {
    // STEP 1: setup
    // Create scene, camera, and renderer
    // Scene is like a container for all objects
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60, // Field of view (FOV) in degrees
      window.innerWidth / window.innerHeight, // Aspect ratio to match window size
      1, // Near clipping plane (closest objects visible to camera)
      100 // Far clipping plane (farthest objects visible to camera)
    );

    const renderer = new THREE.WebGLRenderer({
      // Renderer needs to know what DOM element to use
      // Link the renderer to our canvas element
      canvas: canvas,
    });

    renderer.setPixelRatio(window.devicePixelRatio); // Set pixel ratio for high-DPI screens
    renderer.setSize(window.innerWidth, window.innerHeight); // Make canvas full screen
    camera.position.setZ(30); // Move the camera away from the center for better viewing
    renderer.render(scene, camera); // Render the scene and camera

    // STEP 2: geometry
    // Create the geometry - this defines the shape
    const geometry = new THREE.TorusGeometry(8, 4, 10, 20); // Torus shape (doughnut)

    // Create the material - defines how the surface looks
    const material = new THREE.MeshBasicMaterial({
      color: 0x666666, // Color of the torus
      wireframe: true, // Show the wireframe (edges of the shape)
    });

    // Combine geometry and material into a mesh
    const torus = new THREE.Mesh(geometry, material);

    // Add the mesh to the scene
    scene.add(torus);

    // STEP 3: lighting
    // Create ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(0x666666);
    // Add both lights to the scene
    scene.add(ambientLight);

    // STEP 4: resize handler
    function onWindowResize() {
      // Update renderer size
      renderer.setSize(window.innerWidth, window.innerHeight);

      // Update camera aspect ratio
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix(); // Apply the aspect ratio changes
    }
    window.addEventListener("resize", onWindowResize); // Attach resize handler

    // STEP 5: scroll animation
    let previousScrollPosition = window.scrollY;
    let targetRotation = 0; // The rotation value we want to reach
    const easingFactor = 0.1; // Adjust this value to control the smoothness (lower = smoother)

    function moveCamera() {
      const currentScrollPosition = window.scrollY;
      const delta = currentScrollPosition - previousScrollPosition;

      // Update the target rotation based on scroll direction
      if (delta > 0) {
        targetRotation += 0.1; // Scrolling down increases target rotation
      } else if (delta < 0) {
        targetRotation -= 0.15; // Scrolling up decreases target rotation
      }

      previousScrollPosition = currentScrollPosition;
    }

    // Attach the scroll handler
    document.body.onscroll = moveCamera;

    // STEP 6: animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Smoothly interpolate the torus rotation towards the target
      torus.rotation.x += (targetRotation - torus.rotation.x) * easingFactor;

      renderer.render(scene, camera);
    }
    // Start the animation loop
    animate();

    return () => {
      // Remove scroll event listener
      window.onscroll = null;
      // Remove resize listener
      window.removeEventListener("resize", onWindowResize);
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

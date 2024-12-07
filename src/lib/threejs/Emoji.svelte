<script>
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

  let canvas;

  onMount(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(380);

    const loader = new SVGLoader();

    loader.load("/emoji.svg", (data) => {
      const group = new THREE.Group();

      data.paths.forEach((path) => {
        // Check path color or assign a default if undefined
        const color = path.color || 0xffffff;

        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(color), // Use path color
          side: THREE.FrontSide,
          transparent: true,
          opacity: 1,
        });

        const shapes = path.toShapes(true);

        shapes.forEach((shape) => {
          const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 10,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 0.3,
            bevelSegments: 3,
          });
          const mesh = new THREE.Mesh(geometry, material);
          group.add(mesh);
        });
      });

      // Center the group
      group.position.set(-150, -150, 0);

      // Add some lighting for better 3D effect
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 10);

      scene.add(ambientLight, directionalLight);
      scene.add(group);

      // Mouse tilt interaction
      function onMouseMove(event) {
        // Normalize mouse coordinates to [-1, 1] range
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

        // Adjust tilt sensitivity (lower values for subtler movement)
        const tiltFactor = 0.15;

        // Tilt based on mouse position
        group.rotation.x = mouseY * tiltFactor;
        group.rotation.y = mouseX * tiltFactor;
      }

      // Add mouse move listener
      window.addEventListener("mousemove", onMouseMove);

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();

      // Cleanup
      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    });

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>

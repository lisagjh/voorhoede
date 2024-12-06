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
    camera.position.setZ(550);

    const loader = new SVGLoader();

    loader.load(
      "/emoji.svg",
      (data) => {
        const group = new THREE.Group();

        data.paths.forEach((path) => {
          const material = new THREE.MeshStandardMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.9,
          });

          const shapes = path.toShapes(true);
          shapes.forEach((shape) => {
            const geometry = new THREE.ExtrudeGeometry(shape, {
              depth: 25, // Increased depth for more pronounced 3D effect
              bevelEnabled: true, // Enable beveling
              bevelThickness: 0.5, // Bevel thickness
              bevelSize: 0.3, // Bevel size
              bevelSegments: 3, // Number of bevel segments
            });
            const mesh = new THREE.Mesh(geometry, material);
            group.add(mesh);
          });
        });

        group.position.set(0, -100, 0);

        // Add some lighting for better 3D effect
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        const pointLight = new THREE.PointLight(0xe9faa3, 1);
        pointLight.position.set(5, 5, 5);

        scene.add(ambientLight, pointLight, group);

        function animate() {
          targetX = mouseX * 0.001;
          targetY = mouseY * 0.001;

          const elapsedTime = clock.getElapsedTime();

          //Update objects - increase number to create automated animation
          group.rotation.x = 0 * elapsedTime;
          group.rotation.y = 0 * elapsedTime;

          group.rotation.x += 2 * (targetY - group.rotation.x);
          group.rotation.y += 1.5 * (targetX - group.rotation.y);
        }
        animate();
      },

    );

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

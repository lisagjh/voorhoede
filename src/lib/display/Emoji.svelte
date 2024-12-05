<script>
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";


  let canvas;

  onMount(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.setZ(100);

      // Load SVG
loader.load("src/lib/assets/emoji.svg", (data) => {
  const paths = data.paths;

  paths.forEach((path)=> {
    const fillMaterial = new THREE.MeshBasicMaterial({
      color: path.color || 0x000000,
      side: THREE.DoubleSide,
    })
  })
})

      //
      const loader = new SVGLoader();
      loader.load("/src/lib/assets/emoji.svg", (data) => {
        const paths = data.paths;

        paths.forEach((path) => {
          const material = new THREE.MeshBasicMaterial({
            color: path.color || 0x000000, // Default to green if no color
            side: THREE.DoubleSide,
            depthWrite: false,
          });

          const shapes = SVGLoader.createShapes(path);

          shapes.forEach((shape) => {
            const geometry = new THREE.ShapeGeometry(shape);
            const mesh = new THREE.Mesh(geometry, material);

            mesh.scale.set(0.1, 0.1, 0.1); // Scale down if needed
            scene.add(mesh);
          });
        });

        // Optional: Adjust camera to fit SVG
        const box = new THREE.Box3().setFromObject(scene);
        const size = new THREE.Vector3();
        box.getSize(size);
        camera.position.z = Math.max(size.x, size.y) * 2;
      });

      // Animation loop
      function animate() {
        requestAnimationFrame(animate);

        // Render the scene
        renderer.render(scene, camera);
      }

      animate();
    }
  });
</script>

<canvas bind:this={canvas}></canvas>

<!-- <img bind:this={canvas} src="/src/lib/assets/emoji.svg" alt="frownie face" /> -->

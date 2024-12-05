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
    camera.position.setZ(50);

    const loader = new SVGLoader();

    loader.load(
      "/emoji.svg",
      (data) => {
        const group = new THREE.Group();

        data.paths.forEach((path) => {
          const material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8
          });

          try {
            const shapes = path.toShapes(true);
            shapes.forEach((shape) => {
              const geometry = new THREE.ExtrudeGeometry(shape, {
                depth: 1,
                bevelEnabled: false
              });
              const mesh = new THREE.Mesh(geometry, material);
              group.add(mesh);
            });
          } catch (error) {
            console.error("SVG loading error:", error);
          }
        });

        // Center the group
        const box = new THREE.Box3().setFromObject(group);
        const center = box.getCenter(new THREE.Vector3());
        group.position.sub(center);

        scene.add(group);

        function animate() {
          requestAnimationFrame(animate);
          group.rotation.y += 0.01;
          renderer.render(scene, camera);
        }
        animate();
      },
      null,
      (error) => {
        console.error("SVG load error:", error);
      }
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
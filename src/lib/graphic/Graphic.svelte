<script>
  import P5 from "p5-svelte";

  let containerWidth, containerHeight;
  let customFont;

  const preload = (p5) => {
    customFont = p5.loadFont('/font/Grand-Bageur.ttf');
  };

  const sketch = (p5) => {
    let t = 0; 

    p5.preload = () => {
      preload(p5);
    };

    p5.setup = () => {
      p5.createCanvas(containerWidth, containerHeight);
      p5.noStroke();
      p5.fill("#1b14a6");
      p5.textFont(customFont);
      p5.textSize(100);
      p5.textAlign(p5.CENTER, p5.CENTER);
    };

    p5.draw = () => {
      p5.background(205, 201, 201, 75);

      for (let x = 0; x <= p5.width; x = x + 200) {
        for (let y = 0; y <= p5.height; y = y + 200) {
          const xAngle = p5.map(
            p5.mouseX,
            0,
            p5.width,
            -4 * p5.PI,
            4 * p5.PI,
            true
          );
          const yAngle = p5.map(
            p5.mouseY,
            0,
            p5.height,
            -4 * p5.PI,
            4 * p5.PI,
            true
          );

          const angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);

          // Adjusted movement scale
          const myX = x + 20 * p5.cos(3 * p5.PI * t + angle);
          const myY = y + 20 * p5.sin(3 * p5.PI * t + angle);

          p5.push();
          p5.translate(myX, myY);
          p5.rotate(angle);
          p5.text("DDA", 0, 0);
          p5.pop();
        }
      }

      t = t + 0.005; // update time
    };
  };
</script>

<div
  class="header-container"
  bind:offsetWidth={containerWidth}
  bind:offsetHeight={containerHeight}
>
  <P5 {sketch} />
</div>

<style>
  div {
    position: absolute;
    top: 0;
    justify-self: center;
    width: 100vw;
    height: 100vh;
    z-index: 20;
  }
</style>
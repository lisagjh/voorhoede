<script>
    import P5 from "p5-svelte";
  
    let containerWidth, containerHeight;

    const sketch = (p5) => {
      let t = 0; // time variable
  
      p5.setup = () => {
        p5.createCanvas(containerWidth, containerHeight);
        p5.noStroke();
        p5.fill("#364bf7");
        p5.textFont("Helvetica");
        p5.textSize(36);
      };
  
      p5.draw = () => {
        p5.background(255, 255, 255, 50);
  
        // make a x and y grid of text
        for (let x = 0; x <= p5.width; x = x + 100) {
          for (let y = 0; y <= p5.height; y = y + 100) {
            // starting point of each text depends on mouse position
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
  
            // and also varies based on the text's location
            const angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);
  
            // each text moves in a circle
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
      z-index: -1;
    }
  </style>
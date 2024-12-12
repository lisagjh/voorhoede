<script>
  import Header from "../lib/display/Header.svelte";
  import Footer from "$lib/display/Footer.svelte";
  import { onNavigate } from "$app/navigation";
  import Graphic from "../lib/graphic/Graphic.svelte";
  import Glitter from "../lib/graphic/Glitter.svelte";

  // Graphic component is invisible, because no transition happening
  let isTransitioning = false;

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    // Graphic is visible because transitionis happening
    isTransitioning = true;

    return new Promise((resolve) => {
      const transition = document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });

      // Listen for the end of the transition
      transition.finished.then(() => {
        // Graphic invisible again
        isTransitioning = false;
      });
    });
  });
</script>

<div class="bg" class:show-transition={isTransitioning}>
 <!-- <div class="show-transition"> -->
  <Graphic />
</div>

<Header />

<div class="glitter" class:show-transition={isTransitioning}>
  <Glitter/>
</div>


<main>
  <slot></slot>
</main>

<Footer />

<style>
div.bg {
    position: fixed;
    width: 110vw;
    height: 110vh;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;
    scale: 1.2;
  }

  div.bg.show-transition {
    opacity: 1;
    scale: 1;
    pointer-events: auto;
  }

  div.glitter {
    position: fixed;
    width: 110vw;
    height: 110vh;
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s ease;
    scale: 1.2;
  }

  div.glitter.show-transition {
    opacity: 1;
    scale: 1;
    pointer-events: auto;
  }

  /* view transitions! */

  :root::view-transition-old(root) {
    view-transition-name: page-old;
    animation: slide-out 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  :root::view-transition-new(root) {
    view-transition-name: page-new;
    animation: slide-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-20%);
      opacity: 0;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateX(20%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>

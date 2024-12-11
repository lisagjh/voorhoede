<script>
  import Header from "../lib/display/Header.svelte";
  import Footer from "$lib/display/Footer.svelte";
  import { onNavigate } from "$app/navigation";
  import Graphic from "../lib/graphic/Graphic.svelte";

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
  <Graphic />
</div>

<Header />

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
    transition: opacity 0.5s ease;
  }

  div.bg.show-transition {
    opacity: 1;
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


  ::view-transition-old(root)::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1); /* Subtle overlay */
    z-index: 3;
    animation: fade-intermediate 0.5s ease-in-out;
  }

  @keyframes fade-intermediate {
    0% {
      opacity: 0;
      transform: scale(1.1);
    }
    50% {
      opacity: 0.2;
      transform: scale(1.05);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>

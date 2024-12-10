<script>
  import Header from "../lib/display/Header.svelte";
  import Footer from "$lib/display/Footer.svelte";
  import { onNavigate } from "$app/navigation";
  // import Graphic from "../lib/graphic/Graphic.svelte";

  // https://svelte.dev/blog/view-transitions
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<!-- <div class="bg">
  <Graphic />
</div> -->

<Header />

<main>
  <slot></slot>
</main>

<Footer />

<style>
  /* div.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 110vw;
    height: 110vh;
  } */

  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateY(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateY(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }
</style>

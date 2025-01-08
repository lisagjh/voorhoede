<script>
  import { onNavigate } from "$app/navigation";

  import Header from "../lib/display/Header.svelte";
  import Footer from "$lib/display/Footer.svelte";


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

<a href="#main" class="skip-link">Skip to main content</a>

<Header />

<main id="main">
  <slot></slot>
</main>
  
<Footer />

<style>
  .skip-link {
    position: absolute;
    opacity: 0;
  }
</style>
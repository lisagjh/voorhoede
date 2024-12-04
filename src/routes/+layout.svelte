<script>
  import { onNavigate } from "$app/navigation";

  import Header from "../lib/display/Header.svelte";
  import Footer from "$lib/display/Footer.svelte";
  import Graphic from "../lib/display/Graphic.svelte";

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

<Header />

<Graphic />

<main>
  <slot></slot>
</main>

<Footer />

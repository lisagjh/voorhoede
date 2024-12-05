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

<main>
  <slot></slot>
</main>

<Footer />

<style>
  @media (width > 50rem) {
    main {
      margin: 0;

      margin: 0.25rem;
      margin-top: 1rem;
      padding-top: 2.5rem;
      justify-self: end;
      max-width: calc(100% - 18%);
    }
  }
</style>

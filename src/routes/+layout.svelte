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

<style>
      @media (width > 50rem) {
        main {
          margin-top: 1rem;
          padding-top: 2.5rem;
          justify-self: end;
          max-width: calc(100% - 11rem);
        }
      }
</style>
<script>
<<<<<<< Updated upstream
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
=======
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
>>>>>>> Stashed changes
</script>

<Header />

<main>
  <slot></slot>
</main>
  
<Footer />

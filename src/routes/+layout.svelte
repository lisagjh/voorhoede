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

<div id="skip">
  <a href="#content">Skip to main content</a>
</div>
<Header />

<main id="content">
  <slot></slot>
</main>
  
<Footer />

<style>
  #skip a {
    display: block;
    position: absolute;
    left: -999px;
    top: -999px;
    }

#skip a:focus {
    left: 0;
    top: 0;
    padding: .1rem;
    background: var(--white);
    border:1px solid var(--blue);
    }
</style>
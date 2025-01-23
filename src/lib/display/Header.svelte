<script>
  import { onMount } from "svelte";
  import Nav from "$lib/navigation/Nav.svelte";
  import Logo from "$lib/display/Logo.svelte";

  let isJsEnabled = $state(false);

  onMount(() => {
    isJsEnabled = true;
  });
</script>

<header class:js-enabled={isJsEnabled}>
  <Logo />
  <Nav />
</header>

<style>
  header {
    font-family: var(--martian-mono);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  header.js-enabled {
    flex-direction: row;
  }

  @media (width >= 50rem) {
    header.js-enabled, header {
      /* width is handled in the global.css to prevent issues with layout */
      font-size: 0.88rem;
      flex-direction: column;
      position: sticky; 
      top: 0; 
      height: fit-content; 
      width: fit-content;
      padding: 1rem;
      justify-content: flex-start;
      z-index: 1;
    }
  }

  @media (width >= 56rem) {
    header {
      font-size: 1rem;
    }
  }
</style>

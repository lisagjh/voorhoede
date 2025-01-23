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
      font-size: 0.88rem;
      display: flex;
      flex-direction: column;
      position: fixed;
      left: 0;
      top: 0;
      width: 17%;
      height: 100%;
      max-height: 100vh;
      padding: 1rem;
      justify-content: flex-start;
    }
  }

  @media (width >= 56rem) {
    header {
      font-size: 1rem;
    }
  }
</style>

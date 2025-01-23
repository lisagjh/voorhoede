<script>
  import Nav from "$lib/navigation/Nav.svelte";
  import Logo from "$lib/display/Logo.svelte";
</script>

<header>
  <Logo />
  <Nav />
</header>

<style>
  header {
    font-family: var(--martian-mono);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: hidden;
    overflow: hidden;
    /*in the header the padding top is removed for the right padding and margin*/
    padding: 2rem 2rem 0rem 2rem;
    width: 100%;
    height: 100%;
  }

  @media (width >= 50rem) {
    header {
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

  @media (scripting: none) {
    header {
      display: flex;
      flex-direction: column;
      height: fit-content;
      max-height: 20rem;
      overflow: auto;
    }

    @media (width >= 50rem) {
      header {
        min-height: 100vh;
      }
    }
  }
</style>

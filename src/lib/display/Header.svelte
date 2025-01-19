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
    padding: 0.5rem 1rem;
    width: 100%;
    height: 100%;
  }

  @media (width >= 50rem) {
    header {
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

  @media (scripting: none) {
    header {
      display: flex;
      flex-direction: column;
      height: fit-content;
      max-height: 20rem;
      overflow: auto;
    }
  }
</style>

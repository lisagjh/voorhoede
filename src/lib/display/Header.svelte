<script>
    import Logo from "$lib/display/Logo.svelte";
    import Nav from "$lib/navigation/Nav.svelte";
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
      /* ensures the header stays during the view transition and doesnt fade or anything */
      view-transition-name: header;

    }
  
    @media (width > 50rem) {
      header {
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        top: 0;
        width: 16%;
        height: 100%;
        max-height: 100vh;
        padding: 1rem;
        justify-content: flex-start;
      }
    }
  </style>
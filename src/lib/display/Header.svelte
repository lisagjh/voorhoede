<script>
  import Logo from "$lib/display/Logo.svelte"
  import Nav from "$lib/navigation/Nav.svelte";
</script>

<header>
    <Logo />
    <Nav/>
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
    }

    @media (width > 50rem) {
        header {
            display: flex;
            flex-direction: column;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            max-width: 10rem;
            height: 100%;
            max-height: 100vh;
            padding: 0.25rem;
            justify-content:flex-start;
        }
    }
</style>
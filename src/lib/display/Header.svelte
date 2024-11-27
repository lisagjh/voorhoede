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
        align-items: center;
        justify-content: space-between;
        overflow-x: hidden;
        overflow: hidden;
        padding: 0.5rem 1rem;
        width: 100%;
    }
</style>
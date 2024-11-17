<script>
  import Logo from "$lib/atom/Logo.svelte";
  import Navigation from "$lib/molecule/Navigation.svelte";

</script>

<header>
    <Logo />
    <Navigation />
</header>

<style>
    header {
        font-family: var(--martian-mono);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        width: 100%;
    }
</style>
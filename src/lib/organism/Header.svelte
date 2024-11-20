<script>
	import MenuToggleBtn from './../atom/MenuToggleBtn.svelte';
  import Logo from "$lib/atom/Logo.svelte";
  import Nav from "$lib/molecule/Nav.svelte";

  let isOpen = false; // Initial state of the menu

  function toggle() {
    isOpen = !isOpen; // Toggle the menu state
    console.log("click")
  }</script>

<header>
    <Logo />
    <MenuToggleBtn {toggle} />
    <Nav/>
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
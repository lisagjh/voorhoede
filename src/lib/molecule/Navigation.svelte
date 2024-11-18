<script>
  import { onMount } from "svelte";
  import NavItem from "$lib/atom/NavItem.svelte";
  import MenuToggleBtn from "$lib/atom/MenuToggleBtn.svelte";

  let isOpen = false; // Initial state of the menu

  function toggle() {
    isOpen = !isOpen; // Toggle the menu state
  }

  onMount(() => {
    function handleBackdropClick(event) {
      if (isOpen) {
        isOpen = false; // Close the menu when clicking the backdrop
      }
    }

    // Add the event listener to the backdrop
    const backdrop = document.getElementById("backdrop");
    backdrop.addEventListener("click", handleBackdropClick);

    // Cleanup listener when the component is destroyed
    return () => {
      backdrop.removeEventListener("click", handleBackdropClick);
    };
  });
</script>

<MenuToggleBtn {isOpen} {toggle} />
<nav class:is-open={isOpen}>
  <ul>
    <NavItem {toggle} />
  </ul>
</nav>

<div id="backdrop" class:is-open={isOpen}></div>

<style>
  nav {
    background-color: var(--white);
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    /* clamp(min, val, max) - clamp means it will use the preferred value (val) when its between the min or max value. */
    width: clamp(190px, 50%, 300px);
    z-index: 1;
    border-left: 1px solid var(--black);

    transition:
      transform 0.3s ease-out,
      opacity 0.3s ease-in-out;
    transform: translateX(100%); /* Start off-screen */
    opacity: 0; /* Start invisible */
  }

  nav.is-open {
    transform: translateY(0); /* Slide into view */
    opacity: 1; /* Fully visible */
    backdrop-filter: drop-shadow(40px 40px 100px black);
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    transform: translateX(-10%);
    clip-path: circle(29.3% at 86% 89%);
    transition: all 0.25s ease-in-out;
  }

  div.is-open {
    background-color: black;
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    transform: translateX(0);
    clip-path: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    margin-top: 5rem;
    padding: 0;
  }
</style>

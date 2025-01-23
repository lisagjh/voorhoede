<script>
  import { onMount } from "svelte";
  import ToggleButton from "../input/ToggleButton.svelte";
  import NavItem from "./NavItem.svelte";

  let isOpen = $state(false);
  let isJsEnabled = $state(false);
  let { openVacancies = 0 } = $props();

  const pages = [
    { title: "Home", ref: "/" },
    { title: "Over Ons", ref: "/over" },
    { title: "Events", ref: "/events" },
    { title: "Publicaties", ref: "/publicaties" },
    { title: "Leden", ref: "/members" },
    { title: "Vacatures", ref: "/vacatures" },
  ];

  const pagesCTA = [
    { title: "Inloggen", ref: "/inloggen" },
    { title: "Join", ref: "/Lid-worden" },
  ];

  const allPages = [...pages, ...pagesCTA];

  // runs whener isOpen variable changes
  $effect(() => {
    // When menu is open, set body overflow to "hidden" to prevent scrolling
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }

  function handleKeydown(event) {
    if (event.key === "Escape" && isOpen) {
      closeMenu();
    }
  }

  onMount(() => {
    isJsEnabled = true;
    return () => {
      document.body.style.overflow = "";
    };
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<ToggleButton {isOpen} toggle={toggleMenu} />

<nav 
  class:is-open={isOpen} 
  class:js-enabled={isJsEnabled} 
  hidden={isJsEnabled}
>
  <ul>
    {#each allPages as page}
      <li>
        <NavItem
          title={page.title}
          href={page.ref}
          badge={page.ref === "/vacatures" ? openVacancies : null}
          onNavigate={closeMenu}
        />
      </li>
    {/each}
  </ul>
</nav>

<div
  role="presentation"
  id="backdrop"
  class:is-open={isOpen}
  onclick={closeMenu}
></div>

<style>
  nav {
    width: fit-content;
    height: fit-content;
    background-color: var(--white);
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
  }

  li {
    font-family: var(--martian-mono);
    margin: 1rem;
    list-style: "";
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    transform: translateX(-10%);
    transition: all 0.25s ease-in-out;
    z-index: 3;
  }

  div.is-open {
    background-color: black;
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    transform: translateX(0);
  }

  nav.js-enabled {
    position: absolute;
    top: 0;
    right: 0;
    width: clamp(200px, 100%, 290px);
    height: 100vh;
    opacity: 0;
    transform: translateY(-100%);
    z-index: 5;
    border-left: 1px solid var(--black);
    transition: 0.5s ease-in-out;
  }

  nav.js-enabled.is-open {
    display: block;
    opacity: 1;
    transform: translateY(0);
    transition: 0.5s ease-in-out;
  }

  .js-enabled ul {
    flex-direction: column;
    margin-top: 5rem;
    overflow-x: hidden;
  }

  @media (width >= 50rem) {
    nav, nav.js-enabled {
      background-color: transparent;
      border: none;
      position: relative;
      visibility: visible;
      display: flex;
      max-width: 100%;
      transform: none;
      opacity: 1;
      height: auto;
      margin-top: 2rem;
    }

    ul, .js-enabled ul {
      flex-direction: column;
      margin-top: 0;
      overflow-x: hidden;
    }

    li {
      margin: 0;
      margin-bottom: 1.5rem;
    }

    div {
      display: none;
    }
  }
</style>

<script>
  import { onMount } from "svelte";
  import ToggleButton from "../input/ToggleButton.svelte";
  import NavItem from "./NavItem.svelte";

  let isOpen = $state(false);
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

  $effect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
  });

  function toggleMenu() {
    isOpen = !isOpen;
  }

  // runs whener isOpen variable changes
  $effect(() => {
    // When menu is open, set body overflow to "hidden" to prevent scrolling
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  function closeMenu() {
    isOpen = false;
  }

  function handleKeydown(event) {
    if (event.key === "Escape" && isOpen) {
      closeMenu();
    }
  }

  onMount(() => {
    return () => {
      // Reset body overflow to default when component is destroyed
      // This prevents the page from staying locked if component is removed while menu is open
      document.body.style.overflow = "";
    };
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<ToggleButton {isOpen} toggle={toggleMenu} />

<nav class:is-open={isOpen}>
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
  .is-open {
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  nav {
    display: none;
    visibility: hidden;
    background-color: var(--white);
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    /* clamp(min, val, max) - clamp means it will use the preferred value (val) when its between the min or max value. */
    width: clamp(200px, 50%, 300px);
    z-index: 5;
    border-left: 1px solid var(--black);
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    transform: translateX(100%);
    opacity: 0;
  }

  nav.is-open {
    visibility: visible;
    display: flex;
    transform: translateX(0);
    opacity: 1;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 5rem 0 1rem;
    padding: 0;
    list-style: none;
  }

  li {
    font-family: var(--martian-mono);
    margin: 1rem;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    transform: translateX(-10%);
    clip-path: circle(29.3% at 86% 89%);
    transition: all 0.25s ease-in-out;
    z-index: 3;
  }

  div.is-open {
    background-color: black;
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    transform: translateX(0);
    clip-path: none;
  }

  @media (width >= 50rem) {
    nav {
      background-color: transparent;
      border: none;
      max-width: 100%;
      position: relative;
      visibility: visible;
      display: flex;
      transform: none;
      opacity: 1;
      height: auto;
      margin-top: 2rem;
    }

    ul {
      margin-top: 0;
    }

    li {
      margin: 0;
      margin-bottom: 1.5rem;
    }

    div {
      display: none;
    }
  }

  @media (scripting: none) {
    nav {
      position: relative;
      display: block;
      visibility: visible;
      transform: translateX(0%);
      opacity: 1;
      height: fit-content;
      width: fit-content;
      border: none;
    }

    div {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      overflow: scroll;
      margin: 0;
    }

    @media (width >= 50rem) {
      ul {
        flex-direction: column;
        margin-top: 0;
      }
    }
  }
</style>

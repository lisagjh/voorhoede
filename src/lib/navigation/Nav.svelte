<script>
  import ToggleButton from "../input/ToggleButton.svelte";
  import NavItem from "./NavItem.svelte";

  let { openVacancies = 0, isOpen = false } = $props();

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
    { title: "Join", ref: "/join" },
  ];
  const allPages = [...pages, ...pagesCTA];

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }
</script>

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

<div id="backdrop" class:is-open={isOpen} onclick={closeMenu}></div>

<style>
  nav {
    position: absolute;
    top: 2rem;
    transform: translateY(-100%);
    opacity: 0;
    background-color: #f2f2f2;
    transition: all 0.35s ease-in-out;
    z-index: 90;
  }

  nav.is-open {
    visibility: visible;
    display: flex;
    transform: translateX(0);
    opacity: 1;
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
</style>

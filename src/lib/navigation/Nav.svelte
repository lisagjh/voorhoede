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

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div id="backdrop" class:is-open={isOpen} onclick={closeMenu}></div>

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
    width: clamp(190px, 50%, 300px);
    z-index: 1;
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
</style>

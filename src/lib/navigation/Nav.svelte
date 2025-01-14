<script>
  import ToggleButton from "../input/ToggleButton.svelte";
  import NavItem from "./NavItem.svelte";

  // let { isOpen = false, openVacancies = 0 } = $props();

  // Navigation menu data
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

  let openVacancies = 0
  let isOpen = false

  function toggleMenu() {
        isOpen = !isOpen;
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
        />
      </li>
    {/each}
  </ul>
</nav>

<div id="backdrop" class:is-open={isOpen}></div>

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
</style>

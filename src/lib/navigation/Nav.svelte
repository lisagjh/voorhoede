<script lang="ts">
  import { onMount } from "svelte";
  import MenuToggleBtn from "./../input/MenuToggleBtn.svelte";
  import NavItem from "./NavItem.svelte";

  let isOpen = false; // Menu visibility state
  let openVacancies = 0; // Count of open vacancies
  let isSmallScreen = true; // Default to small screen until checked
  const delay = 1750;

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

  const toggle = () => {
    if (isSmallScreen) {
      isOpen = !isOpen;
      document.body.style.overflow = isOpen ? "hidden" : "";

      // Start the vacancy animation when the menu opens
      if (isOpen && openVacancies === 0) {
        startVacancyAnimation();
      }
    }
  };

  const closeMenuOnEsc = (event: KeyboardEvent) => {
    if (event.key === "Escape" && isOpen) {
      isOpen = false;
      document.body.style.overflow = "";
    }
  };

  const updateScreenSize = () => {
    if (typeof window !== "undefined") {
      isSmallScreen = window.innerWidth <= 800;
      if (!isSmallScreen) {
        isOpen = false;
        document.body.style.overflow = "";
        if (openVacancies === 0) {
          startVacancyAnimation(); // Start animation immediately on large screens
        }
      }
    }
  };

  const startVacancyAnimation = async () => {
    try {
      const response = await fetch(
        "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/"
      );
      const vacatures = await response.json();
      const totalVacancies = vacatures.data?.length || 0;
      animateCounter(0, totalVacancies, delay);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  };

  const animateCounter = (start: number, end: number, duration: number) => {
    const range = end - start;
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      openVacancies = Math.floor(start + range * easeOut(progress));
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const easeOut = (t: number) => t * (2 - t);

  const menuToggle: Action = (node) => {
    const handleClick = () => toggle();
    node.addEventListener("click", handleClick);
    return { destroy: () => node.removeEventListener("click", handleClick) };
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      isSmallScreen = window.innerWidth <= 800;

      // Start animation immediately on large screens
      if (!isSmallScreen && openVacancies === 0) {
        startVacancyAnimation();
      }

      document.addEventListener("keydown", closeMenuOnEsc);
      window.addEventListener("resize", updateScreenSize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateScreenSize);
      }
    };
  });
</script>

<MenuToggleBtn {isOpen} {toggle} />

<nav class:is-open={isOpen}>
  <ul>
    {#each allPages as page}
      <li use:menuToggle>
        <NavItem
          title={page.title}
          href={page.ref}
          badge={page.ref === "/vacatures" ? openVacancies : null}
        />
      </li>
    {/each}
  </ul>
</nav>

<div id="backdrop" class:is-open={isOpen} use:menuToggle></div>

<style>
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
    margin: 5rem 0 1rem;
    padding: 0;
    list-style: none;
  }

  li {
    font-family: var(--martian-mono);
    margin: 1rem;
  }

  @media (min-width: 800px) {
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

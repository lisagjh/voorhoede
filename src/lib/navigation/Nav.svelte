<script lang="ts">
  import { onMount } from "svelte";
  import MenuToggleBtn from "./../input/MenuToggleBtn.svelte";
  import NavItem from "./NavItem.svelte";

  // State variables
  let isOpen = false;
  let openVacancies = 0;
  let isSmallScreen = true;
  let navElement: HTMLElement;

  // Configuration
  const breakpoint = 800;
  const delay = 1750;

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

  // open and close menu and prevent scroll
  function toggleMenu() {
    if (isSmallScreen) {
      isOpen = !isOpen;
      setBodyScroll();

      // Start counting vacancies when menu opens
      if (isOpen && openVacancies === 0) {
        startVacancyAnimation();
      }
    }
  }

  // enables or disables body scroll based on state
  function setBodyScroll() {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  // close menu on esc
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape" && isOpen) {
      closeMenu();
    }
  }

  // force close menu
  function closeMenu() {
    isOpen = false;
    setBodyScroll();
  }

  // close menu after tabbing out last item
  function handleTabKey(event: KeyboardEvent) {
    if (event.key === "Tab" && isOpen) {
      const focusedElement = document.activeElement;
      const focusableElements = getFocusableElements();
      const lastElement = focusableElements[focusableElements.length - 1];

      if (focusedElement === lastElement && !event.shiftKey) {
        closeMenu();
      }
    }
  }

  // get all focusable items to find last item
  function getFocusableElements() {
    return navElement.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
  }

  function updateScreenSize() {
    if (typeof window !== "undefined") {
      isSmallScreen = window.innerWidth <= breakpoint;

      if (!isSmallScreen) {
        closeMenu();
        if (openVacancies === 0) {
          startVacancyAnimation();
        }
      }
    }
  }

  async function startVacancyAnimation() {
    try {
      const response = await fetch(
        "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/"
      );
      const data = await response.json();
      const totalVacancies = data.data?.length || 0;
      animateCounter(0, totalVacancies, delay);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  }

  // animation
  function animateCounter(start: number, end: number, duration: number) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      openVacancies = Math.floor(start + range * easeOutAnimation(progress));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // easing for anim
  function easeOutAnimation(progress: number) {
    // progress is 0 at the start of the animation, and 1 at the end of the animation
    // so this is how to animation gets it easing, causing it to slow down at the end
    return progress * (2 - progress);
  }

  // handle clicks on menu
  function menuToggleAction(node: HTMLElement): { destroy: () => void } {
    function handleClick() {
      toggleMenu();
    }
    node.addEventListener("click", handleClick);
    return {
      destroy() {
        node.removeEventListener("click", handleClick);
      },
    };
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      updateScreenSize();

      // Add event listeners
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("keydown", handleTabKey);
      window.addEventListener("resize", updateScreenSize);

      // Cleanup on unmount
      return () => {
        document.removeEventListener("keydown", handleEscapeKey);
        document.removeEventListener("keydown", handleTabKey);
        window.removeEventListener("resize", updateScreenSize);
      };
    }
  });
</script>

<MenuToggleBtn {isOpen} toggle={toggleMenu} />

<nav class:is-open={isOpen} bind:this={navElement}>
  <ul>
    {#each allPages as page}
      <li use:menuToggleAction>
        <NavItem
          title={page.title}
          href={page.ref}
          badge={page.ref === "/vacatures" ? openVacancies : null}
        />
      </li>
    {/each}
  </ul>
</nav>

<div id="backdrop" class:is-open={isOpen} use:menuToggleAction></div>

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

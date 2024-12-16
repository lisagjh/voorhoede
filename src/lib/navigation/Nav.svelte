<script lang="ts">
  import { onMount } from "svelte";
  import MenuToggleBtn from "./../input/MenuToggleBtn.svelte";
  import NavItem from "./NavItem.svelte";

  // Menu state
  let isOpen = false; // Initialize state for menu visibility
  let openVacancies = 0;
  let hasAnimated = false;
  const delay = 1750;

  // Pages data
  let pages = [
    { title: "Home", ref: "/" },
    { title: "Leden", ref: "/members" },
    { title: "Vacatures", ref: "/vacatures" },
    { title: "Game", ref: "/game" },
    { title: "BYOCT", ref: "/BYOCT" },
  ];

  let pagesCTA = [
    // { title: "Inloggen", ref: "/inloggen" },
    // { title: "Join", ref: "/join" },
  ];

  let allPages = [...pages, ...pagesCTA];

  // Toggle menu visibility and handle body overflow
  function toggle() {
    isOpen = !isOpen;
    document.body.style.overflow = isOpen ? "hidden" : ""; // Disable/enable scrolling
    if (isOpen && !hasAnimated) {
      hasAnimated = true;
    }
  }

  // Fetch vacancies and animate counter
  async function fetchAndAnimateVacancies() {
    try {
      const response = await fetch(
        "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/"
      );
      const vacatures = await response.json();
      const totalVacancies = vacatures.data ? vacatures.data.length : 0;
      
      // Always animate from 0 to total vacancies
      animateCounter(0, totalVacancies, delay);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  }

  // Function to animate the vacancy badge in the nav menu
  function animateCounter(start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function easeOut(t) {
      return t * (2 - t);
    }

    function update(currentTime) {
      const elapsedTime = currentTime - startTime;
      const normalizedTime = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOut(normalizedTime);
      openVacancies = Math.floor(start + range * easedProgress);
      
      if (normalizedTime < 1) {
        requestAnimationFrame(update);
      }
    }
    
    requestAnimationFrame(update);
  }

  // to close the menu after a menu item or backdrop gets clicked
  const menuToggle: Action = (node) => {
    const handleClick = () => {
      toggle(); // Call the toggle function when clicked
    };

    node.addEventListener("click", handleClick);

    return {
      destroy() {
        node.removeEventListener("click", handleClick);
      },
    };
  };

  // close menu when esc is pressed
  function closeMenuOnEsc(event) {
    if (event.key === "Escape") {
      isOpen = false;
      document.body.style.overflow = "";
    }
  }

  onMount(async () => {
    document.addEventListener("keydown", closeMenuOnEsc);

    // Fetch and animate vacancies immediately on mount
    fetchAndAnimateVacancies();

    // Ensure proper initial state on load
    const handleResize = () => {
      if (window.innerWidth >= 800) {
        isOpen = false;
        document.body.style.overflow = "";
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", closeMenuOnEsc);
      window.removeEventListener('resize', handleResize);
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
    transform: translateY(0);
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
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    margin-top: 5rem;
    margin-bottom: 1rem;
    padding: 0;
  }

  li {
    font-family: var(--martian-mono);
    margin: 1rem;
  }

  @media (width > 50rem) {
    nav {
      background-color: transparent;
      border: none;
      position: relative;
      visibility: visible;
      display: flex;
      transform: none;
      opacity: 1;
      height: fit-content;
      margin-top: 2rem;
      width: 100%;
      right: auto;
      top: auto;
      
      /* Reset mobile-specific styles */
      border-left: none;
    }

    ul {
      margin-top: 0;
      justify-content: flex-start;
      gap: 2rem;
    }

    li {
      margin: 0;
    }

    div {
      display: none;
    }
  }
</style>
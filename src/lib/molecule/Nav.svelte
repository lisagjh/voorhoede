<script>
  import MenuToggleBtn from "./../atom/MenuToggleBtn.svelte";
  import { onMount } from "svelte";
  import NavItem from "$lib/atom/NavItem.svelte";

  let pages = [
    { title: "Home", ref: "/" },
    { title: "Over Ons", ref: "/over" },
    { title: "Events", ref: "/events" },
    { title: "Publicaties", ref: "/publicaties" },
    { title: "Leden", ref: "/members" },
    { title: "Vacatures", ref: "/vacatures" },
  ];

  let pagesCTA = [
    { title: "Inloggen", ref: "/inloggen" },
    { title: "Join", ref: "/join" },
  ];

  let allPages = [...pages, ...pagesCTA];

  let openVacancies = 0; // Starting count for vacancies
  const delay = 1750; // Delay on the animation

  onMount(async () => {
    try {
      const response = await fetch(
        "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/"
      );
      const vacatures = await response.json();
      const totalVacancies = vacatures.data ? vacatures.data.length : 0;

      // Animate the counter to transition from 0 to the fetched vacancy count
      animateCounter(openVacancies, totalVacancies, delay);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  });

  //! koppelen aan de menu toggle bij eerste keer 
  // standaard = false, na eerste keer true
  // local storage bihhouden
  function animateCounter(start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function easeOut(t) {
      return t * (2 - t);
    }

    function update(currentTime) {
      const elapsedTime = currentTime - startTime;
      const normalizedTime = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOut(normalizedTime); // Apply easing function
      openVacancies = Math.floor(start + range * easedProgress);

      if (normalizedTime < 1) {
        requestAnimationFrame(update); // Continue the animation
      }
    }

    requestAnimationFrame(update);
  }

  let isOpen = false; // Initial state of the menu

  function toggle() {
    isOpen = !isOpen; // Toggle the menu state
  }
</script>

<MenuToggleBtn {isOpen} {toggle} />

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

<div id="backdrop" class:is-open={isOpen} {toggle}></div>

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

  li {
    font-family: var(--martian-mono);
    margin: 0.5rem 1rem;
  }
</style>

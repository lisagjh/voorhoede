<script lang="ts">
  import { onMount } from "svelte";
  import NavItem from "./NavItem.svelte";

  // State variables
  let isOpen = false;
  let openVacancies = 0;

  // Configuration
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
</script>


<input type="checkbox" id="menu-toggle" class="menu-toggle" />
<label for="menu-toggle" class="menu-button">
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 2H16" stroke="#121212" stroke-width="2.5" stroke-linecap="round"
    ></path>
    <path d="M2 7H16" stroke="#121212" stroke-width="2.5" stroke-linecap="round"
    ></path>
    <path
      d="M2 12H16"
      stroke="#121212"
      stroke-width="2.5"
      stroke-linecap="round"
    ></path>
  </svg>
  Menu
</label>

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
  /* Clean version */
  .menu-toggle {
    display: none;
  }

  .menu-toggle:checked ~ nav {
    margin-top: 0;
    transform: translateY(0);
    opacity: 1;
    transition:
      opacity 0.15s ease-in-out,
      transform 0.3s ease-out;
  }

  nav {
    position: absolute;
    top: 2rem;
    transform: translateY(-100%);
    opacity: 0;
    background-color: #f2f2f2;
    transition: all 0.35s ease-in-out;
    z-index: 90;
  }
</style>

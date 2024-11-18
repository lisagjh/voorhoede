<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let openVacancies = 0; // Final number of vacancies
  let displayedVacancies = 0; // Number shown to the user, animated from 0
  const delay = 750; // Delay on the animation

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

  // Fetch the data on the client side
  onMount(async () => {
    try {
      const response = await fetch(
        "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/"
      );
      const vacatures = await response.json();
      openVacancies = vacatures.data.length; // Get the final count
      // Add delay before the animation starts
      setTimeout(() => {
        animateCounter(0, openVacancies, 1000); // animate from 0 start to 1000 end
      }, delay);
    } catch (error) {
      // in case something goes wrong
      console.error("Error fetching openVacancies:", error);
    }
  });

  // Animate the counter
  function animateCounter(start, end, duration) {
    const range = end - start; // Difference to animate, so from 0 to amount of openVacancies
    const startTime = performance.now();

    function update(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // how far is the animation, 0 is start, 1 is end
      // Calculate current value
      displayedVacancies = Math.floor(start + range * progress);
      if (progress < 1) {
        requestAnimationFrame(update); // Continue the animation
      }
    }
    requestAnimationFrame(update);
  }

  // in order to add an active state to the navItem, u need to know what the url path is.
  let path = $page.url.pathname;

  $: currentPath = $page.url.pathname; // Update path reactively
  console.log(path);

  export let toggle;
</script>

{#each pages as page}
  <li>
    <a href={page.ref} on:click={toggle} class:active={currentPath == page.ref}>
      {page.title}
      {#if page.ref === "/vacatures"}
        <span id="badge">{displayedVacancies}</span>
        <!-- use displayedVacancies instead of openVacancies for the animation -->
      {/if}
    </a>
  </li>
{/each}

{#each pagesCTA as page}
  <li class="cta">
    <a href={page.ref} on:click={toggle} class:active={currentPath == page.ref}>
      {page.title}
    </a>
  </li>
{/each}

<style>
  .active {
    color: var(--blue);
    font-weight: 800;
    text-decoration: underline;
  }

  /* styling */

  li {
    font-family: var(--martian-mono);
    margin: 0.5rem 1rem;
  }

  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    color: var(--black);
    text-decoration: none;
    transition: 0.15s ease-in-out;
  }

  a:hover {
    color: var(--blue);
    font-weight: bolder;
    text-decoration: underline;
  }

  span {
    display: inline-block;
    transform: translate( -0.1rem, -0.1rem);
    color: var(--white);
    background-color: var(--blue);
    min-width: 1.5rem;
    padding: 0.05rem;
    transition: all 0.3s ease-in-out;
  }
</style>

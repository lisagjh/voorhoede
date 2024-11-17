<script>
  import { onMount } from "svelte";

  let openVacancies = 0; // Final number of vacancies
  let displayedVacancies = 0; // Number shown to the user, animated from 0
  const delay = 750; // Delay on the animation

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

  let pages = [
    { title: "Home", ref: "/" },
    { title: "Over Ons", ref: "/over" },
    { title: "Events", ref: "/events" },
    { title: "Publicaties", ref: "/publicaties" },
    { title: "Leden", ref: "/members" },
    { title: "Vacatures", ref: "/vacatures" },
  ];
</script>

{#each pages as page}
  <li>
    <a href={page.ref}>
      {page.title}
      {#if page.ref === "/vacatures"}
        <span id="badge">{displayedVacancies}</span>
        <!-- use displayedVacancies instead of openVacancies for the animation -->
      {/if}
    </a>
  </li>
{/each}

<style>
  li {
    border: 1px solid hotpink;
  }
  a {
    border: 1px solid cyan;
  }

  /*  */

  li {
    font-family: var(--martian-mono);
    margin: 0 0.5rem;
  }

  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    color: var(--black);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    color: var(--white);
    background-color: var(--blue);
    padding: 0.15rem;
    transition: all 0.3s ease-in-out;
  }
</style>

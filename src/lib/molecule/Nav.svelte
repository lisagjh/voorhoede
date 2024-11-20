<script>
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

  let openVacancies = $state(0);
  const delay = 750; // Delay on the animation

  onMount(async () => {
    try {
      const response = await fetch(
        "https://fdnd-agency.directus.app/items/dda_agencies_vacancies/"
      );
      const vacatures = await response.json();
      console.log("Vacatures response:", vacatures);
      openVacancies = vacatures.data ? vacatures.data.length : 0;
      console.log("found vacancies:", openVacancies);
    } catch (error) {
      console.error("Error fetching vacancies:", error);
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
      openVacancies = Math.floor(start + range * progress);
      if (progress < 1) {
        requestAnimationFrame(update); // Continue the animation
      }
    }
    requestAnimationFrame(update);
  }
</script>

<nav>
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

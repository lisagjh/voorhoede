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

  let openVacancies = 0; // Starting count for vacancies
  const delay = 750; // Delay on the animation

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

  function animateCounter(start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function easeOut(t) {
      return t * (2 - t);
    }

    function update(currentTime) {
      const elapsedTime = currentTime - startTime;
      const normalizedTime = Math.min(elapsedTime / duration, 1); // Clamp time to [0, 1]
      const easedProgress = easeOut(normalizedTime); // Apply easing function
      openVacancies = Math.floor(start + range * easedProgress);

      if (normalizedTime < 1) {
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

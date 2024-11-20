<!-- svelte-ignore missing-declaration -->
<!-- Nav.svelte -->
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

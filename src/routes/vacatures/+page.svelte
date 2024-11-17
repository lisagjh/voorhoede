<script>
  import IntroSection from "$lib/IntroSection.svelte";
  import Vacancy from "$lib/Vacancy.svelte";
  let vacancies = [
    {
      title: "Design Lead",
      language: "Dutch",
      company: "Company",
      hours: "hours",
      city: "city",
      href: "href",
    },
    {
      title: "Design Lead",
      language: "Dutch",
      company: "Company",
      hours: "hours",
      city: "city",
      href: "href",
    },
    {
      title: "Design Lead",
      language: "Dutch",
      company: "Company",
      hours: "hours",
      city: "city",
      href: "href",
    },
    {
      title: "Design Lead",
      language: "Dutch",
      company: "Company",
      hours: "hours",
      city: "city",
      href: "href",
    },
  ];
</script>

<IntroSection
title="Vacatures"
subtitle="subtitle"
/>

<section class="vacancies-section">
  {#each vacancies as vacancy}
    <Vacancy
      title={vacancy.title}
      language={vacancy.language}
      company={vacancy.company}
      hours={vacancy.hours}
      city={vacancy.city}
      href={vacancy.href}
    />
  {/each}
</section>

<style>
  /* #region Vacatures */
  .vacancies-section {
    display: flex;
    flex-direction: column;
    margin: 0 7.5% 0 7.5%;
  }
</style>

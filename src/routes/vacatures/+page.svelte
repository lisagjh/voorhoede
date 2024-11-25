<script>

  export let data;

  import IntroSection from "$lib/IntroSection.svelte";
  import Vacancy from "$lib/Vacancy.svelte";

</script>

<IntroSection
title="Vacatures"
subtitle="Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan."
/>

<section class="vacancies-section">
  {#each data.vacatures as vacature}
  <Vacancy
    title={vacature.title}
    language="/"
    company="/"
    hours={vacature.hours}
    city={vacature.locatie}
    href={vacature.href}
  />
{/each}
</section>

<style>
  .vacancies-section {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 686px){
    .vacancies-section {
      margin: 0 2.5% 0% 2.5%;
    }
  }
</style>

<script>

  export let data;

  import IntroSection from "$lib/IntroSection.svelte";
  import Vacancy from "$lib/VacancyCard.svelte";
  import Searchbar from "$lib/Searchbar.svelte"

</script>

<IntroSection
  title="Vacatures"
  subtitle="Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan."
/>

<section class="filter-section">
  <Searchbar placeholderText="Zoek een vacture... " />
</section>

<section class="vacancies-section">
  {#each data.vacancies as vacancy}
  <Vacancy
    title={vacancy.title}
    company="UNKNOWN"
    language="ENGELS & NEDERLANDS"
    hours={vacancy.hours}
    city={vacancy.locatie}
    href={vacancy.href}
  />
{/each}
</section>

<style>
  .vacancies-section {
    display: flex;
    flex-direction: column;
  }

  .filter-section {
    padding: 2em 0em;
    margin-bottom: 3em;
    border: 1px solid var(--black);
    border-right: none;
    border-left: none ;
  }

  @media (min-width: 686px){
    .vacancies-section {
      margin: 0 2.5% 0% 2.5%;
    }
  }
</style>
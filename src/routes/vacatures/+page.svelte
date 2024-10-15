<script>
  import IntroSection from "$lib/IntroSection.svelte";
  import Vacancy from "$lib/Vacancy.svelte";
  let vacancies = [
    {
      title: "Digital Product Designer",
      company: "Valsplat",
      language: "ENG & NL",
      hours: "32-40",
      city: "NIEWUWERSLUIS",
      href: "href",
    },
    {
      title: "Traffic Manager",
      company: "Triple",
      language: "ENG & NL",
      hours: "32-40",
      city: "ALKMAAR",
      href: "href",
    },
    {
      title: "Astro Frontend Specialist",
      company: "Valsplat",
      language: "NL",
      hours: "32-40",
      city: "NIEUWERSLUIS",
      href: "href",
    },
    {
      title: "Design Lead",
      company: "Fabrique",
      language: "ENG & NL",
      hours: "32-40",
      city: "AMSTERDAM",
      href: "href",
    },
  ];
  // fetch data for vacancies
</script>

<IntroSection
title="Vacatures"
subtitle="Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan."
/>

<section class="vacancies-section">
  {#each vacancies as vacancy}
    <Vacancy
      title={vacancy.title}
      company={vacancy.company}
      language={vacancy.language}
      hours={vacancy.hours}
      city={vacancy.city}
      href={vacancy.href}
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

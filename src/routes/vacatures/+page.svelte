<script>
  import IntroSection from "$lib/IntroSection.svelte";
  import Vacancy from "$lib/Vacancy.svelte";
  let vacancies = [
    {
      title: "Digital Product Designer",
      language: "ENG & NL",
      company: "Valsplat",
      hours: "32-40",
      city: "NIEWUWERSLUIS",
      href: "href",
    },
    {
      title: "Traffic Manager",
      language: "ENG & NL",
      company: "Triple",
      hours: "32-40",
      city: "ALKMAAR",
      href: "href",
    },
    {
      title: "Astro Frontend Specialist",
      language: "NL",
      company: "Valsplat",
      hours: "32-40",
      city: "NIEUWERSLUIS",
      href: "href",
    },
    {
      title: "Design Lead",
      language: "ENG & NL",
      company: "Fabrique",
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
      language={vacancy.language}
      company={vacancy.company}
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

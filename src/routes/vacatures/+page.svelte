<script>

  export let data;

  import IntroSection from "$lib/IntroSection.svelte";
  import Vacancy from "$lib/Vacancy.svelte";
  import Searchbar from "$lib/Searchbar.svelte"

</script>

<div class="bubblegum">
  <svg width="100" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="48.5" fill="#F194C0" stroke="#B54D7E" stroke-width="3"/>
    <circle cx="18" cy="39" r="5" fill="white"/>
    <ellipse cx="31.7925" cy="22.5113" rx="5" ry="10.8314" transform="rotate(40 31.7925 22.5113)" fill="white"/>
    </svg>
</div>

<IntroSection
  title="Vacatures"
  subtitle="Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan."
/>

<section class="filter-section">
  <Searchbar placeholderText="Zoek een vacture... " />
</section>

<section class="vacancies-section">
  {#each data.vacatures as vacature}
  <Vacancy
    title={vacature.title}
    language="Unknown"
    company="Unknown"
    hours={vacature.hours}
    city={vacature.locatie}
    href={vacature.href}
  />
{/each}
</section>

<style>

.bubblegum {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  opacity: 90%;
}

.bubblegum-after {
  display: none;
}

svg {
  animation: bubble-increase ease-out;
	animation-timeline: scroll(root);
  animation-range: 0 75%; 
}
@keyframes bubble-increase {
  50%{
    width: 2500px;
  }
  100% {
    width: 8000px;
  }
}

  .vacancies-section {
    display: flex;
    flex-direction: column;
  }

  .filter-section {
    padding: 2em 0em;
    margin-bottom: 3em;
    border: 1px solid black;
    border-right: none;
    border-left: none ;
  }

  @media (min-width: 686px){
    .vacancies-section {
      margin: 0 2.5% 0% 2.5%;
    }
  }
</style>

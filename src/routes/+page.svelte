<script>
  import Card from "../lib/display/Card.svelte";
  import IntroSection from "./../lib/IntroSection.svelte";
  import { onMount } from "svelte";

  export let data;

  const extraFields = [
    { key: "agencyName" },
    { key: "hours" },
    { key: "location" },
    { key: "expertise" },
  ];
</script>

<IntroSection title="De Beste Bureau's van Nederland">
  <svelte:fragment slot="subtitle">
    Dutch Digital Agencies (DDA) verenigt en verbindt toonaangevende digitale
    bureaus. Samen maken we de wereld elke dag een beetje slimmer.
  </svelte:fragment>
</IntroSection>

<section class="vacancy-section">
  <div class="top">
    <span class="tag">Vacatures</span>
    <h2>De beste agencies zoeken de beste mensen</h2>
    <a href="/vacatures">Bekijk alle vacatures</a>
  </div>

  <Card data={data.latestVacancies} className="vacancies" {extraFields} />
</section>

<style>
  .vacancy-section {
    border-top: 1px solid var(--black);
  }

  .vacancy-section .top {
    display: grid;
    padding-top: 1rem;
    min-height: 250px;
    height: 100%;
    max-height: 400px;
  }

  .tag {
    display: inline-block;
    justify-self: center;
    font-family: var(--martian-mono);
    border: 1px solid var(--black);
    height: fit-content;
    margin: 0.5rem;
  }

  h2 {
    align-self: center;
    text-align: center;
    text-transform: uppercase;
    text-wrap: balance;
    margin: 1rem;
  }

  a {
    justify-self: center;
  }
</style>

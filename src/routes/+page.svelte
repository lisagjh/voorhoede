<script>
  import Card from "../lib/display/Card.svelte";
  import IntroSection from "./../lib/IntroSection.svelte";
  import Graphic from "../lib/threejs/Graphic.svelte";

  export let data;

  const extraFields = [
    { key: "agencyName" },
    { key: "locatie" },
    { key: "hours" },
    { key: "expertise" },
  ];
</script>

<Graphic />


<IntroSection title="De Beste Bureau's van Nederland">
  <svelte:fragment slot="subtitle">
    Dutch Digital Agencies (DDA) verenigt en verbindt toonaangevende digitale
    bureaus. Samen maken we de wereld elke dag een beetje slimmer.
  </svelte:fragment>
</IntroSection>


<section class="vacancy-section">
  <div class="top">
    <h2 class="tag">Vacatures</h2>
    <p>De beste agencies zoeken de beste mensen</p>
    <a href="/vacatures">Bekijk alle vacatures</a>
  </div>

  <Card
    data={data.latestVacancies}
    className="vacancies"
    anchorText="View"
    {extraFields}
  />
</section>

<style>
  .vacancy-section {
    border-top: 1px solid var(--black);
    margin-bottom: 8rem;
  }

  .vacancy-section p {
    font-family: "Flux", sans-serif;
    font-variation-settings: "wdth" 500;

    align-self: center;
    text-align: center;
    text-transform: uppercase;
    text-wrap: balance;
    margin: 1rem;
  }

  .vacancy-section .top {
    display: grid;
    padding: 1.5rem 0;
    min-height: 250px;
    height: 100%;
  }

  h2.tag {
    line-height: 1;
    font-size: 1rem;
    display: inline-block;
    justify-self: center;
    font-family: var(--martian-mono);
    border: 1px solid var(--black);
    height: fit-content;
    padding: 0.25rem;
    margin: 0 0.5rem;
  }

  @media (width > 30em) {
    p {
      font-size: 2.5rem;
    }
  }

  a {
    justify-self: center;
  }

  @media (width > 35em) {
    p {
      justify-self: center;
      letter-spacing: -2px;
      line-height: 1;
      font-size: 3.5rem;
      font-weight: 800;
      max-width: 20ch;
      text-wrap: balance;
    }
  }
</style>

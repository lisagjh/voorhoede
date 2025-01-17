<script>

  import IntroSection from "$lib/IntroSection.svelte";
  import Banner from "$lib/display/Banner.svelte";
  import Button from "$lib/input/Button.svelte"
  import Card from "$lib/display/VacancyCard_home.svelte";


  export let data;

  const extraFields = [
    { key: "agencyName" },
    { key: "locatie" },
    { key: "hours" },
    { key: "expertise" },
  ];
</script>

<IntroSection title="De Beste Bureau's van Nederland">
  <svelte:fragment slot="subtitle">
    Dutch Digital Agencies (DDA) verenigt en verbindt toonaangevende digitale
    bureaus. Samen maken we de wereld elke dag een beetje slimmer.
  </svelte:fragment>
</IntroSection>

<Banner data={data.agencies} clickable={true}/>

<section class="vacancy-section">
  <div class="top">
    <h2 class="tag">Vacatures</h2>
    <p>De beste agencies zoeken de beste mensen</p>
    <Button
      tag="a"
      label="Bekijk alle vacatures"
      href="/vacatures"
      className="index-page-link"
    />
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

  .vacancy-section .top {
    display: grid;
    padding: 1.5rem 0;
    min-height: 15.6rem;
    height: 100%;
    max-height: 25rem;
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

  p {
    letter-spacing: 1px;
    font-size: 2.5rem;
    font-weight: 800;
    align-self: center;
    text-align: center;
    text-transform: uppercase;
    text-wrap: balance;
    margin: 1rem;
  }

  @media (width > 35em) {
    p {
      letter-spacing: -2px;
      line-height: 1;
      font-size: 4rem;
      font-weight: 800;
      text-wrap: balance;
    }
  }
</style>
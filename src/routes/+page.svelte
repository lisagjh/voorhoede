<script>
  import Card from "../lib/display/Card.svelte";
  import IntroSection from "./../lib/IntroSection.svelte";
  import Popup from "../lib/display/Popup.svelte";

  let data = $props();
  let showModal = $state(false);

  const extraFields = [
    { key: "agencyName" },
    { key: "locatie" },
    { key: "hours" },
    { key: "expertise" },
  ];
</script>

<Popup bind:showModal>
  {#snippet content()}
  <iframe
    title=""
    style="border-radius:12px;"
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0Yxoavh5qJV?utm_source=generator"
    width="100%"
    height="352px" 
    frameBorder="0" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
    loading="lazy">
  </iframe>
  {/snippet}
</Popup>

<button onclick={() => (showModal = true)}> show modal </button>

<div class="sneeuwvlokken" aria-hidden="true">
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>

  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
</div>

<div class="progress"></div>
<img class="santa" src="https://assets.codepen.io/85648/santa-03.svg" alt="Santa on a snowmobile" />

<IntroSection title="De Beste Bureau's van Nederland">
  <svelte:fragment slot="subtitle">
    Dutch Digital Agencies (DDA) verenigt en verbindt toonaangevende digitale
    bureaus. Samen maken we de wereld elke dag een beetje slimmer.
  </svelte:fragment>
</IntroSection>

<section class="vacancy-section">
  <div class="top">
    <h3 class="tag">Vacatures</h3>
    <h2>De beste agencies zoeken de beste mensen</h2>
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
    border-top: 1px solid var(--white);
    margin-bottom: 8rem;
  }

  .vacancy-section .top {
    display: grid;
    padding: 1.5rem 0;
    min-height: 250px;
    height: 100%;
    max-height: 400px;
  }

  h3.tag {
    line-height: 1;
    font-size: 1rem;
    display: inline-block;
    justify-self: center;
    font-family: var(--martian-mono);
    border: 1px solid var(--white);
    height: fit-content;
    padding: 0.25rem;
    margin: 0 0.5rem;
  }

  h2 {
    font-family: "xmas-font", sans-serif;
    color: #FF1C3B;
    font-size: 2.5rem;
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

<script>
  import Card from "../lib/display/Card.svelte";
  import IntroSection from "./../lib/IntroSection.svelte";

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

<div class="given-up">
  <p class="piano"><a href="/piano">play a song on my piano.</a></p>
  <p>
    <span>ive given up</span> <span>ive given up</span>
    <span>ive given up</span> <span>ive given up</span>
    <span>ive given up</span> <span>ive given up</span>
    <span>ive given up</span> <span>ive given up</span>
  </p>
</div>

<div class="santa">
  <img src="/santa.png" alt="" width="240" />
</div>

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
  .given-up {
    margin-top: -32rem;
  }

  .given-up p {
    justify-self: center;
    justify-content: center;
    overflow: hidden;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
  }

  .given-up p span {
    margin-right: 3rem;
    text-wrap: nowrap;
    animation: move-text 3s linear infinite;
  }

  @keyframes move-text {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-175%);
    }
  }

  .santa {
    position: absolute;
    top: 35rem;
    min-height: 15rem;
    width: 100vw;
  }
  .santa img {
    width: 25rem;
    offset-path: path("M 0 80 Q 360 0, 800 80");
    animation: move 5s infinite forwards ease-in-out;
  }

  @keyframes move {
    0% {
      transform: translateX(-50%);
      offset-distance: 0%;
    }
    100% {
      transform: translateX(100%);
      offset-distance: 100%;
    }
  }

  .vacancy-section {
    border-top: 1px solid var(--black);
    margin-bottom: 8rem;
  }

  .vacancy-section .top {
    display: grid;
    padding: 1.5rem 0;
    min-height: 250px;
    height: 100%;
    max-height: 400px;
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

  a {
    justify-self: center;
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

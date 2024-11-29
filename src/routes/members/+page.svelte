<script>
  export let data;

  import Link from "$lib/Link.svelte";
  import Member from "$lib/Member.svelte";
  import Searchbar from "$lib/Searchbar.svelte";
  import IntroSection from "$lib/IntroSection.svelte";


  // Input van de gebruiker
  let searchTerm = "";

  // $: Is een dynamisch element wat zich instant aanpast op de data die erin zit.
  // .filter is een built in JS functie die een nieuwe arraay aanmaakt met de juiste items op basis van de requirements die er
  // na volgen onder andere .ToLowerCase en .Includes met de member array waar op dit moment alle agencies in staan.
  $: filteredMembers = data.members.filter((member) =>
    member.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
</script>


<IntroSection
        title="Leden"
        subtitle="De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch Digital Agencies. Zet de juiste filters aan en zoek contact met het bureau dat het beste bij past bij jouw vraagstuk en uitdaging.

Ook DDA lid worden? Ga dan naar deze pagina voor meer informatie"
/>

<section class="filter-section">
  <!--To build : een delay functie, instant feedback is misschien niet user friendlyg-->
  <Searchbar placeholderText="Zoek een bureau" bind:searchTerm />
</section>

<!--Het door pasen van de filteredMembers array naar members zodat die alleen de gefilterde items laat zien-->
<Member data={{ members: filteredMembers }} />

<div class="working-vacatures">
  <p class="textvacature">
    Kom werken bij de beste digitale bureaus van Nederland
  </p>
  <Link href="/" clazz="detail-link" class="more-events"
    ><span slot="link-text" class="number-vacatures">bekijk vacatures (54)</span
    >
    <svg
      width="16"
      height="16"
      slot="svg-icon-right"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 12H18M18 12L13 7M18 12L13 17"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </Link>
</div>

<div class="link-more-events">
  <Link href="/" clazz="detail-link" class=""
    ><span slot="link-text">Meer events laden</span>
    <svg
      width="16"
      height="16"
      slot="svg-icon-right"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 12H18M18 12L13 7M18 12L13 17"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </Link>
</div>



<style>
  .filter-section {
    padding: 1em;
    /*border: 1px solid black;*/
    border-bottom: 1px solid var(--grey);
    border-top: 1px solid var(--grey);
    margin:0px -31px 0px -30px;
  }

  @media (max-width: 690px) {
    .filter-section {
      border-left:  1px solid var(--grey);
      border-right:  1px solid var(--grey);
    }
  }

  .textvacature {
    font-size: 1.2rem;
  }

  .number-vacatures {
    font-size: 0.8rem;
  }

  .link-more-events {
    display: flex;
    justify-content: center;
    align-items: center;
    place-content: center;
    margin: -1rem;
    padding: 2rem;
    text-decoration: none;
  }

  @media (max-width: 725px) {
    .working-vacatures {
      display: grid;
      grid-template-rows: 5rem auto;
      row-gap: 2rem;

      border-bottom: 1px solid;
      border-left: 1px solid;
      border-right: 1px solid;
      margin: -1rem;
      padding: 2rem;
    }

    .link-more-events{
      border-bottom: 1px solid;
      border-left: 1px solid;
      border-right: 1px solid;
    }
  }

  @media (min-width: 725px) {
    .working-vacatures {
      display: flex;
      flex-direction: row;
      padding: 2rem;
      border-bottom: 1px solid;
      border-top: 1px solid;

      justify-content: space-between;
      margin-top: 2rem;
      margin-left: -1rem;
      margin-right: -1rem;
    }
  }

</style>

<script>
  import Card from "../lib/display/Card.svelte";
  import IntroSection from "./../lib/IntroSection.svelte";
  import { onMount } from "svelte";

  export let data;

  console.log("Page received data:", data.vacatures.length);

  // onMount(() => {
  //   console.log("Vacatures data in +page.svelte:", data.vacatures);
  // });

  let testData = [ 
    {
      id: "1",
      title: "vacature 1",
    },
    {
      id: "2",
      title: "vacature 2",
    },
    {
      id: "3",
      title: "vacature 3",
    },
  ]
</script>

<IntroSection title="De Beste Bureau's van Nederland">
  <svelte:fragment slot="subtitle">
    Dutch Digital Agencies (DDA) verenigt en verbindt toonaangevende digitale
    bureaus. Samen maken we de wereld elke dag een beetje slimmer.
  </svelte:fragment>
</IntroSection>

<Card data={data.vacatures} className="vacancies" />

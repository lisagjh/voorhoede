<script>
  import Card from "../lib/display/Card.svelte";
  import IntroSection from "./../lib/IntroSection.svelte";
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    console.log("Vacatures data in +page.svelte:", data.vacatures);
  });
</script>

<IntroSection title="De Beste Bureau's van Nederland">
  <svelte:fragment slot="subtitle">
    Dutch Digital Agencies (DDA) verenigt en verbindt toonaangevende digitale
    bureaus. Samen maken we de wereld elke dag een beetje slimmer.
  </svelte:fragment>
</IntroSection>

<Card 
  data={data.vacatures} 
  className="vacancies" 
  />

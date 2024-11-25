<script>
  import Card from "../lib/display/Card.svelte";
  import IntroSection from "./../lib/IntroSection.svelte";
  import { onMount } from "svelte";

  export let vacatures = []; // Ensure 'vacatures' is an export to receive data

// Log the vacatures data to verify it's correctly passed from the server
onMount(() => {
  console.log('Vacatures data in +page.svelte:', vacatures); // Check if it's populated
});
</script>

<<<<<<< Updated upstream
<IntroSection title="Home" displayHomeLink=false>
  <!-- svelte:fragment ipv p -->
  <svelte:fragment slot="subtitle">subtitle</svelte:fragment>
=======
<IntroSection title="De Beste Bureau's van Nederland">
  <svelte:fragment slot="subtitle"
    >Dutch Digital Agencies (DDA) verenigt en verbindt toonaangevende digitale
    bureaus. Samen maken we de wereld elke dag een beetje slimmer.</svelte:fragment
  >
>>>>>>> Stashed changes
</IntroSection>

{#if vacatures.length > 0}
  <Card data={vacatures} className="vacancies" />
{:else}
  <p>Loading vacatures...</p> <!-- Loading state while the data is empty -->
{/if}
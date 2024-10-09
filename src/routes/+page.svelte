<script>
  import Text from "./../lib/Text.svelte";
</script>

<section class="intro-section">
  <Text>
    <h1 slot="page-title" tabindex="0">
      De beste digitale bureaus van nederland
    </h1>
    <p slot="page-description" tabindex="0">
      Dutch Digital Agencies (DDA) verenigt en verbindt toonaangevende digitale
      bureaus. Samen maken we de wereld elke dag een beetje slimmer.
    </p>
  </Text>
</section>

<style>
  .intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5em;
    margin: 25% 15% 10% 15%;
  }

  @media (min-width: 820px) {
    .intro-section {
      margin-top: 12.5%;
    }
  }

  @media (min-width: 1024px) {
    .intro-section {
      margin: 12.5% 25% 10% 25%;
    }
  }

  @media (min-width: 1524px) {
    .intro-section {
      margin: 12.5% 32% 10% 32%;
    }
  }
</style>

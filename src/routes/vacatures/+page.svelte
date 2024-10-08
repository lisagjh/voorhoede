<script>
  import BackToBtn from "$lib/BackToBtn.svelte";
  import Text from "$lib/Text.svelte";
</script>

<main>
  <section class="intro-section">
    <BackToBtn href="/">
      <span slot="link-text">TERUG NAAR HOME</span>
    </BackToBtn>

    <Text>
      <h1 slot="page-title">Vacatures</h1>
      <p slot="page-description">
        Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je
        rol als developer of designer, researcher, als scrum master of
        marketeer, als strateeg. Start of groei door – en laat zien wat je kan.
      </p>
    </Text>
  </section>
</main>

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

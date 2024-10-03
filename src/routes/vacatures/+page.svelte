<script>
  import MainTitle from "$lib/MainTitle.svelte";
  import DescriptionText from "$lib/descriptionText.svelte";
  import BackHomeBtn from "$lib/BackHomeBtn.svelte";
  import Header from "../../lib/Header.svelte";
</script>

<Header />

<main>
  <section class="landing-section">
    <BackHomeBtn />

    <MainTitle label="VACATURES" />

    <DescriptionText
      label="Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan."
    />
  </section>
</main>

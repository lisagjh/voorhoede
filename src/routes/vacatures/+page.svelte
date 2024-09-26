<script>
    import MainTitle from "$lib/MainTitle.svelte";
    import DescriptionText from "$lib/descriptionText.svelte";
    import BackHomeBtn from "$lib/BackHomeBtn.svelte";
</script>

<main>
    <header>
        <nav>

        </nav>
    </header>

    <section class="landing-section">
        <BackHomeBtn/>
        <MainTitle
        label="VACATURES"
        />
        <DescriptionText
        label="Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan."
        />
    </section>

</main>


<style>
    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .landing-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 80%;
        text-align: center;
        gap: 1.25em;
        margin-top: 7.5em;
    }

    @media (min-width: 820px){
        .landing-section {
            margin-top: 12.5%;
            max-width: 50%;
        }
    }


</style>
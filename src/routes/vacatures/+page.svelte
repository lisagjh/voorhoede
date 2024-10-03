<script>
  import Header from "../../lib/Header.svelte";
    import Text from "$lib/Text.svelte";
    import Link from "$lib/Link.svelte";
    import Vacancy from "$lib/Vacancy.svelte";
</script>

  <Header />

<main>
    <section class="intro-section">
    
        <Link href="/" clazz="back-to-home">
            <svg slot="svg-icon-left"
                 width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span slot="link-text">TERUG NAAR HOME</span>
        </Link>

        <Text>
            <h1 slot="page-title">Vacatures</h1>
            <p slot="page-description">
                Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan.
            </p>
        </Text>
    
    </section>

    <section class="vacancies-section">
        <Vacancy>
            <h4 slot="job-title">Design Lead</h4>
            <span slot="language">ENG & NL</span>
            <span slot="company">TRIPLE</span>
            <span slot="city">AMSTERDAM</span>

            <Link 
                slot="link" 
                href="/"
                clazz="detail-link"
            >
                <span slot="link-text">BEKIJKEN</span>
                <svg slot="svg-icon-right"
                width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Link>
        </Vacancy>
    </section>
</main>


<style>

    .intro-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: .5em;
        margin: 25% 15% 10% 15%;
    }

    @media (min-width: 820px){
        .intro-section {
            margin-top: 12.5%;
        }
    }

    @media (min-width: 1024px){
        .intro-section {
            margin: 12.5% 25% 10% 25%;
        }
    }

    @media (min-width: 1524px){
        .intro-section {
            margin: 12.5% 32% 10% 32%;
        }
    }

</style>
<script>
    import Text from "$lib/Text.svelte";
    import BackToBtn from "$lib/BackToBtn.svelte";
    import Link from "$lib/Link.svelte";
</script>

<main>
    <header>
        <nav>

        </nav>
    </header>

    <section class="intro-section">
        
        <Link href="/" clazz="back-to-home">

            <svg fill="#000000" slot="svg-icon-left"
            width="14px" height="14px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
            <path d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
            L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
            h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"/>
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
<script>
    import {page} from '$app/stores'
    import Link from "$lib/Link.svelte";
    import Text from "$lib/Text.svelte";
    import Header from "$lib/Header.svelte";
    console.log($page.status)
</script>

<Header/>
<main>
    <section class="intro-section">
        <Link href="/" clazz="back-to-home">
            <svg slot="svg-icon-left"
                 width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
            <span slot="link-text">TERUG NAAR HOME</span>
        </Link>

        <Text>
            <h1 slot="page-title">Er gaat iets mis zie onderstaande error?</h1>
            <p slot="page-description">
                {$page.status} - {$page.error.message}
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
        margin: 15% 15% 10% 15%;
    }


    h1{
        letter-spacing: 2px; /* de tekst staat te dicht tegen elkaar aan*/
    }

    p {
        /*margin zodat de 404 error niet te dicht tegen de terug naar home tekst staat*/
        margin-bottom: 2rem;
    }

    /*svg {*/
    /*    vertical-align: middle; !*dit zorgt ervoor dat de pijl en de tekst op dezelfde hoogte staan *!*/
    /*    margin-bottom: 0.2rem;*/
    /*    color: var(--black);*/
    /*}*/



    @media (max-width: 35em) {
        h1 {
            font-size: 1.5rem; /*letters worden anders te groot*/



        }

    }

    @media (min-width: 35em) {
        h1 {
            font-size: 2rem; /*letters worden anders te groot*/
            line-height: 1.5;
        }
    }
    @media (min-width: 820px) {
        .intro-section {
            margin-top: 10%;
        }
    }

    @media (min-width: 1024px) {
        .intro-section {
            margin: 7.5% 25% 10% 25%;
        }


    }


    @media (min-width: 1524px) {
        .intro-section {
            margin: 12.5% 32% 10% 32%;
        }
    }

</style>
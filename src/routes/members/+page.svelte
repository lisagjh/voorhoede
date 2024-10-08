<script>
    import Link from "$lib/Link.svelte";

    export let data;

    import Member from "$lib/Member.svelte";
    import Header from "$lib/Header.svelte";
    import Text from "$lib/Text.svelte";
</script>

<Header/>

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
            <h1 slot="page-title">Leden</h1>
            <p slot="page-description">
                De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch Digital Agencies. Zet de juiste filters aan en zoek contact met het bureau dat het beste bij past bij jouw vraagstuk en uitdaging.
                'Ook DDA lid worden? Ga dan naar deze pagina voor meer informatie  </p>
        </Text>

    </section>

    <Member data={data}/>

</main>

<style>

    main {
        line-height: 1.5;
        padding: 2rem;
    }
    .intro-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: .5em;
        margin: 15% 15% 10% 15%;
    }


    @media (min-width: 820px){
        .intro-section {
            margin-top: 10%;
        }
    }

    @media (min-width: 1024px){
        .intro-section {
            margin: 7.5% 25% 10% 25%;
        }


    }


    @media (min-width: 1524px){
        .intro-section {
            margin: 12.5% 32% 10% 32%;
        }
    }

    h1{
        display: flex;
        justify-content: center;

    }



</style>
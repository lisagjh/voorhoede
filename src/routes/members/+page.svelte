<script>

    export let data;

    import Link from "$lib/Link.svelte";
    import Member from "$lib/Member.svelte";
    import Text from "$lib/Text.svelte";
    import Searchbar from "$lib/Searchbar.svelte";

    // Input van de gebruiker
    let searchTerm = "";

    // $: Is een dynamisch element wat zich instant aanpast op de data die erin zit.
    // .filter is een built in JS functie die een nieuwe arraay aanmaakt met de juiste items op basis van de requirements die er
    // na volgen onder andere .ToLowerCase en .Includes met de member array waar op dit moment alle agencies in staan.
    $: filteredMembers = data.members.filter(member =>
        member.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

</script>

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
            <h1 slot="page-title">Leden</h1>
            <p slot="page-description">
                De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch Digital Agencies. Zet de juiste
                filters aan en zoek contact met het bureau dat het beste bij past bij jouw vraagstuk en uitdaging.
            </p>
        </Text>
        <p>
            Ook DDA lid worden? Ga dan naar <span class="specific-text-decoration">deze pagina</span> voor meer
            informatie
        </p>

    </section>

    <section class="filter-section">
        <!--To build : een delay functie, instant feedback is misschien niet user friendlyg-->
        <Searchbar
                placeholderText="Zoek een bureau"
                bind:searchTerm={searchTerm}
        />

    </section>

    <!--Het door pasen van de filteredMembers array naar members zodat die alleen de gefilterde items laat zien-->
    <Member data={{ members: filteredMembers }}/>

    <div class="working-vacatures">
        <p class="textvacature">Kom werken bij de beste digitale bureaus van Nederland</p>
        <Link href="/" clazz="detail-link" class="more-events"><span slot="link-text" class="number-vacatures">bekijk vacatures (54)</span>
            <svg width="16" height="16" slot="svg-icon-right" viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        </Link>

    </div>

    <div class="link-more-events">
        <Link href="/" clazz="detail-link" class=""><span slot="link-text">Meer events laden</span>
            <svg width="16" height="16" slot="svg-icon-right" viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        </Link>
    </div>



<style>



    .specific-text-decoration {
        text-decoration: underline;
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


    .filter-section {
        padding: 1em;
        border: 1px solid black;
        border-bottom: none;
    }

    h1 {
        display: flex;
        justify-content: center;

    }

    .textvacature {
        font-size: 1.2rem;
    }

    .number-vacatures {
        font-size: 0.8rem;
    }

    .link-more-events {
        display: flex;
        justify-content: center;
        align-items: center;
        place-content: center;
        border: 1px solid;
        padding: 2rem;
        text-decoration: none;
    }


    @media (max-width: 725px) {
        .working-vacatures {
            display: grid;
            grid-template-rows: 5rem auto;
            row-gap: 2rem;

            border: 1px solid;
            padding: 2rem;

        }
    }

    @media (min-width: 725px) {
        .working-vacatures {
            display: flex;
            flex-direction: row;
            padding: 2rem;
            border: 1px solid;
            justify-content: space-between;

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
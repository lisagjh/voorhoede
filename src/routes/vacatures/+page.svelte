<script>
    import Text from "$lib/Text.svelte";
    import Link from "$lib/Link.svelte";
    import Vacancy from "$lib/Vacancy.svelte";
</script>

    <section class="intro-section">
    
        <Link href="/" clazz="back-to-home">
            <svg slot="svg-icon-left"
                 width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span slot="link-text">TERUG NAAR HOME</span>
        </Link>

        <Text>
            <h1 slot="page-title" tabindex="0">Vacatures</h1>
            <p slot="page-description" tabindex="0">
                Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan.
            </p>
        </Text>
    
    </section>

    <section class="vacancies-section">
        <Vacancy>
            <h4 slot="job-title" class="job-title">Design Lead</h4>
            <span slot="language" class="language">LANUAGE</span>
            <span slot="company" class="company">COMPANY</span>
            <span slot="workweek-indication" class="workweek">32-40</span>
            <span slot="city" class="city">AMSTERDAM</span>

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
        <Vacancy>
            <h4 slot="job-title" class="job-title">React Front-End Developer</h4>
            <span slot="language" class="language">LANUAGE</span>
            <span slot="company" class="company">COMPANY</span>
            <span slot="workweek-indication" class="workweek">32-40</span>
            <span slot="city" class="city" >AMSTERDAM</span>

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
        <Vacancy>
            <h4 slot="job-title" class="job-title">Design Lead maar ook dit en dat en nog wat meer</h4>
            <span slot="language" class="language">LANUAGE</span>
            <span slot="company" class="company">COMPANY</span>
            <span slot="workweek-indication" class="workweek">32-40</span>
            <span slot="city" class="city" >AMSTERDAM</span>

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
        <Vacancy>
            <h4 slot="job-title" class="job-title">Traffic Manager</h4>
            <span slot="language" class="language">LANUAGE</span>
            <span slot="company" class="company">COMPANY</span>
            <span slot="workweek-indication" class="workweek">32-40</span>
            <span slot="city" class="city" >AMSTERDAM</span>

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

<style>

    .intro-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: .75em;
        margin: 15% 15% 10% 15%;
    }

    /* #region Vacatures */
    .vacancies-section {
        display: flex;
        flex-direction: column;
        margin: 0 7.5% 0 7.5%;
    }

    .language, .company, .workweek, .city {
        font-family: var(--martian-mono);
    }

    .job-title {
        font-family: "Archivo", sans-serif;
        grid-column: 1 / span 2; 
        grid-row: 1;
    }

    .language {
        grid-column: 1;
        grid-row: 2; 
    }

    .company {
        grid-column: 2;
        grid-row: 2;
    }

    .workweek {
        grid-column: 1;
        grid-row: 3; 
    }

    .city {
        grid-column: 2;
        grid-row: 3;
    }

    /* #endregion */

    @media (min-width: 620px){
        .job-title {
            grid-column: 1 / span 3; 
            grid-row: 1;
        }

        .language {
            grid-column: 1;
            grid-row: 2; 
        }

        .company {
            grid-column: 2;
            grid-row: 2;
        }

        .workweek {
            grid-column: 3;
            grid-row: 2; 
        }

        .city {
            grid-column: 1;
            grid-row: 3;
        }
    }


    @media (min-width: 820px){
        .intro-section {
            margin-top: 10%;
        }

        .job-title {
            width: 20%; /* Zorgt ervoor dat dit vakje niet breder word en de rest beinvloed */ 
        }
    }

    @media (min-width: 1024px){
        .intro-section {
            margin: 7.5% 25% 10% 25%;
        }

        .vacancies-section {
        margin: 0 5% 0 5%;
    }
    }

    @media (min-width: 1524px){
        .intro-section {
            margin: 6.5% 35% 10% 35%;
        }
    }

</style>
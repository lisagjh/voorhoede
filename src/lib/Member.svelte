<script>
    import Link from "$lib/Link.svelte";
    export let data;
</script>


<section class="grid-container">
    <h2 class="hide">leden</h2>
    {#each data.members as member}
        <article class="card">
            <picture>
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=avif" type="image/avif">
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=webp" type="image/webp">
                <img src="https://fdnd-agency.directus.app/assets/{member.photo}" loading="lazy" alt="foto {member.title}">
            </picture>

            <ul class="card-label-filters">
                <li class="label-filters">
                    service design
                </li>
                <li class="label-filters">label</li>
            </ul>

            <h3 aria-label="{member.title}">{member.title } </h3>
            <p>{member.address}</p>

            <ul class="card-label">
                <li>{parseInt(member.colleagues)}  werknemers</li>
                <li class="card-hiring">hiring</li>

            </ul>

            <Link href="/" clazz="detail-link"><span slot="link-text">Details</span>
                <svg width="16" height="16" slot="svg-icon-right" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
            </Link>

        </article>
    {/each}


</section>

<style>
    .grid-container {
        display: grid;
        text-transform: uppercase;
    }
    .hide{
        position: absolute;
        left: 999px;
        top: -9999px;
    }


    .card {
        width: 100%;
        overflow: hidden;
        border-right: var(--grey) 1px solid;
        border-bottom: 1px solid var(--grey);
        padding: 2rem;
        display: grid;
        grid-template-rows: 16rem auto auto 4rem auto;
        gap: 16px;
    }

    .card:nth-last-child(1),
    .card:nth-last-child(2) {
        border-bottom: none;
    }



    .card-label-filters {
        display: flex;
        flex-direction: row;
        text-overflow: ellipsis;
        gap: 0.8rem;

    }

    .card-label {
        display: flex;
        flex-direction: row;
        text-overflow: ellipsis;
        gap: 0.5rem;
        height: 2rem;
    }

    .label-filters {
        border: 2px solid var(--black);
        width: max-content;
        padding: 3px;
    }

    h2 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 38px;
    }

    ul {
        list-style: none;
        margin: 0;
    }


    .card-hiring {
        background-color: var(--blue);
        color: var(--white);
        padding: 2px;
        height: 1.6rem;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    /*mobile screen*/
    @media (max-width: 350px) {

        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
            text-transform: uppercase;
        }

        img {
            width: 92%;
        }

        .card {
            padding: 1rem;
        }

        .card {
            grid-template-rows: 16rem auto auto auto auto;
            grid-template-columns: 14em;
            row-gap: 2em;

        }


    }

    /*tablet screen */
    @media (min-width: 800px) {
        .grid-container {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }

    }


    @media (max-width: 680px) {
        .card {
            border-right: 1px var(--grey) solid;
            border-left: 1px var(--grey) solid;

        }
    }

    @media (min-width: 825px) and (max-width: 900px){
        .card {
            grid-template-rows: 16rem auto auto 4rem auto;
        }

    }


    @media (max-width: 825px) {
        .card {
            border-left: 1px var(--grey) solid;
        }


    }

    /*2 colums*/
    @media (min-width: 900px) and (max-width: 1338px) {

        .card:nth-child(odd) {
            border-right: 1px var(--grey) solid;

        }



    }

    /*3colums*/
    @media (min-width: 1339px) and (max-width: 1768px) {
        .card:nth-child(n+1):nth-child(-n+2),    /*         cards 1 to 2.*/
        .card:nth-child(n+4):nth-child(-n+5),/*         cards 4 to 5.*/
        .card:nth-child(n+7):nth-child(-n+8),/*         cards 7 to 8.*/
        .card:nth-child(n+10):nth-child(-n+11),/*         cards 10 to 11.*/
        .card:nth-child(n+13):nth-child(-n+14), /*         cards 13 to 14.*/
        .card:nth-child(n+16):nth-child(-n+17),/*         cards 16 to 17.*/
        .card:nth-child(n+19):nth-child(-n+20),/*         cards 19 to 20.*/
        .card:nth-child(n+22):nth-child(-n+23),/*         cards 22 to 23.*/
        .card:nth-child(25),
        .card:nth-child(26) {
            border-right: 1px var(--grey) solid;
        }
    }


    /*4colums*/
    @media (min-width: 1768px) and (max-width: 2147px) {
        .card:nth-child(n+1):nth-child(-n+3),/*  card 1 to 3. */
        .card:nth-child(n+5):nth-child(-n+7), /*  cards  5 to 7 */
        .card:nth-child(n+9):nth-child(-n+11),/*  cards  9 to 11 */
        .card:nth-child(n+13):nth-child(-n+15),/*  cards  13 to 15. */
        .card:nth-child(n+17):nth-child(-n+19),  /*  cards  17 to 19. */
        .card:nth-child(n+21):nth-child(-n+23), /*  cards  21 to 23.. */
        .card:nth-child(25),
        .card:nth-child(26) {
            border-right: 1px var(--grey) solid;
        }
    }



    @media (min-width: 2214px) {
        .card:not(:nth-last-child(1)) {
            border-bottom: 1px solid var(--grey);
        }
    }


    /*5colums*/
    @media (min-width: 2217px) {
        .card:nth-child(n+1):nth-child(-n+4),  /*card 1 to 4  */
        .card:nth-child(n+6):nth-child(-n+9),  /*card 6 to 9  */
        .card:nth-child(n+11):nth-child(-n+14),  /*card 11 to 14  */
        .card:nth-child(n+16):nth-child(-n+24),   /*card 16 to 24 */
        .card:nth-child(26) {
            border-right: 1px var(--grey) solid;
        }
    }

</style>
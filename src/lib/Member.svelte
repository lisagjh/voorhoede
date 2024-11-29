<script>
    import Link from "$lib/Link.svelte";

    export let data;
</script>


<article class="grid-container">
    {#each data.members as member}

        <article class="card">
            <picture>
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=avif" type="image/avif">
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=webp" type="image/webp">
                <img src="https://fdnd-agency.directus.app/assets/{member.photo}" loading="lazy" alt="">
            </picture>

            <ul class="card-label-filters">
                <li class="label-filters">
                    service design
                </li>
                <li class="label-filters">label</li>
            </ul>

            <h2>{member.title}</h2>
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


</article>

<style>
    .grid-container {

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
        text-transform: uppercase;
        margin: 1rem -1rem 0rem;
    }

    .card {
        width: 100%;
        overflow: hidden;
        /*todo this border change to the design*/


        padding: 2rem;
        display: grid;
        grid-template-rows: 16rem auto auto 4rem auto;
        gap: 16px;
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

    @media (min-width: 325px) {
        .grid-container {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }

    }

    .card {
        border-bottom: 1px solid var(--grey);
    }

    /*voor 725px is het opgelost */
    @media (min-width: 765px) and (max-width: 1127px) {
        .card:nth-child(-n+4) {
            border-top: none;

        }

        .card:nth-child(odd) {
            border-right: 1px solid var(--grey);
        }





    }

    /*3koloms*/

    @media (min-width: 1127px) and (max-width: 1466px) {


        .card:nth-child(1),
        .card:nth-child(2),
        .card:nth-child(4),
        .card:nth-child(5),
        .card:nth-child(7),
        .card:nth-child(8),
        .card:nth-child(10),
        .card:nth-child(11),
        .card:nth-child(13),
        .card:nth-child(14),
        .card:nth-child(16),
        .card:nth-child(17),
        .card:nth-child(19),
        .card:nth-child(20),
        .card:nth-child(22),
        .card:nth-child(23),
        .card:nth-child(25),
        .card:nth-child(26)
        {
            border-right: 1px solid var(--grey);
        }

    }

    /*4koloms*/
    @media (min-width: 1466px) and (max-width: 1815px) {

        .card:nth-child(1),
        .card:nth-child(2),
        .card:nth-child(3),


        .card:nth-child(5),
        .card:nth-child(6),
        .card:nth-child(7),

        .card:nth-child(9),
            /*.card:nth-child(10),*/
        .card:nth-child(10),

        .card:nth-child(11),
        .card:nth-child(13),
        .card:nth-child(14),

        .card:nth-child(15),

        .card:nth-child(17),
        .card:nth-child(18),

        .card:nth-child(19),
        .card:nth-child(21),
        .card:nth-child(22),

        .card:nth-child(23),
        .card:nth-child(25),
        .card:nth-child(26)
        {
            border-right: 1px solid var(--grey);
        }



    }


    /*5colums */

    @media (min-width: 1815px) and (max-width: 2165px) {

        .card:nth-child(1),
        .card:nth-child(2),
        .card:nth-child(3),
        .card:nth-child(4),

            /*5 niet*/
        .card:nth-child(6),
        .card:nth-child(7),
        .card:nth-child(8),
        .card:nth-child(9),
        .card:nth-child(11),
        .card:nth-child(12),


        .card:nth-child(13),
        .card:nth-child(14),

        .card:nth-child(16),
        .card:nth-child(17),
        .card:nth-child(18),
        .card:nth-child(19),
            /*.card:nth-child(20),*/

        .card:nth-child(21),
        .card:nth-child(22),
        .card:nth-child(23),
        .card:nth-child(24),
        .card:nth-child(26)

        {
            border-right: 1px solid var(--grey);
        }



    }

    /*6colums */
    @media (min-width: 2165px) and (max-width: 2515px) {
        .card:nth-child(1),
        .card:nth-child(2),
        .card:nth-child(3),
        .card:nth-child(4),
        .card:nth-child(5),

            /*6 niet*/

        .card:nth-child(7),
        .card:nth-child(8),
        .card:nth-child(9),
        .card:nth-child(11),



        .card:nth-child(13),
        .card:nth-child(14),

        .card:nth-child(16),
        .card:nth-child(17),
        .card:nth-child(19),
            /*.card:nth-child(20),*/

        .card:nth-child(21),
        .card:nth-child(22),
        .card:nth-child(23),
        .card:nth-child(25),

        .card:nth-child(26)

        {
            border-right: 1px solid var(--grey);
        }


    }

    /*7 colums*/
    @media (min-width: 2516px) {
        .card:nth-child(1),
        .card:nth-child(2),
        .card:nth-child(3),
        .card:nth-child(4),
        .card:nth-child(5),
        .card:nth-child(6),

            /*7 niet*/



        .card:nth-child(8),
        .card:nth-child(9),
        .card:nth-child(10),
        .card:nth-child(11),
        .card:nth-child(12),



        .card:nth-child(13),


        .card:nth-child(15),
        .card:nth-child(16),
        .card:nth-child(17),
        .card:nth-child(18),
        .card:nth-child(19),
        .card:nth-child(20),
            /*.card:nth-child(20),*/

        .card:nth-child(22),
        .card:nth-child(23),
        .card:nth-child(24),
        .card:nth-child(25),

        .card:nth-child(26)

        {
            border-right: 1px solid var(--grey);
        }


    }


</style>
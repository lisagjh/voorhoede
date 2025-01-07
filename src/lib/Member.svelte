<script>
    import Link from "$lib/Link.svelte";

    export let data;

</script>


<div class="grid-container">
<!--    it is not possible to make this a section because the h2 has influence on the styling of the cards-->
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

            <h2 aria-label="{member.title}">{member.title } </h2>
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
<!--        hr doesnt work for solving the line problem-->
<!--        <hr>-->
    {/each}


</div>

<style>
    .grid-container {
        display: grid;
        /*grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));*/
        text-transform: uppercase;
    }


    .card {
        width: 100%;
        overflow: hidden;
        /*border: var(--grey) 1px solid;*/
        padding: 2rem;
        display: grid;
        grid-template-rows: 16rem auto auto 4rem auto;
        gap: 16px;
        /*margin-left: 1rem;*/

        /*border-bottom: 1px solid var(--grey);*/
    }


    @media (max-width: 2213px) {
        .card {
            border-bottom: 1px solid var(--grey);
        }

        .card:nth-last-child(1),
        .card:nth-last-child(2) {
            border-bottom: none;
        }
    }

    @media (min-width: 2214px) {
        .card:not(:nth-last-child(1)) {
            border-bottom: 1px solid var(--grey);
        }
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
    @media (min-width: 825px) {
        .card {
            grid-template-rows: 16rem auto auto 4rem auto;
        }

    }

    @media (min-width: 900px) and (max-width: 1338px) {

        .card:nth-child(odd) {
            border-right: 1px var(--grey) solid;

        }



    }

    /*3colums*/
    @media (min-width: 1339px) and (max-width: 1768px) {

        .card:nth-child(1) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(2) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(4) {
            border-right: 1px var(--grey) solid;

        }  .card:nth-child(5) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(7) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(8) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(10) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(11) {
            border-right: 1px var(--grey) solid;

        }


        .card:nth-child(13) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(14) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(16) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(17) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(19) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(20) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(22) {
            border-right: 1px var(--grey) solid;

        }


        .card:nth-child(23) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(25) {
            border-right: 1px var(--grey) solid;



        }.card:nth-child(26) {
            border-right: 1px var(--grey) solid;

        }


    }

    @media (min-width: 1768px) and (max-width: 2147px) {
        .card:nth-child(1) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(2) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(3) {
            border-right: 1px var(--grey) solid;

        }


        .card:nth-child(5) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(6) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(7) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(9) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(10) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(11) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(13) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(14) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(15) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(17) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(18) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(19) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(21) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(22) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(23) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(25) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(26) {
            border-right: 1px var(--grey) solid;

        }
    }
    @media (min-width: 2217px) and (max-width: 2600px) {
        .card:nth-child(1) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(2) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(3) {
            border-right: 1px var(--grey) solid;

        }


        .card:nth-child(4) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(6) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(7) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(8) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(9) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(11) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(12) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(13) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(14) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(16) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(17) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(18) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(19) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(20) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(21) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(22) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(23) {
            border-right: 1px var(--grey) solid;

        }

        .card:nth-child(24) {
            border-right: 1px var(--grey) solid;

        }
        .card:nth-child(26) {
            border-right: 1px var(--grey) solid;

        }
    }

</style>
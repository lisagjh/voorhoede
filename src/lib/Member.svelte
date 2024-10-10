<script>
    import Link from "$lib/Link.svelte";

    export let data;

</script>


<article class="grid-container">
    <h2 class="hide-members">Leden</h2>
    {#each data.members as member}

        <article class="card">
            <h2 class="hide-members">cards</h2>
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

            <Link href="/"  clazz="detail-link"><span slot="link-text" class="details-hover" >Details</span>
                <svg class="details-hover" width="16" height="16" slot="svg-icon-right" viewBox="0 0 24 24" fill="none">
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
    }

    .card {
        width: 100%;
        overflow: hidden;
        border: var(--grey) 1px solid;
        padding: 2rem;
        display: grid;
        grid-template-rows: 16rem auto auto 4rem auto;
        gap: 16px;
    }
    .hide-members{
        display: none;
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
    .details-hover:hover{
        color: var(--black);
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

    @media (min-width: 425px) {
        .grid-container {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }

    }


    @media (min-width: 825px) {
        .card {
            grid-template-rows: 16rem auto auto 4rem auto;
        }

    }


</style>
<script>
    import Link from "$lib/Link.svelte";

    export let data;


</script>


<article class="gridcontainer">
    {#each data.members as member}
        <article class="card">
            <picture>
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=avif" type="image/avif">
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=webp" type="image/webp">
                <img src="https://fdnd-agency.directus.app/assets/{member.photo}" loading="lazy" alt="">
            </picture>
            <ul class="cardlabelFilters">
                <li class="labelfilters">
                    service design
                </li>
                <li class="labelfilters">label</li>
            </ul>
                <h2 class="Companyname">{member.title}</h2>
                <p>{member.address}</p>

            <ul class="cardlabel">
                <li>{parseInt(member.colleagues)}  werknemers</li>
                <li class="card__li__hiring">hiring</li>


            </ul>

            <Link href="/" clazz="detail-link"><span slot="link-text">Details</span><svg width="16" height="16" slot="svg-icon-right"viewBox="0 0 24 24" fill="none"><path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></Link>
<!--            <a href="#" class="linkdetails">details</a>-->

        </article>
    {/each}

</article>

<style>
    .gridcontainer {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
        text-transform: uppercase;
    }
    h2{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    ul {
        list-style: none;
        margin: 0;
    }

    .card {

        width: 100%;
        overflow: hidden;
        border: var(--grey) 1px solid;
        padding: 2rem;
        display: grid;
        grid-template-rows: 16rem auto auto 3rem auto;
        gap: 16px;
    }

    .card__li__hiring {
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
    .cardlabelFilters{
        display: flex;
        flex-direction: row;
        text-overflow: ellipsis;
        gap: 0.8rem;

    }

    .cardlabel {
        display: flex;
        flex-direction: row;
        text-overflow: ellipsis;
        gap: 0.5rem;
        height: 2rem;
    }

    .labelfilters {
        border: 2px solid var(--black);
        width: max-content;
        padding: 3px;
    }

    .Companyname {
        font-size: 38px;
    }

    @media (max-width: 350px) {

        .gridcontainer {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
            text-transform: uppercase;
        }
       img{
           width: 92%;
       }
        .card{
            padding: 1rem;
        }
        .card{
            grid-template-rows: 16rem auto auto auto auto;
            grid-template-columns: 14em;
            row-gap: 2em;
        }


    }

    @media (min-width: 425px) {
        .gridcontainer {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }

    }


    @media (min-width: 825px) {
        .card{

            grid-template-rows: 16rem auto auto 5rem auto;
        }

    }


</style>
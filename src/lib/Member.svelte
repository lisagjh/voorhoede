<script>
    import Link from "$lib/Link.svelte";

    export let data;


</script>


<article class="gridcontainer">
    {#each data.members as member}
        <article class="card">
            <picture>
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=webp" type="image/webp">
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=avif" type="image/avif">
                <img src="https://fdnd-agency.directus.app/assets/{member.photo}" loading="lazy" alt="">
            </picture>
            <ul class="cardlabel">
                <li class="labelfilters">
                    service design
                </li>
                <li class="labelfilters">label</li>
            </ul>
                <h2 class="Companyname">{member.title}</h2>
                <p>{member.address}</p>

            <ul class="cardlabel">
                <li>{parseInt(member.colleagues)}</li>
                <li class="card__li__hiring">hiring</li>


            </ul>

            <Link
                    slot="link"
                    href="/"
                    clazz="detail-link"
            >
                <button slot="link-text">Details</button>
            </Link>
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
        grid-template-rows: 16rem auto auto auto auto;
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

    .cardlabel {
        display: flex;
        flex-direction: row;
        text-overflow: ellipsis;
        gap: 1rem;
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

    .linkdetails {
        color: var(--blue);
        font-weight: bold;
        background-color: transparent;
        border: none;
        font-size: var(--font-size-small);

    }

    @media (min-width: 425px) {
        .gridcontainer {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }

    }


</style>
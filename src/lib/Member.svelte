<script>
    export let data;
</script>


<article class="gridcontainer" >
    {#each data.members as member}
        <article class="card">
            <picture>
                <img src="https://fdnd-agency.directus.app/assets/{member.photo}?format=avif"
                     type="image/avif" width="{member.photo}" height="{member.photo}" alt="{member.photo}">
            </picture>
            <ul class="cardlabel">
                <li class="labelfilters">
                    service design
                </li>
                <li class="labelfilters">label</li>
            </ul>
            <ul>
                <li class="Companyname">{member.title}</li>
                <li>{member.address}</li>
            </ul>
            <ul class="cardlabel">
                <li>{parseInt(member.colleagues)}</li>
                <li class="card__li__hiring">hiring</li>
            </ul>
            <ul>
                <li class=""><button class="linkdetails">details</button></li>
            </ul>
        </article>
    {/each}

</article>

<style>
    .gridcontainer {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        /*gap: 2em;*/
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
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
    .card__li__hiring{
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
        font-size: 48px;
    }

    .linkdetails {
        color: var(--blue);
        font-weight: bold;
        background-color: transparent;
        border: none;
        font-size: var(--font-size-small);

    }

</style>
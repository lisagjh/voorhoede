<script>
    export let data;
</script>
<div class="gridcontainer">



    {#each data.members as member}
        <div class="card">

                <!--{#if member.photo && member.photo.id }-->
                <!--                    <picture>-->

                <!--                        <img src="https://fdnd-agency.directus.app/assets/{member.photo.id}" alt="{member.title}"-->
                <!--                             width="{member.photo.width}" height="{member.photo.height}">-->
                <!--                    </picture>-->

                <picture>
                    <img src="https://fdnd-agency.directus.app/assets/687ea821-1626-4d43-bd4a-16d7a7bb1f34?format=avif"
                         alt="{member.title}"
                         width="{member.photo.width}" height="{member.photo.height}">
                </picture>

                <!--{/if}-->
        <ul class="card__label">
            <li class="labelfilters">
                service design
            </li>
            <li class="labelfilters">label</li>
        </ul>
        <ul>
            <li class="Companyname">{member.title}</li>
            <li>amsterdam</li>
        </ul>
        <ul class="card__label">
            <li>25 tot 49 werkemers</li>
            <li class="card__li__hiring">hiring</li>
        </ul>
        <ul>
            <li class="linkdetails">details</li>
        </ul>
        </div>
    {/each}

</div>

<style>
    /*div :first-child*/
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
        grid-template-rows: auto auto auto auto auto;
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
    }

    .card__label {
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

    }

</style>
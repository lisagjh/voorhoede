<script>
    export let data;
</script>

<div>
    {#each data.members as member}
        <ul>

            <li>
                <!--{#if member.photo && member.photo.id }-->
<!--                    <picture>-->

<!--                        <img src="https://fdnd-agency.directus.app/assets/{member.photo.id}" alt="{member.title}"-->
<!--                             width="{member.photo.width}" height="{member.photo.height}">-->
<!--                    </picture>-->

                <picture>
                        <img src="https://fdnd-agency.directus.app/assets/687ea821-1626-4d43-bd4a-16d7a7bb1f34?format=avif" alt="{member.title}"
                             width="{member.photo.width}" height="{member.photo.height}">
                    </picture>



                <!--{/if}-->
               </li>
            <li>
                service design
            </li>
            <li>{member.title}</li>
            <li>amsterdam</li>
            <li>25 tot 49 werkemers</li>
            <li>details</li>
        </ul>
    {/each}
</div>

<style>
    div{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        /*gap: 2em;*/
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        /*padding: 2em;*/
    }
    ul{
        list-style: none;
        margin: 0;
        width: 100%;
        overflow: hidden;
        border: var(--grey) 1px solid;
        padding: 2em;
    }
    img{
        object-fit: cover;
        width: 100%;
    }

</style>
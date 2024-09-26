<script>
    export let data;
</script>

<section>

    {#each data.members as member}
        <ul>
            <li>
                service design
            </li>
            <li>{member.title}</li>
            <li>amsterdam</li>
            <li>25 tot 49 werkemers</li>
        </ul>
    {/each}
</section>

<style>
    section{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2em;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        overflow: hidden;
        border: var(--grey) 1px solid;
    }

</style>
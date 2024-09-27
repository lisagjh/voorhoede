<script>
    export let data;
</script>

{#each data.members as member}
    <ul>
        <li>{member.title}</li>
    </ul>
{/each}
<script>
    export let data;
</script>
{#each data.vacature as member}
    <ul>
        <li>{member.Title}  title</li>
        <li>{member.Hours}  uren</li>
        <li>{member.description} omschrijiving</li>
        <li>{member.Data_Posted } datum gepost</li>
    </ul>
{/each}
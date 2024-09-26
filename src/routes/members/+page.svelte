<script>
    export let data;

</script>

<main>
    <a href="/">Home</a>
    {#each data.members as member}

                    <ul>


                        <li>{member.title}</li>
                        <li>{member.summary}</li>
                        <li>{member.description}</li>
                        <li>{member.vacancies} de id van de vacature</li>
                    </ul>
                <hr>

    {/each}


    <h2>vacatuer data</h2>
    {#each data.vacature as member}

        <ul>


            <li>{member.Title}  title</li>
            <li>{member.Hours}  uren</li>
            <li>{member.description} omschrijiving</li>
            <li>{member.Data_Posted } datum gepost</li>
        </ul>
        <hr>

    {/each}

</main>

<style>
    main{
        line-height: 1.5;
        padding: 2em;
    }
</style>
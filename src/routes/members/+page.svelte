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

</main>
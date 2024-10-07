<script>
    export let data;

    import Member from "$lib/Member.svelte";
    import Intro from "$lib/descriptionText.svelte";
    import Backhome from "$lib/BackHomeBtn.svelte";
    import Header from "$lib/Header.svelte";
    import Searchbar from "$lib/Searchbar.svelte";

    // Input van de gebruiker 
    let searchTerm = "";

  // $: Is een dynamisch element wat zich instant aanpast op de data die erin zit. 
  // .filter is een built in JS functie die een nieuwe arraay aanmaakt met de juiste items op basis van de requirements die er
  // na volgen onder andere .ToLowerCase en .Includes met de member array waar op dit moment alle agencies in staan.
  $: filteredMembers = data.members.filter(member =>
    member.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
</script>

<Header/>

<main>
    <Backhome/>
    <Intro
        label=" De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch Digital Agencies. Zet de juiste filters aan en zoek contact met het bureau dat het beste bij past bij jouw vraagstuk en uitdaging.
        'Ook DDA lid worden? Ga dan naar deze pagina voor meer informatie."
    />
    
    <!--To build : een delay functie, instant feedback is misschien niet user friendlyg-->
    <Searchbar
        placeholderText="Zoek een bureau"
        bind:searchTerm={searchTerm}
    />

    <!--Het door pasen van de filteredMembers array naar members zodat die alleen de gefilterde items laat zien-->
    <Member data={{ members: filteredMembers }}/>
      
    </main>
<style>
    main {
        line-height: 1.5;
        padding: 2rem;
    }

    .header {
        background-color: var(--grey);
    }


    .logo {
        width: 12em;
    }

</style>
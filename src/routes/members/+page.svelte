<script>
    export let data;

    import Member from "$lib/Member.svelte";
    import Vacancies from "$lib/Vacancies.svelte";
    import myImage from '../../lib/images/logo.png';
</script>

<main>

    <div  class="header">
    <img  src="{myImage}" class="logo" alt="Dutch Digital Agencies logo link naar home" loading="lazy">
    </div>
    <a href="/">Home</a>


    <h2>onze leden</h2>
    <p>
        De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch Digital Agencies. Zet de juiste filters aan en zoek contact met het bureau dat het beste bij past bij jouw vraagstuk en uitdaging. 
        Ook DDA lid worden? Ga dan naar deze pagina voor meer informatie.
    </p>

    <form class="searchform">
        <label for="site-search">zoek een bureau:</label>
        <input type="search" name="search" id="site-search" placeholder="zoek een bureau..."/>
        <hr>
        <button>zoek een bureach</button>
    </form>


    <Member data={data}/>

</main>

<style>
    main{
        line-height: 1.5;
        padding: 2em;
    }
    .header{
        background-color: var(--grey);
    }
    #site-search{
        border: none;
        /*border-bottom: 2px solid var(--grey);*/
    }
    .searchform{
        border-bottom: var(--grey);

    }

    .logo{
        width: 12em;
    }


</style>
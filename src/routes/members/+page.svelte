<script>
    export let data;

    import Member from "$lib/Member.svelte";
    import Vacancies from "$lib/Vacancies.svelte";
    import myImage from '../../lib/images/logo.png';
    import Searchform from "$lib/Searchform.svelte";
</script>

<main>

    <a href="/">Home</a>

    <h2>onze leden</h2>
    <p>
        De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch Digital Agencies. Zet de juiste filters
        aan en zoek contact met het bureau dat het beste bij past bij jouw vraagstuk en uitdaging. 
        Ook DDA lid worden? Ga dan naar deze pagina voor meer informatie.
    </p>
    <Searchform/>

    <Member data={data}/>

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
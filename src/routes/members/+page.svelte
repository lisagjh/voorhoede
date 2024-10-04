<script>
    export let data;

    import Member from "$lib/Member.svelte";
    import Searchform from "$lib/Searchform.svelte";
    import Intro from "$lib/descriptionText.svelte";
    import Backhome from "$lib/BackHomeBtn.svelte";
    import Header from "$lib/Header.svelte";
</script>

<main>


    <Header/>
    <Backhome/>
    <Intro
        label=" De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch Digital Agencies. Zet de juiste filters aan en zoek contact met het bureau dat het beste bij past bij jouw vraagstuk en uitdaging.
        'Ook DDA lid worden? Ga dan naar deze pagina voor meer informatie."
    />
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
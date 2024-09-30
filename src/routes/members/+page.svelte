<script>
    export let data;

    import Member from "$lib/Member.svelte";
    import Searchform from "$lib/Searchform.svelte";
    import Intro from "$lib/descriptionText.svelte";
    import Backhome from "$lib/BackHomeBtn.svelte";
</script>

<main>


    <Backhome/>
    <Intro/>
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
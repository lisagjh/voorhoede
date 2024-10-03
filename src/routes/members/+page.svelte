<script>
    export let data;

    import Member from "$lib/Member.svelte";
    import Vacancies from "$lib/Vacancies.svelte";
    import myImage from '../../lib/images/logo.png';
</script>

<main>


    <form>
        <label for="site-search">zoek een bureau:</label>
        <input type="search" name="search" id="site-search"/>
        <button>zoek een bureau</button>
    </form>


    <Member data={data}/>

</main>

<style>
    main{
        line-height: 1.5;
        padding: 2em;
    }


    .logo{
        width: 12em;
    }

</style>
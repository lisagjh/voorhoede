<script>
    export let data;

    import Member from "$lib/Member.svelte";
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

</style>
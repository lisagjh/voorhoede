<script>
    // import Link from "$lib/Link.svelte"; // Will later convert slots to snipppets SV5
    let {title, language, company, hours, city} = $props()
</script>


<article>
    <h3>{title}</h3>
    <p>{company}</p>
    <p>{city}</p>
    <p>
       {language}
    </p>
    <p>
        {hours}
    </p>
    <a href="/">
        Bekijk vacature
    </a>
</article>

<style>

</style>

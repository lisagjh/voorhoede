<script>
    // import Link from "$lib/Link.svelte"; // Will later convert slots to snipppets SV5
    let {title, language, company, hours, city} = $props()
</script>


<article>
    <h2>{title}</h2>
    <p>{company}</p>
    <p>{city}</p>
    <p>
        <span>Voertaal :</span> {language}
    </p>
    <p>
        <span>Uren per week :</span> {hours}
    </p>
    <a href="/">
        Bekijk vacature
    </a>
</article>

<style>

</style>

<script>
    // import Link from "$lib/Link.svelte"; // Will later convert slots to snipppets SV5
    let {title, language, company, hours, city} = $props()
</script>


<article>
    <h2>{title}</h2>
    <span>{company}</span>
    <span>{city}</span>
    <span>Voertaal :{language}</span>
    <span>Uren per week :{hours}</span>
    <a href="/">Bekijk vacature</a>
</article>

<style>

</style>

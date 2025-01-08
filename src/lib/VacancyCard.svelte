<script>
    // import Link from "$lib/Link.svelte"; // Will later convert slots to snipppets SV5
    let {title, language, company, hours, city} = $props()
</script>


<article>
    <h3>{title}</h3>
    <p>{company}</p>
    <p>{city}</p>
    <p>
        <span>VOERTAAL :</span> {language}
    </p>
    <p>
        <span>UREN PER WEEK :</span> {hours}
    </p>
    <a href="/">
        Bekijk vacature
    </a>
</article>

<style>

article {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5em;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    padding: 3em 0;
    margin: .25em 0;
}

h3 {
    width: 100%;
}

article p, span {
    font-family: var(--martian-mono);
}

article p:nth-of-type(1){
   text-decoration: underline;
}

article p:nth-of-type(3), p:nth-of-type(4){
    width: 100%;
}

@media (min-width: 820px){
    span {
        display: none;
    }
}


</style>

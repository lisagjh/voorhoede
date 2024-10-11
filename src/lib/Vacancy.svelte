<script>
    import Link from "$lib/Link.svelte";
    export let title, language, company, hours, city, href
</script>

<article>
    <h4 class="job-title">{title}</h4>
    <span class="language">{language}</span>
    <span class="company">{company}</span>
    <span class="workweek">{hours}</span>
    <span class="city" >{city}</span>

    <Link 
        href={href}
        clazz="detail-link"
    >
        <span slot="link-text">BEKIJKEN</span>
        <svg slot="svg-icon-right"
        width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </Link>
</article>


<style>

article {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto auto auto;
    gap: 1.75em 0;
    align-items: center;
    margin-bottom: 15%;
    padding-bottom: 15%;
    border-bottom: 1px solid black;
}

article:last-child {
    border-bottom: none;
}

@media (min-width: 620px){
    article {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 7.5%;
        padding-bottom: 7.5%;
        
    }

}

@media (min-width: 820px){
    article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 4.5%;
        padding-bottom: 4.5%;
    }
}

@media (min-width: 1024px){
    article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2.5%;
        padding-bottom: 2.5%;
    }
}


</style>
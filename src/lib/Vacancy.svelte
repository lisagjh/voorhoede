<script>
    import Link from "$lib/Link.svelte";
    export let title, language, company, hours, city, href
</script>


<div>
    <h2 class="job-title">{title}</h2>
    <span class="language">{language}</span>

    <span class="company">{company}</span>
    <span class="language">{language}</span>
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
</div>


<style>

div {
    display: grid;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto auto auto;
    gap: 1.75em 0;
    align-items: center;
    margin-bottom: 15%;
    padding-bottom: 15%;
    border-bottom: 1px solid black;
}

h2 {
    font-size: 2em;
    font-weight: 400;
}

div:last-child {
    border-bottom: none;
}


@media (min-width: 620px){
    div {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 7.5%;
        padding-bottom: 7.5%;
        
    }
}

@media (min-width: 820px){
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 1.75em;
        padding-bottom: 10%;
        margin-bottom: 10%;
        border-bottom: 1px solid black;
    }
    .job-title {
        width: 100%;
    }
    .company, .language, .workweek, .city {
        width: 37.5%;
    }


@media (min-width: 1024px){
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2.5%;
        padding-bottom: 2.5%;

    @media (min-width: 540px){
        .company, .language, .workweek, .city {
            width: 29%;
        }


</style>
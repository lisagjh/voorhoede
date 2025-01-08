<script>
    import Link from "$lib/Link.svelte";
    export let title, language, company, hours, city, href
</script>


<article>
    <h2 class="job-title">{title}</h2>
    <span class="company">{company}</span>
    <span class="language">Voertaal :{language}</span>
    <span class="workweek">Uren per week :{hours}</span>
    <span class="city" >{city}</span>

    <Link 
        href={href}
        clazz="detail-link"
    >
        <span slot="link-text">BEKIJK VACATURE</span>
        <svg slot="svg-icon-right"
        width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M7 17L17 7M17 7H8M17 7V16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </Link>
</article>


<style>

</style>

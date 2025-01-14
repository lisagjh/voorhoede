<script>
    // import Link from "$lib/Link.svelte"; // Will later convert slots to snipppets SV5
    let {title, language, company, hours, city} = $props()
</script>


<article>
    <h3>{title}</h3>
    <p>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_100_3566)">
            <path d="M3 7.5H5.25V9.75H3V7.5ZM6.75 9.75H9V7.5H6.75V9.75ZM3 13.5H5.25V11.25H3V13.5ZM6.75 13.5H9V11.25H6.75V13.5ZM3 6H5.25V3.75H3V6ZM6.75 6H9V3.75H6.75V6ZM18 6.375V18H0V2.625C0 1.92881 0.276562 1.26113 0.768845 0.768845C1.26113 0.276562 1.92881 0 2.625 0L9.375 0C10.0712 0 10.7389 0.276562 11.2312 0.768845C11.7234 1.26113 12 1.92881 12 2.625V3.75H15.375C16.0712 3.75 16.7389 4.02656 17.2312 4.51884C17.7234 5.01113 18 5.67881 18 6.375ZM9.75 2.625C9.75 2.52554 9.71049 2.43016 9.64017 2.35984C9.56984 2.28951 9.47446 2.25 9.375 2.25H2.625C2.52554 2.25 2.43016 2.28951 2.35984 2.35984C2.28951 2.43016 2.25 2.52554 2.25 2.625V15.75H9.75V2.625ZM15.75 6.375C15.75 6.27554 15.7105 6.18016 15.6402 6.10983C15.5698 6.03951 15.4745 6 15.375 6H12V15.75H15.75V6.375ZM12.75 9.75H15V7.5H12.75V9.75ZM12.75 13.5H15V11.25H12.75V13.5Z" fill="#222226"/>
            </g>
            <defs>
            <clipPath id="clip0_100_3566">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        {company}
    </p>
    <p>{city}</p>
    <p>
       {language}
    </p>
    <p>
        30-{hours}
    </p>
    <a href="/">
        Bekijk vacature
    </a>
</article>

<style>

article {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding: 2.5em 1em 2.5em 1em;
    border-bottom: 1px solid black;
}

article:nth-of-type(1) {
    padding: 0em 1em 2.5em 1em;
}

h3 {
    font-size: 1.75em;
}

p:nth-of-type(1){
    display: flex;
    gap: .5em;
    align-items: center;
    text-decoration: underline;
}

</style>

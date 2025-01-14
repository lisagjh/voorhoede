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
    <p>
        <svg version="1.0" id="Layer_1"
            width="18" height="18" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
            <path fill="#231F20" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
            C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
            C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
        </svg>
        {city}
    </p>
    <div>
        <p>
            {language}
        </p>
        <p>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.8284 6.75736C12.3807 6.75736 12.8284 7.20507 12.8284 7.75736V12.7245L16.3553 14.0653C16.8716 14.2615 17.131 14.8391 16.9347 15.3553C16.7385 15.8716 16.1609 16.131 15.6447 15.9347L11.4731 14.349C11.085 14.2014 10.8284 13.8294 10.8284 13.4142V7.75736C10.8284 7.20507 11.2761 6.75736 11.8284 6.75736Z" fill="#0F1729"/>
            </svg>
            30-{hours} UUR
        </p>
    </div>
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

article > p:nth-of-type(1){
    text-decoration: underline;
}

p:nth-of-type(1), p:nth-of-type(2){
    display: flex;
    gap: .5em;
    align-items: center;
}

    div {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }

@media(min-width: 420px){
    article{
        padding: 2.5em;
    }
    article:nth-of-type(1) {
        padding: 0em 2.5em 2.5em 2.5em;
    }
    div {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }
}

@media(min-width: 500px){

    div > p:first-of-type, div > :last-of-type{
        border: 1px solid black;
        padding: .5em;
    }
}

</style>

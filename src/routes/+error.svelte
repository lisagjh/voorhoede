<script>
    import {page} from '$app/stores'

    console.log($page.status)
</script>
<section>
    <h1>Er gaat iets mis zie onderstaande error?</h1>
    <p>{$page.status} - {$page.error.message}
    </p>
        <a href="/#">
            <svg class="flip-arrow"
                 width="16"
                 height="16"
                 viewBox="0 0 16 16"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
            >
                <path
                        d="M8 3L13.0001 8.0001L8 13.0002"
                        stroke="#222226FF"
                        stroke-width="1.5"
                        stroke-miterlimit="4.62023"
                />
                <path
                        d="M3 8L13 8"
                        stroke="#222226FF"
                        stroke-width="1.5"
                        stroke-miterlimit="4.62023"
                        stroke-linejoin="round"
                />
            </svg>
            terug naar home
        </a>
</section>


<style>
    section {
        padding: 2rem;

    }

    a {
        color: var(--black);
        text-decoration: none;
        text-transform: uppercase;
    }

    .flip-arrow {
        transform: scaleX(-1);
        color: var(--black);
    }

    p {
        margin-bottom: 2rem;
    }

    svg {
        vertical-align: middle;
        margin-bottom: 0.2rem;
        color: var(--black);
    }
</style>
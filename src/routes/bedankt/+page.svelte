
<section>
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
    <h1>Bedankt uw aanmelding is verzonden</h1>
</section>


<style>
    section {
        padding: 2rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        line-height: 1.5;
    }

    @media (max-width: 35em) {
        h1 {
            font-size: 1.5rem;
        }
    }

    @media (min-width: 35em) {
        h1 {
            font-size: 2rem;
            line-height: 1.5;
        }
    }
    h1{
        letter-spacing: 2px;
    }

    a {
        color: var(--black);
        text-decoration: none;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }

    a:hover {
        color: var(--blue);
    }

    a:hover svg path {
        stroke: var(--blue);

    }



    svg {
        vertical-align: middle;
        margin-bottom: 0.2rem;
        color: var(--black);
        transform: scaleX(-1);
    }
</style>
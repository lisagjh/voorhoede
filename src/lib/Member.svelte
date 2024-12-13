<script>
    import Link from "$lib/Link.svelte";
    import {onMount} from "svelte";
    export let data;

    onMount(() => {
        if (document.startViewTransition) {
            const buttons = document.querySelectorAll('.button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', () => {
                    const clickedCard = buttons[i].closest('.card');
                    document.startViewTransition(() =>
                        clickedCard.classList.toggle('active')
                )
                });
            }

        // https://codepen.io/user46frontend/pen/PwYzyZG eigne voorbeeld
        }

        else
        {
            const buttons = document.querySelectorAll('.button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].addEventListener('click', () => {
                    const clickedCard = buttons[i].closest('.card');
                        clickedCard.classList.toggle('active')
                });
            }
        }

    });
</script>


<section class="">

        <div class="grid-container">
            {#each data.members as member}

                <article class="card">
                    <picture>
                        <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=avif" type="image/avif">
                        <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=webp" type="image/webp">
                        <img src="https://fdnd-agency.directus.app/assets/{member.photo}" loading="lazy" alt="{member.title}">
                    </picture>

                    <ul class="card-label-filters">
                        <li class="label-filters">
                            service design
                        </li>
                        <li class="label-filters">label</li>
                    </ul>

                    <h2 aria-label="{member.title}">{member.title}</h2>
                    <p>{member.address}</p>

                    <ul class="card-label">
                        <li>{parseInt(member.colleagues)}  werknemers</li>
                        <li class="card-hiring">hiring</li>

                    </ul>

                    <Link href="/" clazz="detail-link"><span slot="link-text">Details</span>
                        <svg width="16" height="16" slot="svg-icon-right" viewBox="0 0 24 24" fill="none">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </Link>

                    <button class="button" >maak mij recht</button>
                </article>

            {/each}
        </div>
<!--    </details>-->
</section>
<style>





    /*hieronder normale code*/
    .grid-container {

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
        text-transform: uppercase;
    }

    .card {
        width: 100%;
        padding: 2rem;
        display: grid;
        grid-template-rows: 16rem auto auto 4rem auto;
        gap: 16px;
    }


    .card-label-filters {
        display: flex;
        flex-direction: row;
        text-overflow: ellipsis;
        gap: 0.8rem;

    }

    .card-label {
        display: flex;
        flex-direction: row;
        text-overflow: ellipsis;
        gap: 0.5rem;
        height: 2rem;
    }

    .label-filters {
        border: 2px solid var(--black);
        width: max-content;
        padding: 3px;
    }

    h2 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 38px;
    }

    ul {
        list-style: none;
        margin: 0;
    }


    .card-hiring {
        background-color: var(--blue);
        color: var(--white);
        padding: 2px;
        height: 1.6rem;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    /*animatie*/


    /*!*animatie slide up om de card te tonen van beneden naar boven*!*/
    @keyframes Rotate {


        0% {
            /*background-color: red;*/
            transform: translateY(10em);
            filter: blur(25px);
            transition: filter 0.3s ease-in-out;
            rotate: 405deg;
        }
        25% {
            transform: translateY(5em);
            filter: blur(15px);
            transition: filter 0.3s ease-in-out;
        }
        50% {
            filter: blur(0px);
            transition: filter 0.3s ease-in-out;
        }

        100%{
            filter: blur(10px);
            transition: filter 0.3s ease-in-out;
        }

    }

    /*gradient animation white*/
    @keyframes white-background-cards {
        0% {
            background-position: 0% 50%;
            background-color: red;
        }
        100% {
            background-position: 100% 50%;
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .card {
            animation: Rotate both, white-background-cards 2s infinite;
            animation-timeline: view();
        }
    }
    :global(.card.active) {
        background: linear-gradient(300deg, rgb(128, 216, 250) 0%, rgb(235, 235, 255) 47%, rgba(0,212,255,1) 100%);
        rotate: 348deg;

    }

    @media (prefers-reduced-motion: reduce) {
        .card {
            animation: none;
        }
        :global(.card.active) {
            animation: none; /* Remove the animation */
        }
    }
    :global(.color) {
        background-color: red;
    }


    .button{
        background-color: var(--blue);
        color: white;
        font-size: 18px;
        width: max-content;
        padding: 8px;
        /*border-radius: 15px;*/
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .button:hover {
        background-color: black;
    }

    @media (max-width: 350px) {

        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
            text-transform: uppercase;
        }

        img {
            width: 92%;
        }

        .card {
            padding: 1rem;
        }

        .card {
            grid-template-rows: 16rem auto auto auto auto;
            grid-template-columns: 14em;
            row-gap: 2em;
        }


    }

    @media (max-width: 43rem) {
        .card {
            border: 1px solid var(--grey);
        }
    }

    @media (min-width: 43rem) {
        .card {
            border-bottom: 1px solid var(--grey);
        }
    }

    @media (min-width: 325px) {
        .grid-container {
            padding: 1rem;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }
        .card{
            border: 1px solid var(--grey);
        }
    }

    @media (max-width: 766px) {



    }

    /*aniamtie keyframes*/

    /*animtiate moet vna boven naar beneden zijn*/
    /*2 koloms */
    @media (min-width: 765px) and (max-width: 1127px) {
        /*.card:nth-child(-n+4) {*/
        /*    border-top: none;*/

        /*}*/

        /*.card:nth-child(odd) {*/
        /*    border-right: 1px solid var(--grey);*/
        /*}*/




    }


    /*3koloms*/

    /*hier nog een animatie op toevoegen*/
    /*@media (min-width: 1127px) and (max-width: 1466px) {*/

    /*    .grid-container {*/
    /*        width: 100%;*/

    /*    }*/


    /*    !*alle 3 tegelijk kan niet*!*/
    /*    @media (prefers-reduced-motion: no-preference) {*/
    /*        .card:nth-child(3n) {*/

    /*            border-right: 1px solid var(--grey);*/


    /*        }*/

    /*        .card:nth-child(3n+2) {*/
    /*            border-right: 1px solid var(--grey);*/

    /*        }*/

    /*        .card:nth-child(3n+4),*/
    /*        .card:nth-child(1) {*/
    /*            border-right: 1px solid var(--grey);*/


    /*        }*/
    /*    }*/


    /*}*/

    /*4koloms*/
    /*@media (min-width: 1466px) and (max-width: 1815px) {*/


    /*    .card:nth-child(4n-1),*/
    /*    .card:nth-child(4n-2),*/
    /*    .card:nth-child(4n-3) {*/
    /*        border-right: 1px solid var(--grey);*/
    /*    }*/

    /*}*/

    /*@media (min-width: 1466px) {*/

    /*}*/

    /*!*5colums *!*/

    /*@media (min-width: 1815px) and (max-width: 2165px) {*/


    /*    .card:nth-child(5n-1),*/
    /*    .card:nth-child(5n-2),*/
    /*    .card:nth-child(5n-3),*/
    /*    .card:nth-child(5n-4) {*/
    /*        border-right: 1px solid var(--grey);*/
    /*    }*/


    /*}*/

    /*!*6colums *!*/
    /*@media (min-width: 2165px) and (max-width: 2516px) {*/


    /*    .card:nth-child(6n-1),*/
    /*    .card:nth-child(6n-2),*/
    /*    .card:nth-child(6n-3),*/
    /*    .card:nth-child(6n-4),*/
    /*    .card:nth-child(6n-5) {*/
    /*        border-right: 1px solid var(--grey);*/
    /*    }*/
    /*}*/

    /*!*7 colums*!*/
    /*@media (min-width: 2516px) {*/


    /*    .card:nth-child(6n),*/
    /*    .card:nth-child(6n-1),*/
    /*    .card:nth-child(6n-2),*/
    /*    .card:nth-child(6n-3),*/
    /*    .card:nth-child(6n-4),*/
    /*    .card:nth-child(13),*/
    /*    .card:nth-child(26) {*/
    /*        border-right: 1px solid var(--grey);*/
    /*    }*/

    /*    .card:nth-child(7n) {*/
    /*        border-right: none;*/
    /*    }*/

    /*}*/


</style>
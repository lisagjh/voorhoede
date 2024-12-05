<script>
    import Link from "$lib/Link.svelte";

    export let data;
</script>


<section class="grid-container">
    {#each data.members as member}

        <article class="card">
            <picture>
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=avif" type="image/avif">
                <source srcset="https://fdnd-agency.directus.app/assets/{member.photo}?format=webp" type="image/webp">
                <img src="https://fdnd-agency.directus.app/assets/{member.photo}" loading="lazy" alt="">
            </picture>

            <ul class="card-label-filters">
                <li class="label-filters">
                    service design
                </li>
                <li class="label-filters">label</li>
            </ul>

            <h2>{member.title}</h2>
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

        </article>
    {/each}


</section>
<style>


    /*hieronder normale code*/
    .grid-container {

        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(263px, 1fr));
        text-transform: uppercase;
        margin: 1rem -1rem 0rem;
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
    img{
        animation: reveal 1s linear both;
        /* Rember to declare the timeline after the shorthand */
        animation-timeline: view();
    }

    @keyframes reveal {
        from {
            opacity: 0;
            clip-path: inset(30% 30% 25% 30%);
        }
        50% {
            opacity: 1;
            clip-path: inset(0% 0% 0% 0%);
        }
    }



    @keyframes slide-in-up {
        0% {
            transform: translateY(20em);
            background: rgb(98,194,6);
            background: linear-gradient(139deg, rgba(2,0,36,1) 0%, rgb(212, 212, 248) 47%, rgba(0,212,255,1) 100%);
        }
        10% {
            transform: translateY(15em);
            background: linear-gradient(139deg, rgba(2,0,36,1) 0%, rgb(212, 212, 248) 47%, rgba(0,212,255,1) 100%);
        }
        25% {
            transform: translateY(10em);
            background: linear-gradient(139deg, rgba(2,0,36,1) 0%, rgb(212, 212, 248) 47%, rgba(0,212,255,1) 100%);
        }
        50%{
            transform: translateY(0em);
            background: rgb(98,194,6);
            background: linear-gradient(139deg, rgba(2,0,36,1) 0%, rgb(212, 212, 248) 47%, rgba(0,212,255,1) 100%);
        }
        /*50% {*/
        /*    transform: translateY(7.5em);*/
        /*    background: rgb(98,194,6);*/
        /*    background: linear-gradient(139deg, rgba(2,0,36,1) 0%, rgb(212, 212, 248) 47%, rgba(0,212,255,1) 100%);*/
        /*}*/

        /*40% {*/
        /*    transform: translateY(0em);*/
        /*    background: rgb(98,194,6);*/
        /*    background: linear-gradient(139deg, rgba(2,0,36,1) 0%, rgb(212, 212, 248) 47%, rgba(0,212,255,1) 100%);*/
        /*}*/
    }


    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
            background: rgb(98,194,6);
            background: linear-gradient(300deg, rgba(98,194,6,1) 0%, rgb(235, 235, 255) 47%, rgba(0,212,255,1) 100%);
        }
        100% {
            background-position: 100% 50%;
            /*background: rgb(98,194,6);*/

            background: rgb(129, 228, 168);
            background: linear-gradient(139deg, rgba(2,0,36,1) 0%, rgb(194, 250, 243) 47%, rgb(182, 57, 173) 100%);
        }
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
        .card  {
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
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }

    }

    @media (max-width: 765px)  {
        .grid-container {
            /*overflow-x: hidden;*/
        }

        .card
        {

            animation: slide-in-up both ,gradient-animation 2s infinite;
            animation-timeline: view();
        }







    }

    /*aniamtie keyframes*/

    /*animtiate moet vna boven naar beneden zijn*/
    /*2 koloms */
    @media (min-width: 765px) and (max-width: 1127px) {
        .card:nth-child(-n+4) {
            border-top: none;

        }

        .card:nth-child(odd) {
            border-right: 1px solid var(--grey);
        }

        /*animatie*/

        .card:nth-child(odd)
        {

            animation: spin both ;
            /*animation: slideLeftAnimation both ;*/
            animation-timeline: view();
        }


        .card:nth-child(even)
        {

            animation: slide-in-up both ;
            animation-timeline: view();
        }

        /*2de animatie*/
        /*https://codepen.io/argyleink/pen/wvOKbyL/2d672362df9ac37cf6920b5b6bc3a243*/

        /*todo voeg tutorial toe aan issue deze*/
        @keyframes spin {
            to {
                transform: rotateY(1turn);
            }
        }

        @media (prefers-reduced-motion: no-preference) {
            .card {
                animation: spin linear;
                animation-timeline: view();
                animation-range: contain;
            }
        }



    }


    /*3koloms*/

    @media (min-width: 1127px) and (max-width: 1466px) {

        .grid-container{
            width: 100%;
            /*met paddidng maak je er 2 cardss van met overflow hidden stop je de extra ruimte aan de rechterkant
            en het laten inkomen van rechts is niet mogelijk*/
            /*padding: 10em;*/
            /*overflow: hidden;*/
        }

        .card:nth-child(3n+1),
        .card:nth-child(3n+2)
        {
            border-right: 1px solid var(--grey);
            animation: slide-in-up both ,gradient-animation 2s infinite;
            animation-timeline: view();
        }


        /*alle 3 tegelijk kan niet*/

        .card:nth-child(3n){
            /*slide-in-rigth*/
            animation: slide-in-right    1s ease-in-out   ;
            animation-timeline: view();
        }

        .card:nth-child(3n+2){
            animation: slide-in-up 1s ease-in-out;
            animation-timeline: view();
        }

        .card:nth-child(3n+4),
        .card:nth-child(1){
            animation:   slideLeftAnimation 1s ease-in-out;
            animation-timeline: view();
        }


    }

    /*4koloms*/
    @media (min-width: 1466px) and (max-width: 1815px) {



        .card:nth-child(4n-1),
        .card:nth-child(4n-2),
        .card:nth-child(4n-3){
            border-right: 1px solid var(--grey);
        }

        /*https://codepen.io/argyleink/pen/wvOKbyL/2d672362df9ac37cf6920b5b6bc3a243*/

        /*todo voeg tutorial toe aan issue deze*/
        @keyframes spin {
            to {
                transform: rotateY(1turn);
            }
        }

        @media (prefers-reduced-motion: no-preference) {
            .card {
                animation: spin linear;
                animation-timeline: view();
                animation-range: contain;
            }
        }


    }


    /*5colums */

    @media (min-width: 1815px) and (max-width: 2165px) {



        .card:nth-child(5n-1),
        .card:nth-child(5n-2),
        .card:nth-child(5n-3),
        .card:nth-child(5n-4) {
            border-right: 1px solid var(--grey);
        }
        .card:nth-child(5n-3),
        .card:nth-child(5n-4)
        {
            animation:  slideLeftAnimation   ;
            animation-timeline: view();
        }

        .card:nth-child(5n-1),
        .card:nth-child(5n-2){
            animation:  slideLeftAnimation   ;
            animation-timeline: view();
        }



    }

    /*6colums */
    @media (min-width: 2165px) and (max-width: 2516px) {

        .card:nth-child(6n-1),
        .card:nth-child(6n-2),
        .card:nth-child(6n-3),
        .card:nth-child(6n-4),
        .card:nth-child(6n-5)
        {
            border-right: 1px solid var(--grey);
        }
    }

    /*7 colums*/
    @media (min-width: 2516px) {


        .card:nth-child(6n),
        .card:nth-child(6n-1),
        .card:nth-child(6n-2),
        .card:nth-child(6n-3),
        .card:nth-child(6n-4),

        .card:nth-child(13),
        .card:nth-child(26)
        {
            border-right: 1px solid var(--grey);
        }

        .card:nth-child(7n){
            border-right: none;
        }

    }


</style>
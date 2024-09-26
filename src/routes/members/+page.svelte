<script>
    export let data;

    import Member from "$lib/Member.svelte";
    import Vacancies from "$lib/Vacancies.svelte";
    import myImage from '../../lib/images/logo.png';
</script>

<main>

    <div  class="header">
    <img  src="{myImage}" class="logo" alt="Dutch Digital Agencies logo link naar home" loading="lazy">
        <svg id="hamburger" class="Header__toggle-svg" viewbox="0 0 60 40">
            <g stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                <path id="top-line" d="M10,10 L50,10 Z"></path>
                <path id="middle-line" d="M10,20 L50,20 Z"></path>
                <path id="bottom-line" d="M10,30 L50,30 Z"></path>
            </g>
        </svg>
    </div>
    <a href="/">Home</a>


    <h2>onze leden</h2>
    <p>
        De [nummer] beste digitale bureaus van Nederland zijn verenigd in Dutch Digital Agencies. Zet de juiste filters aan en zoek contact met het bureau dat het beste bij past bij jouw vraagstuk en uitdaging. 
        Ook DDA lid worden? Ga dan naar deze pagina voor meer informatie.
    </p>

    <form>
        <label for="site-search">zoek een bureau:</label>
        <input type="search" name="search" id="site-search"/>
        <button>zoek een bureach</button>
    </form>


    <Member data={data}/>

</main>

<style>
    main{
        line-height: 1.5;
        padding: 2em;
    }
    .header{
        /*background-color: var(--grey);*/
    }

    .logo{
        width: 12em;
    }

/*    overgenomen van https://codepen.io/cassie-codes/pen/abmvqKO werkt alleen niet*/
    #hamburger{
        background-color: var(--black);
    }

    #top-line,
    #bottom-line,
    #middle-line {
        transform-box: fill-box;
        transform-origin: center;
    }

    /*svg:hover {*/

        #top-line svg:hover {
            animation: down-rotate 0.6s ease-out both;
        }


        #bottom-line svg:hover {
            animation: up-rotate 0.6s ease-out both;
        }
        #middle-line svg:hover {
            animation: hide 0.6s ease-out forwards;
        }

    @keyframes up-rotate {
        0% {
            animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
            transform: translateY(0px);
        }
        30% {
            transform-origin: center;
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: translateY(-10px);
        }
        100% {
            transform-origin: center;
            transform: translateY(-10px) rotate(45deg) scale(0.9);
        }
    }

    @keyframes down-rotate {
        0% {
            animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
            transform: translateY(0px);
        }
        30% {
            transform-origin: center;
            animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: translateY(10px);
        }
        100% {
            transform-origin: center;
            transform: translateY(10px) rotate(-45deg) scale(0.9);
        }
    }

    @keyframes hide {
        29% {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    @media (min-width: 30em)  {
       #hamburger{
           display: none;
       }
    }

</style>
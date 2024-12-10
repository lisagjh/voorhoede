<script>

  export let data;

  import IntroSection from "$lib/IntroSection.svelte";
  import Vacancy from "$lib/Vacancy.svelte";
  import Searchbar from "$lib/Searchbar.svelte"

  let AnimationComplete = false;

  function handleAnimationEnd() {
    AnimationComplete = true;
    document.body.classList.add("crazy-theme", "sneeuw");
  }

</script>

<div class="sneeuwvlokken" aria-hidden="true">
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>

  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
  <div>❅</div><div>❅</div><div>❅</div><div>❅</div><div>❅</div>
</div>

<div class="bubblegum">
  <svg
    width="100"
    viewBox="0 0 100 100" 
    fill="none"
    class:is-after={AnimationComplete} 
    on:animationend={handleAnimationEnd}
  >
    <circle cx="50" cy="50" r="48.5" fill="#F194C0" stroke="#B54D7E" stroke-width="3"/>
    <circle cx="18" cy="39" r="5" fill="white"/>
    <ellipse cx="31.7925" cy="22.5113" rx="5" ry="10.8314" transform="rotate(40 31.7925 22.5113)" fill="white"/>
    </svg>
</div>

<IntroSection
  title="Vacatures"
  subtitle="Verslim je carrière bij de beste digitale bureaus van Nederland. Pak je rol als developer of designer, researcher, als scrum master of marketeer, als strateeg. Start of groei door – en laat zien wat je kan."
/>

<section class="filter-section">
  <Searchbar placeholderText="Zoek een vacture... " />
</section>

<section class="vacancies-section">
  {#each data.vacatures as vacature}
  <Vacancy
    title={vacature.title}
    language="Unknown"
    company="Unknown"
    hours={vacature.hours}
    city={vacature.locatie}
    href={vacature.href}
  />
{/each}
</section>

<style>

  :global(body.crazy-theme) {
    font-family: 'Bubblegum', sans-serif;
    background-color: #183F20;
    color: #DF4A39;
    transition: .18s ease-in-out;
  }

  :global(body.sneeuw .sneeuwvlokken div) {
    opacity:1;
    animation-play-state: running;
  }

  .sneeuwvlokken {
    position:fixed;
    left:0; right:0; top:0;
    z-index:9999;
  }

  .sneeuwvlokken div {
    position:fixed;
    top:-10%;
    color: #e2f4fd;
    user-select:none;
    opacity:0;
    animation:
      sneeuwvlok-neer 3.25s linear infinite paused,
      sneeuwvlok-heen-en-weer 1.25s ease-in-out infinite paused;
  }

  /* #region Seperate snowflake animation */
  .sneeuwvlokken div:nth-of-type(1){left:2%; animation-delay:1.0s, 1.1s;}
  .sneeuwvlokken div:nth-of-type(2){left:7%; animation-delay:4.2s, .5s;}
  .sneeuwvlokken div:nth-of-type(3){left:12%; animation-delay:3.8s, 2.2s;}
  .sneeuwvlokken div:nth-of-type(4){left:17%; animation-delay:2.2s, 2.3s;}
  .sneeuwvlokken div:nth-of-type(5){left:22%; animation-delay:8.4s, 2.9s;}

  .sneeuwvlokken div:nth-of-type(6){left:27%; animation-delay:5.7s, 2.4s;}
  .sneeuwvlokken div:nth-of-type(7){left:32%; animation-delay:2.3s, 0.8s;}
  .sneeuwvlokken div:nth-of-type(8){left:37%; animation-delay:1.4s, 0.2s;}
  .sneeuwvlokken div:nth-of-type(9){left:42%; animation-delay:3.1s, 1.5s;}
  .sneeuwvlokken div:nth-of-type(10){left:47%; animation-delay:0s, 0s;}

  .sneeuwvlokken div:nth-of-type(11){left:52%; animation-delay:5s, 1.6s;}
  .sneeuwvlokken div:nth-of-type(12){left:57%; animation-delay:2.3s, 1.7s;}
  .sneeuwvlokken div:nth-of-type(13){left:62%; animation-delay:2.8s, .5s;}
  .sneeuwvlokken div:nth-of-type(14){left:67%; animation-delay:9.1s, 2.3s;}
  .sneeuwvlokken div:nth-of-type(15){left:72%; animation-delay:6.9s, 0.2s;}

  .sneeuwvlokken div:nth-of-type(16){left:77%; animation-delay:4.3s, .9s;}
  .sneeuwvlokken div:nth-of-type(17){left:82%; animation-delay:2.6s, .3s;}
  .sneeuwvlokken div:nth-of-type(18){left:87%; animation-delay:1.2s, 1.4s;}
  .sneeuwvlokken div:nth-of-type(19){left:92%; animation-delay:9.6s, 2.6s;}
  .sneeuwvlokken div:nth-of-type(20){left:97%; animation-delay:5.8s, 1.2s;}
  /* #endregion */

  .bubblegum {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    opacity: 100%;
  }

  svg {
    animation: bubble-increase ease-out;
    animation-timeline: scroll(root);
    animation-range: 0 25%; 
  }

  svg.is-after {
    display: none;
  }

  .vacancies-section {
    display: flex;
    flex-direction: column;
  }

  .filter-section {
    padding: 2em 0em;
    margin-bottom: 3em;
    border: 1px solid black;
    border-right: none;
    border-left: none ;
  }

  @media (min-width: 686px){
    .vacancies-section {
      margin: 0 2.5% 0% 2.5%;
    }
  }

  /* #region Keyframe animations */ 

  /* de vlokken */
  @keyframes sneeuwvlok-neer {
    0%{top:-10%}
    100%{top:100%}
  }

  @keyframes sneeuwvlok-heen-en-weer {
    0%{transform:translateX(0px)}
    50%{transform:translateX(80px)}
    100%{transform:translateX(0px)}
  }

  @keyframes bubble-increase {
    25%{
      scale: 2;
      opacity: 85%;
      transform: rotate(20deg);
    }
    50%{
      scale: 6;
      opacity: 90%;
      transform: rotate(-20deg);
    }
    75%{
      scale: 10;
      opacity: 95%;
      transform: rotate(20deg);
    }
    100% {
      scale: 20;
      opacity: 100%;
    }
  }

  /* #endregion */
</style>

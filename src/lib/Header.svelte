<script>
  import { onMount } from "svelte";

  // variabelen voor reactivity
  let isMenuOpen = false;
  let isLargeScreen = false;

  // toggles isMenuOpen wanneer het scherm klein is
  function toggleMenu() {
    if (!isLargeScreen) {
      isMenuOpen = !isMenuOpen;
    }
  }
  // Deze functie update de isLargeScreen variabele. Checkt met een media query de window size en returned boolean matches
  //dus: checkt of de viewport width minstens 54rem is. zoja, matches = true dus isLargeScreen = true, anders false.
  function updateMenuState() {
    isLargeScreen = window.matchMedia("(min-width: 58rem)").matches;
  }

  // onMount is svelte lifecycle function die start wanneer een component gecreërd word, en stopt wanneer het destroyed word.
  onMount(() => {
    // Deze functie word meteen aangeroepen zodat de juiste grootte van de nav ingesteld kan worden
    updateMenuState();
    // Dit zorgt dat wanneer de viewport width verandert, dat er weer gecheckt word of het groter of kleiner dan 54rem is, en word de
    window.addEventListener("resize", updateMenuState);
    // verwijdert de eventListener wanneer component destroyed word
    return () => window.removeEventListener("resize", updateMenuState);
  });
</script>

<header>
  <a href="/"
    ><img src="/dda-logo.svg" alt="DDA logo" width="60" height="45" /></a
  >

  <button on:click={toggleMenu} aria-label="navigation menu">
    <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
    >
      <mask
              id="mask0_1_121"
              style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
      >
        <rect width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1_121)">
        <path
                d="M4 24V21.3333H28V24H4ZM4 17.3333V14.6667H28V17.3333H4ZM4 10.6667V8H28V10.6667H4Z"
                fill="#222226"
        />
      </g>
    </svg>
  </button>

  <nav
          class:show={isLargeScreen || isMenuOpen}
          aria-hidden={!isLargeScreen && !isMenuOpen}
  >
    <ul>
      <li>
        <a href="/over">Over ons</a>
      </li>
      <li>
        <a href="/events">Events</a>
      </li>
      <li>
        <a href="/publicaties">Publicaties</a>
      </li>
      <li>
        <a href="/members">Leden</a>
      </li>
      <li>
        <a href="/vacatures">Vacatures</a>
      </li>
    </ul>

    <ul class="nav-cta">
      <li class="login">
        <a href="/#">
          Login
          <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
          >
            <path
                    d="M8 3L13.0001 8.0001L8 13.0002"
                    stroke="#364BF7"
                    stroke-width="1.5"
                    stroke-miterlimit="4.62023"
            />
            <path
                    d="M3 8L13 8"
                    stroke="#364BF7"
                    stroke-width="1.5"
                    stroke-miterlimit="4.62023"
                    stroke-linejoin="round"
            />
          </svg>
        </a>
      </li>

      <li class="join">
        <a href="/#" class="join">Word lid</a>
        <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
        >
          <path
                  d="M8 3L13.0001 8.0001L8 13.0002"
                  stroke="#222226"
                  stroke-width="1.5"
                  stroke-miterlimit="4.62023"
          />
          <path
                  d="M3 8L13 8"
                  stroke="#222226"
                  stroke-width="1.5"
                  stroke-miterlimit="4.62023"
                  stroke-linejoin="round"
          />
        </svg>
      </li>
    </ul>
  </nav>
</header>

<style>
  /* when i apply the font-family to the header, it doesnt work, but this way does for some reason? */
  header * {
    font-family: var(--martian-mono);
  }

  header {
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  button {
    background-color: var(--white);
    border: 1px solid var(--black);
    height: 2.5rem;
    width: 2.5rem;
    transition: 0.25s ease-in-out;
  }

  button:hover {
    box-shadow: 2px 2px 0px var(--blue);
    scale: 1.01;
  }

  button:active {
    box-shadow: 1px 1px 0px var(--blue);
    scale: 0.99;
  }

  nav {
    background-color: var(--white);
    position: absolute;
    top: 4.5rem;
    width: 100%;
    max-width: 19.5rem;
    padding: 0.5rem 0;
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    scale: 0.5;
    transform: translateX(50px) translateY(-100px);
    transition: 0.25s ease-in-out;
  }

  .show {
    visibility: visible;
    opacity: 1;
    scale: 1;
    transform: translateX(0) translateY(0);
  }

  /* als het scherm iets groter word blijft de nav rechts hangen bij  */
  @media (min-width: 22.5rem) {
    nav {
      position: absolute;
      right: 0rem;
    }
  }

  nav ul {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 0;
  }

  li {
    display: flex;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--black);
    transition: 0.25s ease-in-out;
  }

  li:hover {
    border-bottom: 2px solid var(--blue);
  }

  li:hover a {
    color: var(--blue);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  .nav-cta {
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
    align-items: center;
  }

  .nav-cta li {
    padding: 0.5rem;
  }

  .login {
    color: var(--blue);
    border: none;
  }

  .login:hover {
    background-color: var(--blue);
    color: var(--white);
  }

  .login:hover a,
  .login:hover svg path {
    color: var(--white);
    stroke: var(--white);
  }

  .join {
    display: flex;
    align-items: center;
    border: 1px solid var(--black);
    flex-wrap: nowrap;
    text-wrap: nowrap;
  }

  .join a {
    border: none;
  }

  /* stack instead of row */
  @media (max-width: 264px) {
    .nav-cta {
      flex-direction: column;
    }
  }

  @media (min-width: 43rem) {
    img {
      width: 80px;
      height: 60.55px;
    }
  }

  /* bigger screen */
  @media (min-width: 58rem) {
    button {
      display: none;
    }

    nav {
      background-color: transparent;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      position: relative;
      top: 0;
      visibility: visible;
      opacity: 1;
      z-index: 5;
      height: fit-content;
      width: 100%;
      max-width: calc(100% - 7rem);
      transform: translateY(-10px);
      border: none;
      scale: 1;
    }

    nav ul {
      flex-direction: row;
      align-items: center;
      width: 100%;
      border: none;
      margin: 0 auto;
    }

    li {
      font-size: 0.9rem;
      margin: 0 1rem;
      padding: 0;
      border: none;
      text-wrap: nowrap;
    }

    li:first-of-type {
      margin: 0 1rem 0 0.5rem;
    }

    li:last-of-type {
      margin: 0 0.5rem 0 1rem;
    }

    .nav-cta {
      justify-content: right;
      width: 90%;
    }

    .nav-cta li {
      flex-wrap: nowrap;
      margin: 0.1rem;
    }
  }
</style>
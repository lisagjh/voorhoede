<script>
  import { onMount } from "svelte";

  onMount(async () => {});

  function toggleMenu() {
    const menu = document.querySelector("nav");

    console.log("click");

    menu.classList.toggle("show");
  }
</script>

<header>
  <img src="/dda-logo.svg" alt="" />

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

  <nav>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
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
        <a href="/leden">Leden</a>
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
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--black);
  }

  button {
    background-color: transparent;
    border: 1px solid var(--black);
    height: 40px;
    width: 40px;
  }

  nav {
    display: grid;
    justify-items: start;
    position: absolute;
    top: 5rem;
    width: 100vw;
    max-width: 24.5rem;
  }

  /* nav * targets all elements, children and nested. nav > * will only select direct children */
  nav * {
    font-family: var(--martian-mono);
  }

  nav ul {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 0;
  }

  li {
    display: flex;
    list-style: "";
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--black);
    transition: 0.25s ease-in-out;
  }

  a {
    color: var(--black);
    text-decoration: none;
    margin: 0;
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

  .login a {
    margin: 0;
  }

  li.login:hover a {
    color: var(--white);
  }

  li.login:hover {
    background-color: var(--blue);
    color: var(--white);
  }

  li.login:hover svg path {
    stroke: var(--white);
  }

  .join {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    text-wrap: nowrap;
    border: 1px solid var(--black);
  }

  .join a {
    margin: 0;
    border: none;
  }

  .show {
    background-color: red;
  }
</style>

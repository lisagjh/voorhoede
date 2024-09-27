<header>
  <img src="/dda-logo.svg" alt="" />

  <button>
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

    <a href="/login" class="login">
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

    <div class="join">
      <a href="/join" class="join">Word lid</a>
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
    </div>
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.75rem 1rem;
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
    top: 3.5rem;
    width: 100%;
  }
  /* nav * targets all elements, children and nested. nav > * will only select direct children */
  nav * {
    font-family: var(--martian-mono);
  }

  nav ul {
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    justify-content: start;
    list-style: "";
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  a.login {
    color: var(--blue);
  }

  .join {
    padding: 0.75rem;
    border: 1px solid var(--black);
  }

  .join a {
    border-left: none;
  }
</style>

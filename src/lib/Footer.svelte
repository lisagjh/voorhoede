<footer>
  <a href="/">
    <img src="/dda-logo.svg" alt="DDA logo" width="80" height="106" />
  </a>
  <a href="/login" class="login">
    Inloggen
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
      <a href="/leden">Leden</a>
    </li>
    <li>
      <a href="/vacatures">Vacatures</a>
    </li>
  </ul>

  <ul class="address">
    <li>
      <strong> Dutch Digital Agencies</strong>
    </li>
    <li>Overhoeksplein 1</li>
    <li>1031 KS Amsterdam</li>
    <li>
      <a href="tel:0854010391">(0)85 4010391</a>
    </li>
    <li>
      <a href="mailto:info@dutchdigitalagencies.com"
        >info@dutchdigitalagencies.com</a
      >
    </li>
  </ul>

  <ul>
    <li><a href="/#">Instagram</a></li>
    <li><a href="/#">Facebook</a></li>
    <li><a href="/#">LinkedIn</a></li>
  </ul>
  <p>Copyright © 2023 Dutch Digital Agencies</p>
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 4rem 1rem;
    border-top: 1px solid var(--black);
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 2.5rem 0;
  }

  li {
    display: flex;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    transition: 0.25s ease-in-out;
  }

  li:hover a {
    color: var(--blue);
  }

  a {
    color: var(--black);
    width: fit-content;
    padding: 0 0.25rem;
    text-underline-offset: 0.2rem;
  }

  a.login {
    color: var(--blue);
    text-decoration: none;
    margin-top: 2.5rem;
    padding: 0.25rem 0.5rem 0.25rem 0rem;
  }

  .login:hover {
    background-color: var(--blue);
    color: var(--white);
  }

  .login:hover svg path {
    color: var(--white);
    stroke: var(--white);
  }

  ul:first-of-type {
    border-top: 1px solid var(--black);
    margin-top: 2.5rem;
  }

  ul:nth-of-type(2) {
    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);
  }

  .address li:nth-of-type(1),
  .address li:nth-of-type(2){
    margin: 0;
  }

  ul:last-of-type {
    flex-direction: row;
  }

  ul:last-of-type li {
    margin-right: 1rem;
  }
</style>

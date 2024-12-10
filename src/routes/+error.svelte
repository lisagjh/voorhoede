<script>
  import { page } from "$app/stores";
  console.log($page.status);
</script>

<section>
  <a href="/#">
    <svg
      class="flip-arrow"
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
  <h1>Er gaat iets mis, zie onderstaande error.</h1>
  <p>
    {$page.status} - {$page.error.message}
    <!--    page status is de statuscode -->
  </p>
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
      font-size: 1.5rem; /*letters worden anders te groot*/
    }
  }

  @media (min-width: 35em) {
    h1 {
      font-size: 2rem; /*letters worden anders te groot*/
      line-height: 1.5;
    }
  }
  h1 {
    letter-spacing: 2px; /* de tekst staat te dicht tegen elkaar aan*/
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

  p {
    /*margin zodat de 404 error niet te dicht tegen de terug naar home tekst staat*/
    margin-bottom: 2rem;
  }

  svg {
    vertical-align: middle; /*dit zorgt ervoor dat de pijl en de tekst op dezelfde hoogte staan */
    margin-bottom: 0.2rem;
    color: var(--black);
    transform: scaleX(-1); /*met deze code gaat het pijltje naar links     */
  }
</style>

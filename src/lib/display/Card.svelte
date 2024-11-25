<script>
  let { className, data = [] } = $props();

  console.log("Card received data:", data.length);
</script>

<div class={className}>
  {#if data.length === 0}
    <p>Sorry, something went wrong.</p>
  {:else}
    {#each data as item}
      <article>
        <h3 class="title">{item.title}</h3>
        <p class="location">{item.locatie}</p>
        <p class="hours">{item.hours} hrs</p>

        <!-- de vacancies zijn met id aan de agencies gekoppeld. Dit op een of andere manier aan elkaar koppelen  -->
        <!-- <p class="agency">{item.agency_id}</p> -->
        {#if item.expertise}
          <p class="expertise">{item.expertise}</p>
        {/if}
        <a href="/#">VIEW HERE</a>
      </article>
    {/each}
  {/if}
</div>

<style>
  article {
    height: clamp(150px, 100%, 500px);
    min-height: 150px;
    display: grid;
    align-items: center;
    padding: 1rem 0.5rem;
    margin: 1rem 0;
    border-top: 1px solid var(--black);
  }

  article:last-of-type {
    border-bottom: 1px solid var(--black);
  }

  article p,
  a {
    text-transform: uppercase;
  }

  .title {
    font-weight: 400;
  }

  p {
    font-family: var(--martian-mono);
    text-transform: capitalize;
  }

  a {
    color: var(--blue);
    text-decoration: none;
    margin-top: 0.5rem;
    text-wrap: nowrap;
  }

  a:hover {
    text-decoration: underline;
  }

  /* className="vacancies" styling */

  .vacancies article {
    grid-template-columns: repeat(3, 1fr);
  }

  .vacancies .title {
    grid-column: span 3;
  }

  .vacancies .hours {
    grid-column: 3;
    justify-self: end;
  }

  .vacancies p:first-of-type {
    justify-self: start;
  }

  .vacancies p {
    justify-self: end;
  }

  .vacancies .expertise {
    grid-column: 1;
    grid-row: 3;
    justify-self: start;
    font-size: smaller;
    border: 1px solid var(--black);
    padding: 0 0.25rem;
  }

  .vacancies a {
    grid-column: 3;
    grid-row: 3;
    justify-self: flex-end;
  }

  /* animation */

  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      @keyframes animate-in {
        entry 0% {
          opacity: 0;
          transform: translateY(100%);
        }
        entry 100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes animate-out {
        exit 0% {
          opacity: 1;
          transform: translateY(0);
        }
        exit 100% {
          opacity: 0;
          transform: translateY(-100%);
        }
      }

      article {
        animation: animate-in linear forwards, animate-out linear forwards;
        animation-timeline: view();
        animation-range: entry, exit;
      }
    }
  }
</style>

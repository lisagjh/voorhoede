<script>
  export let data = []; // The main data array
  export let className = ""; // CSS class for styling
  export let extraFields = []; // Array of extra fields to display
</script>

<div class={className}>
  {#if data.length === 0}
    <p>Sorry, something went wrong.</p>
  {:else}
    {#each data as item}
      <article>
        <h3 class="title">{item.title}</h3>

        <!-- Render extra fields dynamically -->
        {#each extraFields as field}
          {#if item[field.key]}
            <p>{item[field.key]}</p>
          {/if}
        {/each}

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

  .vacancies p:first-of-type {
    justify-self: start;
  }

  .vacancies p {
    justify-self: end;
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
        animation:
          animate-in linear forwards,
          animate-out linear forwards;
        animation-timeline: view();
        animation-range: entry, exit;
      }
    }
  }
</style>

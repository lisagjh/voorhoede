<script>
  let { data = [], className = "", extraFields = [], anchorText } = $props();
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

        <a href="/#">{anchorText}</a>
      </article>
    {/each}
  {/if}
</div>

<style>
  article {
    height: clamp(150px, 100%, 500px);
    min-height: 170px;
    width: 100%;
    max-width: 100vw;
    display: grid;

    padding: 1rem 0.5rem;
    margin: 1.5rem 0;
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
    width: 100%;
    text-wrap: nowrap;
    justify-self: self-end;
    text-align: right;
    margin-top: 0.5rem;

    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* className="vacancies" styling */

  .vacancies article {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .vacancies .title {
    width: 100%;
  }

  .vacancies p:first-of-type {
    justify-self: start;
  }

  .vacancies p::after {
    content: "/";
    margin: 0 1rem;
  }

  .vacancies p:last-of-type::after {
    content: "";
  }

  .vacancies p {
    justify-self: end;
    align-self: center;
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

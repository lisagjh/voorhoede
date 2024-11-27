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

        {#each extraFields as field}
        {#if item[field.key]}
          {#if field.key === "hours"}
            <p>{item[field.key]} uur</p>
          {:else}
            <p>{item[field.key]}</p>
          {/if}
        {/if}
      {/each}

        <a href="/#">{anchorText}</a>
      </article>
    {/each}
  {/if}
</div>

<style>
  div {
    display: grid;
    place-items: center;
  }

  article {
    height: clamp(150px, 100%, 500px);
    max-width: 100vw;
    display: grid;
    place-items: center;
    padding: 1.25rem 0.5rem;
    margin: 1.25rem 0;
    border-top: 1px solid var(--black);
    transition: .25s ease-in-out;
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

  /* query */

  @media (width > 50rem) {
    div {
      grid-template-columns: repeat(auto-fill, minmax(250px, 50%));
      column-gap: 0;
    }

    article {
      border-bottom: 1px solid black;
      border-top: 0px solid black;
      padding: 1.25rem 1.5rem;
      word-break: break-word;
      width: 100%;
    }

    article:nth-of-type(2n + 1) {
      border-right: 1px solid var(--black);
    }

    article:nth-of-type(1),
    article:nth-of-type(2) {
      border-top: 1px solid var(--black);
    }
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

<script>
  // turn data into props
  let { data, clickable } = $props();

  const endFirstRow = Math.ceil(data.length / 2);

  const firstRow = data.slice(0, endFirstRow);

  const secondRow = data.slice(endFirstRow);
</script>

<!-- snippet for picture element -->
{#snippet picture(item)}
  <picture>
    <source
      srcset="https://fdnd-agency.directus.app/assets/{item.logo}format=avif"
      type="image/avif"
    />
    <source
      srcset="https://fdnd-agency.directus.app/assets/{item.logo}?format=webp"
      type="image/webp"
    />
    <img
      src="https://fdnd-agency.directus.app/assets/{item.logo}"
      alt={item.title}
      height="150"
    />
  </picture>
{/snippet}

<!-- clickable version -->
<div class="rows">
  {#if clickable}
    <ul class="row">
      {#each firstRow as item}
        <a href="/members">
          <li>
            {@render picture(item)}
          </li>
        </a>
      {/each}
    </ul>

    <ul class="row-reverse">
      {#each secondRow as item}
        <a href="/members">
          <li>
            {@render picture(item)}
          </li>
        </a>
      {/each}
    </ul>
  {:else}
    <ul class="row">
      {#each firstRow as item}
        <li>
          {@render picture(item)}
        </li>
      {/each}
    </ul>

    <ul class="row-reverse">
      {#each secondRow as item}
        <li>
          {@render picture(item)}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .rows {
    background-color: black;
    width: 100%;
    align-self: center;
    height: fit-content;
    overflow: hidden;
    margin-bottom: 3rem;
  }

  .row,
  .row-reverse {
    list-style: "";
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: fit-content;
    white-space: nowrap;
  }

  .row-reverse {
    animation-direction: reverse;
  }

  .row:hover,
  .row-reverse:hover {
    animation-play-state: paused;
  }

  picture,
  img {
    align-items: center;
    border-radius: .25rem;
  }

  .row, .row-reverse, img {
    margin: .5rem .75rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .row {
      animation: loop 30s linear infinite;
    }

    .row-reverse {
      animation: loop 30s linear infinite reverse;
    }

    @keyframes loop {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    @supports (animation-timeline: view()) {
      /* .row {
        animation: adjust-position linear forwards;
        animation-timeline: scroll(root block);
      }
      .row-reverse {
        animation: adjust-position linear forwards;
        animation-timeline: scroll(root block);
      } */

      @keyframes adjust-position {
        from {
          transform: translateX(calc(-100% + 100vh));
        }
        to {
          transform: translateX(calc(100% - 100vh));
        }
      }
    }
  }
</style>

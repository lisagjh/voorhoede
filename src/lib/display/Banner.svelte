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
      alt="Logo van {item.title}"
      height="150"
    />
  </picture>
{/snippet}

<div class="rows">
  <!-- if clickable = true, use this version with the anchor element -->
  {#if clickable}
    <ul class="row">
      {#each firstRow as item}
        <!--TODO: when detail page for members is added, make this refer to the matching member's page.  -->
        <li>
          <a href="/members">
            {@render picture(item)}
          </a>
        </li>
      {/each}
    </ul>

    <ul class="row-reverse">
      {#each secondRow as item}
        <li>
          <a href="/members">
            {@render picture(item)}
          </a>
        </li>
      {/each}
    </ul>

    <!-- if clickable = false, use this versoon without the anchor element -->
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

  picture,
  img {
    align-items: center;
    border-radius: 0.25rem;
  }

  .row,
  .row-reverse,
  img {
    margin: 0.5rem 0.75rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .row {
      animation: loop 30s linear infinite;
    }

    .row-reverse {
      animation: loop 30s linear infinite reverse;
      animation-direction: reverse;
    }

    .row:hover,
    .row-reverse:hover {
      animation-play-state: paused;
    }

    @keyframes loop {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  }
</style>

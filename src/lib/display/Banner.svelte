<script>
  // turn data into props
  let { data } = $props();

  const endFirstRow = Math.ceil(data.length / 2);

  const firstRow = data.slice(0, endFirstRow);

  const secondRow = data.slice(endFirstRow)

</script>

<div class="rows">
  <div class="row">
    <!-- data is received in the +page.svelte using data={data.agencies}, and agencies is defined in the server js -->
    {#each firstRow as item}
      {#if item.logo}
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
            alt="{item.title}"
            height="150"
          />
        </picture>
      {/if}
    {/each}
  </div>

  <div class="row-reverse">
    {#each secondRow as item}
      {#if item.logo}
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
            alt="{item.title}"
            height="150"
          />
        </picture>
      {/if}
    {/each}
  </div>
</div>

<style>
  .rows {
    width: 100%;
    align-self: center;
    height: fit-content;
    overflow: hidden;
    padding: 0.25rem;
    margin-bottom: 2rem;
  }

  .row img {
    padding-top: 0.5rem;
  }

  .row,
  .row-reverse {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: fit-content;
    white-space: nowrap;
  }

  .row-reverse {
    animation-direction: reverse;
  }

  picture,
  img {
    background-color: black;
    align-items: center;
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

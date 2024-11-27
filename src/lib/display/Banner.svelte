<script>
  export let data = []; // Expect data from agencies or vacancies
</script>

<div class="rows">
  <div class="row">
    {#each data as item, index}
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
            alt=""
            height="150"
          />
        </picture>
      {/if}
    {/each}
  </div>

  <div class="row-reverse">
    {#each data as item}
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
            alt=""
            height="150"
          />
        </picture>
      {/if}
    {/each}
  </div>
</div>

<style>
  .rows {

    background-color: black;
    width: 100vw;
    align-self: center;
    height: fit-content;
    overflow: hidden;
    /* background-image: linear-gradient(
      var(--black),
      #262640,
      #323c74,
      #3354ad,
      var(--blue)
    ); */
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

  picture {
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
        animation-timeline: scroll(root block);
      }
      .row-reverse {
        animation-timeline: scroll(root block);
      } */

      /* @keyframes adjust-position {
        from {
          transform: translateX(calc(-100% + 100vh));
        }
        to {
          transform: translateX(calc(100% - 100vh));
        } 
    }
        */
    }
  }
</style>

<script>
  let data = $props();
</script>

<div class="rows">
  <div class="row">
    {#each data as item}
      <img src={item} alt="" />
    {/each}
  </div>
  <div class="row-reverse">
    {#each data as item}
      <img src={item} alt="" />
    {/each}
  </div>
</div>

<style>
  /* Three column layout */
  .rows {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    overflow-y: hidden;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .row-reverse {
    transform: translateY(calc(-100% + 100vh));
    flex-direction: row-reverse;
  }

  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      .row-reverse {
        animation: adjust-position linear forwards;
        animation-timeline: scroll(root block);
      }

      @keyframes adjust-position {
        from {
          transform: translateY(calc(-100% + 100vh));
        }
        to {
          transform: translateY(calc(100% - 100vh));
        }
      }
    }
  }
</style>

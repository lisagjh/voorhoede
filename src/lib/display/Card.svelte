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
        <h3>{item.title}</h3>
        <p>{item.locatie}</p>
        <p>{item.company}</p>
        <p>{item.hours}</p>
        <p>{item.agency_id}</p>
      </article>
    {/each}
  {/if}
</div>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
</style>

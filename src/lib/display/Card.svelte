<script>
  let { className, data = [] } = $props();

  console.log("Card received data:", data.length);
</script>

<div class={className}>
  {#if data.length === 0}
    <p>Sorry, something went wrong.</p>
  {:else}
    <ul>
      {#each data as item}
        <li>
          {item.title}
        </li>
      {/each}
    </ul>
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

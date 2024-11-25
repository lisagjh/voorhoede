<script>
  let { className, data = [] } = $props();

  console.log("Card received data:", data); // Log data in Card to verify
</script>

<div class={className}>
  {#if data.length === 0}
    <p>A problem has occurred.</p>
  {:else}
    <ul>
      {#each data as item}
        <!-- Assuming each item has a unique 'id' -->
        <li>{item.title}</li>
        <!-- You can adjust this depending on your data structure -->
      {/each}
    </ul>
  {/if}
</div>

<style>
  /* Default styles here */
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
</style>

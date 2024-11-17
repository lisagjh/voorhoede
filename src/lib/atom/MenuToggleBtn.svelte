<script>
  export let isOpen = false; // Determines the state of the menu (open/closed)
  export let toggle; // Passed function to toggle the menu
</script>

<button on:click={toggle}>
  {#if isOpen}
    Close
  {:else}
    Menu
  {/if}
</button>

<style>
  button {
    text-transform: uppercase;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

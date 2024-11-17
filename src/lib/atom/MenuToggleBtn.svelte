<script>
  export let isOpen = false; // Determines the state of the menu (open/closed)
  export let toggle; // Passed function to toggle the menu
</script>

<button on:click={toggle}>
  {#if isOpen}
    <span>Close</span>
  {:else}
    <span>Menu</span>
  {/if}
</button>

<style>
  button {
    font-family: var(--martian-mono);
    text-transform: uppercase;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: var(--white);
  }

  span {
    transition: 0.25s ease-in-out;
  }

  span:first-of-type {
    animation: close 0.35s ease-in-out 0s;
  }

  @keyframes close {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  span:last-of-type {
    animation: menu 0.35s ease-in-out 0s;
  }


  @keyframes menu {
    from {
      scale: 0.5;
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      scale: 1;
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

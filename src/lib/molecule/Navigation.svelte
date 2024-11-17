<script>
  import NavItem from "$lib/atom/NavItem.svelte";
  import MenuToggleBtn from "$lib/atom/MenuToggleBtn.svelte";

  let isOpen = false; // standard state

  function toggle() {
    console.log("Clicked");
    isOpen = !isOpen;
  }
</script>

<div class="navigation">
  <MenuToggleBtn {isOpen} {toggle} />
  <nav class:is-open={isOpen}>
    <ul>
      <NavItem />
    </ul>
  </nav>
</div>

<style>
  .navigation {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  nav {
    transition:
      transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    transform: translateY(-100%); /* Start off-screen */
    opacity: 0; /* Start invisible */
  }

  nav.is-open {
    transform: translateY(0); /* Slide into view */
    opacity: 1; /* Fully visible */
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

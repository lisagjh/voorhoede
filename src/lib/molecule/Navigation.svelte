<script>
  import NavItem from "$lib/atom/NavItem.svelte";
  import MenuToggleBtn from "$lib/atom/MenuToggleBtn.svelte";

  let isOpen = false; // standard state

  function toggle() {
    console.log("Clicked");
    isOpen = !isOpen;
  }
</script>

<MenuToggleBtn {isOpen} {toggle} />
<nav class:is-open={isOpen}>
  <ul>
    <NavItem />
  </ul>
</nav>

<div class:is-open={isOpen}></div>

<style>
  nav {
    background-color: var(--white);
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 50%;
    z-index: 1;
    backdrop-filter: drop-shadow(4px 4px 10px black);

    transition:
      transform 0.3s ease-out,
      opacity 0.3s ease-in-out;
    transform: translateX(100%); /* Start off-screen */
    opacity: 0; /* Start invisible */
  }

  nav.is-open {
    transform: translateY(0); /* Slide into view */
    opacity: 1; /* Fully visible */
    backdrop-filter: drop-shadow(40px 40px 100px black);
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(5%);
    clip-path: circle(50% at 50% 50%);
    transition: all 0.2s ease-in-out;
  }

  div.is-open {
    background-color: black;
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
    transform: translateX(0);
    clip-path: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    margin-top: 5rem;
    padding: 0;
  }
</style>

<script>
  import { page } from "$app/stores";

  let { title, href, badge, action } = $props();

  // in order to add an active state to the navItem, u need to know what the url path is.
  let path = $page.url.pathname;
  let currentPath = $page.url.pathname; // Update path reactively
  console.log(path);
</script>

<a {href} use:action class:active={currentPath == page.ref}>
  {title}
  {#if badge}
    <span>{badge}</span>
  {/if}
</a>

<style>
  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    color: var(--black);
    text-decoration: none;
    transition: 0.15s ease-in-out;
  }

  a:hover {
    color: var(--blue);
    font-weight: bolder;
    text-decoration: underline;
  }

  span {
    display: inline-block;
    background-color: var(--blue);
    color: var(--white);
  }

  .active {
    background-color: red;
  }
</style>

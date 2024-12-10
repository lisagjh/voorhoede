<script>
  import { page } from "$app/stores";

  let { title, href, badge, action } = $props();

  let isActive = $derived($page.url.pathname === href);
</script>

<a {href} class:active={isActive}>
  {title}
  {#if badge}
    <span>{badge}</span>
  {/if}
</a>

<style>
  .active {
    color: var(--blue);
  }

  .active::before {
    /* content: url(/line.svg); */
    content: "";
    position: absolute;
    height: 1rem;
    width: 0.4rem;
    vertical-align: bottom;
    translate: -.5rem 0;
    border-radius: .1rem;
    background-color: var(--blue);
    view-transition-name: active-link;
  }

  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    color: var(--black);
    text-decoration: none;
    transition: 0.15s ease-in-out;
    view-transition-name: none;
  }

  a:hover {
    color: var(--blue);
    font-weight: bolder;
    text-decoration: underline;
  }

  span {
    display: inline-block;
    min-width: 1.2rem;
    padding: 0.1rem;
    color: var(--white);
    background-color: var(--blue);
  }
</style>

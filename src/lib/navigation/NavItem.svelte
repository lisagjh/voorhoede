<script>
  import { page } from "$app/stores";

  let { title, href, badge, onNavigate } = $props();

  let isActive = $derived($page.url.pathname === href);
</script>

<a {href} 
  class:active={isActive} 
  onclick={onNavigate}
  >
    {title}
    {#if badge}
      <span>{badge}</span>
    {/if}
</a>

<style>
  .active {
    color: var(--blue);
    transition: 0.25s ease-in-out;
  }

  .active::before {
    content: "";
    position: absolute;
    height: 1.2rem;
    width: 0.4rem;
    vertical-align: bottom;
    translate: -0.5rem 0;
    border-radius: 0.1rem;
    background-color: var(--blue);
    view-transition-name: active-link;
  }

  ::view-transition-old(active-link),
  ::view-transition-new(active-link) {
    animation: move 0.45s both cubic-bezier(0.5, -0.84, 0.53, 1.57);
  }

  @keyframes move {
    from {
      scale: 0.6;
    }
    to {
      scale: 1;
    }
  }

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
    font-family: var(--martian-mono);
    vertical-align: middle;
    display: inline-block;
    min-width: 1.2rem;
    padding: 0.1rem;
    color: var(--white);
    background-color: var(--blue);
  }
</style>

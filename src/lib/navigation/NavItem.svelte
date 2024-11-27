<script>
  let { title, href, badge, action } = $props();
</script>

<a {href}>
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
</style>

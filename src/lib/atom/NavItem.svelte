<script>
  let {title, href, badge} = $props();
</script>

<a {href}>
  {title}
  {#if badge}
    <span>{badge}</span>
  {/if}
</a>

<style>
  span {
    display: inline-block;
    background-color: var(--blue);
    color: var(--white);
  }
</style>

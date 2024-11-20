<script>
  export let title, href, badge;
</script>

<a href={href}>
  {title}
  {#if badge}
    <span>{badge}</span>
  {/if}
</a>

<style>
  span {
    background-color: var(--blue);
    color: var(--white);
  }
</style>

<script>
  export let title, href, badge;
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
    border: 3px solid red;
    background-color: var(--blue);
    color: var(--white);
  }
</style>

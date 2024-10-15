<script>
  // add class props here if needed so we can style each text element differently
  import Link from "$lib/Link.svelte";
  export let title,
    subtitle,
    displayHomeLink = true;
</script>

<section class="intro-section">
  {#if displayHomeLink}
    <Link href="/" clazz="back-to-home">
      <svg
        slot="svg-icon-left"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 12H18M6 12L11 7M6 12L11 17"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span slot="link-text">TERUG NAAR HOME</span>
    </Link>
  {/if}

  <h1>{title}</h1>
  <p><slot name="subtitle">{subtitle}</slot></p>
</section>

<!--More text elements if needed-->

<style>
  .intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.75em;
    margin: 10% 15% 10% 15%;
  }
</style>

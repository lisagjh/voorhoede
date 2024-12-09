<script>
  import { page } from '$app/stores'; // Import the $page store to get current route
  import Link from "$lib/Link.svelte";
  
  export let title,
    subtitle,
    displayHomeLink = true;

  // Check if current page is the homepage
  $: isHomePage = $page.url.pathname === '/';
</script>

<section class="intro-section">
  {#if displayHomeLink && !isHomePage} <!-- Only show if not on the homepage -->
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

  <h1 aria-label="{title}">{title}</h1>
  <p aria-label="{title}"><slot name="subtitle">{subtitle}</slot></p>
</section>

<style>
  .intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.75em;
    margin: 7.5% 0 15% 0;
  }

  @media (min-width: 842px ){
      .intro-section {
        margin: 7.5% 20% 5% 20%;
      }
  }

  @media (min-width: 1332px ){
      .intro-section {
        margin: 7.5% 25% 5% 25%;
      }
  }
</style>

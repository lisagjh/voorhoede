<script>
  import { page } from "$app/stores"; // Import the $page store to get current route
  import Link from "$lib/Link.svelte";

  export let title,
    subtitle,
    displayHomeLink = true;

  // Check if current page is the homepage
  $: isHomePage = $page.url.pathname === "/";
</script>

<section class="intro-section">
  {#if displayHomeLink && !isHomePage}
    <!-- Only show if not on the homepage -->
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

  <div>
    <h1>{title}</h1>
    <p><slot name="subtitle">{subtitle}</slot></p>
  </div>
</section>

<style>
  .intro-section {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }

  h1 {
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -1.5px;
    margin-top: 1.75rem;
  }

  p {
    margin-top: -1rem;
    margin-left: 0.25rem;
    text-transform: uppercase;
    max-width: 55ch;
  }

  @media (width > 1000px) {
    h1 {
      font-size: 8rem;
    }

    p {
      margin-top: 0;
      margin-left: 0.5rem;
      max-width: 75ch;
    }
  }

  @media (width > 1200px) {
    h1 {
      font-size: 9rem;
      letter-spacing: -0.5px;
      line-height: 0.8;
    }
  }
</style>

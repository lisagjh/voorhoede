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

 <div>
    <h1>{title}</h1>
    <p><slot name="subtitle">{subtitle}</slot></p>
 </div>
</section>

<style>
  .intro-section {
    display: flex;
    flex-direction: column;
    height: 85vh;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: -1.5px;
    margin-top: 1.75rem;
  }

   /* h1 {
    text-transform: uppercase;
    position: sticky;
    top: 2.5rem;
    anchor-name: --base;
    margin-top: 1rem;
  }

  p {
    position: absolute;
    position-anchor: --base;
    top: anchor(--base bottom);
    max-width: 55ch;
    margin-bottom: 1rem;
  } */

  p {
    margin-top: -1.25rem;
    text-transform: uppercase;
    max-width: 55ch;
  }

  @media (width > 1000px) {
    h1 {
      font-size: 12rem;
      line-height: 9.2rem;
    }
    p {
      line-height: 1.1rem;
    }
  }

  /* @media (min-width: 842px ){
      .intro-section {
        margin: 7.5% 20% 5% 20%;
      }
  }

  @media (min-width: 1332px ){
      .intro-section {
        margin: 7.5% 25% 5% 25%;
      }
  } */
</style>

<script>
  import { page } from '$app/stores'; // Import the $page store to get current route
  import Button from '$lib/input/Button.svelte';
  
  export let title,
    subtitle;
  //   displayHomeLink = true;

  // Check if current page is the homepage
  // $: isHomePage = $page.url.pathname === '/';
</script>

<section class="intro-section">

  <h1>{title}</h1>
  <p><slot name="subtitle">{subtitle}</slot></p>
</section>

<style>
  .intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.75em;
    padding: 2rem;
    margin: 3rem 0 3rem 0;
  }

  @media (min-width: 1332px ){
      .intro-section {
        margin: 7.5% 25% 5% 25%;
      }
  }
</style>

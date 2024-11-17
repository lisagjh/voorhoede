<script>

  import Navigation from "$lib/molecule/Navigation.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<Navigation /> 

<main>
  <slot></slot>
</main>

<Footer />

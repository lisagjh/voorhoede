<script>
  import Header from "../lib/organism/Header.svelte";
  import Footer from "$lib/footer.svelte";
</script>

<Header />

<main>
  <slot></slot>
</main>

<Footer />

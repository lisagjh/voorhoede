<script>
    import { page } from '$app/stores'
    console.log($page.status)
</script>
<section>
    <h1>Er gaat iets mis zie onderstaande error?</h1>
    <p>{$page.status} - {$page.error.message}</p>

    <p><a href="/">
        ga terug naar home
    </a>  </p>
</section>


<style>
    section{
        padding: 2rem;
    }
</style>
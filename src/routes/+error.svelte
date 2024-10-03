<script>
    import { page } from '$app/stores'
    console.log($page.status)
</script>
<section>
    <h1>Er gaat iets mis zie onderstaande error?</h1>
    <p>{$page.status} - {$page.error.message}
    </p>
    <a href="/">
        Ga terug naar home
    </a>


</section>


<style>


    section{
        padding: 2rem;

    }
    p{
        margin-bottom: 2rem;
    }
    a{
        background-color: var(--blue);
        text-decoration: none;
        padding: 1rem;
        color: var(--white);
    }
</style>
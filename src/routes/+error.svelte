<script>
    import { page } from '$app/stores'
    console.log($page.status)
</script>
<h1>Er gaat iets mis zie onderstaande error?</h1>
<p>{$page.status} - {$page.error.message}</p>

<style>
    
</style>
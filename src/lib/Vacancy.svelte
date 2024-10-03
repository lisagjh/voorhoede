<script>
    
    import Link from "$lib/Link.svelte";

</script>

<article>
    <slot name="job-title" class=""/>
    <slot name="language" class=""/>
    <slot name="company" class=""/>
    <slot name="city" class=""/>
    <slot name="link" class=""/>
</article>

<style>

article {
    display: flex;
    flex-wrap: wrap;
    margin: 1em;
}

</style>
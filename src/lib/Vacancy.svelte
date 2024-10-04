<script>
    
    import Link from "$lib/Link.svelte";

</script>

<article>
    <slot name="job-title"/>
    <slot name="language"/>
    <slot name="company"/>
    <slot name="workweek-indication"/>
    <slot name="city" class="city"/>
    <slot name="link" class="link"/>
</article>

<style>

article {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    grid-template-rows: auto auto auto auto; /* Three rows */
    gap: 2em 0; /* Adds spacing between the elements */
    align-items: center;
    margin-bottom: 15%;
}

@media (min-width: 620px){
    article {
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 5%;
        
    }

}

@media (min-width: 820px){
    article {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}


</style>
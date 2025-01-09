<script>

let {tag= "button", variant, label, href, svgIcon, action = $bindable()} = $props();

</script>

<svelte:element
    this={tag}
    class={variant}
    role={tag === "a" ? "link" : "button"}
    href={tag === "a" ? href : undefined}
    bind:this={action}
>   
    {#if label !== ""}
        {label}
    {/if}

    {#if svgIcon}
        {@render svgIcon()}
    {/if}
</svelte:element>

<style>

button {
    background-color: inherit;
    border: inherit;
    text-decoration: none;
    padding: 1em;
    display: flex;
    gap: 1em;
}

.default {
    color: var(--black);
}

.default:hover {
    color: var(--blue);
}

.outline {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 1em;
    gap: .5em;
    transition: .35s;
}

.outline:hover {
    border: 1px solid var(--blue);
}

/* More variants can be created if neccesarry */ 

</style>


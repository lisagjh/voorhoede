<script>
    //In +pave.svelte kun je de link dus aanpassen dit is een soort property
    export let href="";
    export let clazz="";
</script>


<a href={href} class={clazz}>

    <slot name="svg-icon-left"/>

    <slot name="link-text">
        <!--Fallback-->
        <span>Link</span>
    </slot>

    <slot name="svg-icon-right"/>

</a>

<style>

    a {
        display: flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
        font-size: .75em;
        text-transform: uppercase;
        gap: .45em; /* incase someone forgets to type in uppercase */
    }

    /* Different link styles for each page ? */ 

    .detail-link {
        font-weight: bold;
        color: var(--blue);
        stroke:var(--blue); /* blue color for svg */
    }

    .login-link{
        color: var(--blue);
        stroke:var(--blue);
    }

</style>
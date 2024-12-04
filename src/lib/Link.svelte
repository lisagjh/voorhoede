<script>
    //In +pave.svelte kun je de link dus aanpassen dit is een soort property
    export let href="";
    // Dit is uiteindelijk de class die word meegegeven via de +page.svelte component
    // de naam class word niet toegestaan in svelte.kit dus heb voor clazz gekozen, dit zou ik ook anders kunnnen noemen
    // als het onduidelijk is.
    export let clazz="";
</script>


<a href={href} class={clazz}>
    <!--Bij sommmige links staat het icoon/svg aan de linker kant deze kun je dan aanroepen met slot="svg-icon-left" 
    in het component-->
    <slot name="svg-icon-left"/>

    <slot name="link-text">
        link
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
        text-transform: uppercase; /* incase someone forgets to type in uppercase */
        gap: .45em; 
    }

    .back-to-home{
        font-size: 1em;
    }

    .detail-link {
        font-weight: bold;
        color: var(--black);
        stroke: var(--blue); /* blue color for svg */
    }

    .login-link{
        color: var(--black);
        stroke:var(--black);
    }

</style>
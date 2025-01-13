<script>
    let {
      tag,
      variant,
      label,
      href,
      svgIcon,
      action,
      validTags = ["button", "a"],
    } = $props();
  
    try {
      if (!validTags.includes(tag)) {
        throw new error(`Invalid tag '${tag}'. Use "<button>" or "<a>".`);
      }
      if (tag === "button" && !action) {
        throw new error(
          "A <button> element must have a action or function attached."
        );
      }
      if (tag === "a" && !href) {
        throw new error("A <a> element must have a href provided");
      }
    } catch (e) {
      console.error(e);
    }
  </script>
  
  <svelte:element
    this={tag}
    class={variant}
    role={tag === "a" ? "link" : "button"}
    href={tag === "a" ? href : undefined}
    onclick={tag === "button" ? action : undefined}
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
      flex-direction: column;
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
      gap: 0.5em;
      transition: 0.35s;
    }
  
    .outline:hover {
      border: 1px solid var(--blue);
    }
  
    /* More variants can be created if neccesarry */
  </style>
  

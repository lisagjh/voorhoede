<script>

  let {
      tag,
      className,
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
    class={className}
    href={tag === "a" ? href : undefined}
    onclick={tag === "button" ? action : undefined}
  >
    {#if label !== ""}
      {label}
    {/if}
    <!--TODO Hier moet het pijltje komen-->
  
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
      gap: 1em;
    }
  
    .default {
      color: var(--black);
    }
  
    .default:hover {
      color: var(--blue);
    }

    .index-page-link {
      justify-self: center;
    }

    .index-page-link-view {
      width: 100%;
      text-wrap: nowrap;
      justify-self: self-end;
      text-align: right;
      margin-top: 0.5rem;
      text-decoration: none;
    }

    .index-page-link-view:hover {
      text-decoration: underline;
    }
  
    .outline {
      margin-right: .5em;
    }
    
    @supports(gap: .5em){
      .outline {
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 1em;
        gap: 0.5em;
        transition: 0.35s;
      }
    }
  
    .outline:hover {
      border: 1px solid var(--blue);
    }

    .vacancy-link:hover{
      text-decoration: underline;
    }
  
    /* More variants can be created if neccesarry */

    @media(min-width: 648px){
      .vacancy-link{
        order: 5;
      }

      .Button-Subscribe{
        max-width: fit-content;
      }
    }


    .Button-Subscribe{
      border-left: 1px solid var(--grey);
      border-right: 1px solid var(--grey);
      border-top: 1px solid var(--grey);
      border-bottom: 1px solid var(--grey);
      margin-right: -0.3rem;
      color: var(--black);
      text-decoration: none;
      padding: 10px 10px 10px 10px;
      background-color: transparent;
      margin-top: 2rem;
      display: grid;
      grid-row: 8;
      font-size: 20px;
    }
    .Button-Subscribe *{
      box-sizing: content-box;
    }
    .Button-Subscribe:hover{
      color: var(--blue);
    }

    .Button-Subscribe:focus {
      outline: 2px solid var(--blue);
    }

  </style>
  

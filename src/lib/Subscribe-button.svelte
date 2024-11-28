<div class="">
    <button  type="submit" class="button">SCHRIJF MIJ IN <svg aria-label="pijltje ga naar schrijf me in"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
>
    <path
            d="M8 3L13.0001 8.0001L8 13.0002"
            stroke="#222226"
            stroke-width="1.5"
            stroke-miterlimit="4.62023"
    />
    <path
            d="M3 8L13 8"
            stroke="#222226"
            stroke-width="1.5"
            stroke-miterlimit="4.62023"
            stroke-linejoin="round"
    />
</svg>
    </button>
</div>



<style>
    div{
        margin-top: 2rem;
        grid-row: 8;
        font-family: 'Martian Mono';
    }
    .button{
        border-left: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        margin-right: -0.3rem;
        color: var(--black);
        text-decoration: none;
        padding: 0px 0.2rem 0.4rem 0.4rem;
        background-color: transparent;

    }
    .button *{
        box-sizing: content-box;
    }
    .button:hover{
        color: var(--blue);
    }

    button:focus {
        outline: 2px solid var(--blue);
    }
    svg{
        margin-bottom: -0.6rem;
        border-left: 1px solid var(--grey);
        padding: 0.2rem 0.2rem 0.4rem 0.4em;
    }

</style>
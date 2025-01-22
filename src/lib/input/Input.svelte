<script>
    export let type = 'text';
    export let label;
    export let id;
    export let name;

    let value = '';
    export let placeholder = '';
    export let required = true;
    let noStarClass = '';
    if (id === 'Tussenvoegsel') {
        noStarClass = 'no-star';
    }

    let starClass = '';
    if (required === required) {
        starClass = 'star';
    }
    let requiredType = required;

    if (label === 'Tussenvoegsel') {
        requiredType = false;
    }

    let inputType = type;
    if (id === 'email') {
        inputType = 'email';
    }

    else if (id === 'Mobiel')
    {
        inputType = 'number';
    }

    else if (id === 'text')
    {
        inputType = 'text';
    }
</script>

<label class="form-label" for={id}>
    <span class="{noStarClass} {starClass}">{label}</span>
    <input
            aria-required="true"
            id={id}
            name={name}
            type={inputType}
            bind:value
            placeholder={placeholder}
            required={requiredType}
    />
</label>
<style>
    label {
        margin-top: 1.8rem;
        display: grid;
        width: 100%;
        border-bottom: 1.5px solid var(--black);
        gap: 0.8rem;
        font-size: 1em;
    }

    span {
        grid-row: 1;
        grid-column: 1;
        height: 2rem;

    }

    input {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    input {
        border: none;
        height: 2.5rem;
        padding-left: 0.56em;
        font-size: 1em;
    }

    /*code of the star mandatory or not*/
    .star:after {
        content: "*";
        font-size: 2rem;
        color: red;
        padding-left: 0.4rem;

    }

    .no-star:after {
        font-size: 2rem;
        content: "";
    }

    /*ui states*/
    input:focus{
        outline: 2px solid var(--blue);
    }

    /* form focus valid  */
    input[type='text']:user-valid,
    input[type='email']:valid,
    input[type='number']:valid{
        outline: 2px solid green;

    }

    /* form focus invalid */
    input[type='text']:user-invalid,
    input[type='email']:user-invalid,
    input[type='number']:user-invalid
    {
        outline: 2px solid red;
    }
</style>
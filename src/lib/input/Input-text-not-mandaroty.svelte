<script>
    export let label;
    export let id;
    export let name;
    export let type = 'text'; // Default type is 'text'
    export let placeholder = '';
</script>

<label class="form-label" for={id}>
    <span class="no-star">{label}</span>
    <input
            aria-required="false"
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
    />
</label>
<style>


    label {
        margin-top: 1.8rem;
        display: grid;
        width: 100%;
        border-bottom: 1.5px solid var(--black);
        gap: 0.8rem;
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
    }



    .no-star:after {
        font-size: 2rem;

        content: "";
    }


    /*ui states*/
    input:focus {
        outline: 2px solid var(--blue);
    }


    /* form focus valid  */

    input[type='text']:user-valid,
    input[type='email']:valid,
    input[type='number']:valid
    {
        outline: 2px solid green;

    }

    /* form focus invalid */

    input[type='text']:user-invalid,
    input[type='email']:user-invalid,
    input[type='number']:user-invalid
    {
        outline: 2px solid red;
    }


    /*contianer queries */
    form {
        container-type: inline-size;
    }

    @container  (min-width: 600px) {
        fieldset {
            display: grid;
            grid-template-columns: auto auto;
            max-width: 700px;
            gap: 1rem;

        }

        .input-textfield {
            grid-row: 6;
            grid-column-start: 1;
            grid-column-end: 3;
        }

        .dropown {
            grid-row: 7;
        }
    }
</style>
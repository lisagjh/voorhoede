<script>
    export let label;
    export let id;
</script>

<label class="form-label input-textfield" for={id}>
    <span class="star">{label}</span>

    <textarea aria-required="true" cols="5" placeholder="" required
              rows="1"></textarea>
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



    textarea {
        height: auto;
        border: none;
    }

    .star:after {
        content: "*";
        font-size: 2rem;
        color: red;

    }



    /*ui states*/
    textarea:focus {
        outline: 2px solid var(--blue);
    }

    textarea {
        width: 100%; /* Make it full width */
    }

    /* form focus valid  */


    textarea:user-valid{
        outline: 2px solid green;

    }

    /* form focus invalid */


    textarea:user-invalid
    {
        outline: 2px solid red;
    }




    @container  (min-width: 600px) {


        .input-textfield {
            grid-row: 6;
            grid-column-start: 1;
            grid-column-end: 3;
        }

    }
</style>
<label class="form-label input-textfield" for="I want to be member because">
    <span class="star">Ik wil graag lid worden omdat </span>
    <textarea aria-required="true" cols="5" id="Textarea"
              name="Textarea"
              placeholder=""
              required
              rows="1"></textarea>
</label>

<style>

    label {
        margin-top: 1.8rem;
        display: grid;
        width: 100%;
        border-bottom: 1.5px solid var(--black);
        gap: 0.8rem;
        font-size: 18px;
    }

    span {
        grid-row: 1;
        grid-column: 1;
        height: 2rem;

    }

    .star:after {
        content: "*";
        font-size: 2rem;
        color: red;
        padding-left: 0.4rem;

    }
    /*ui states*/
    textarea:focus {
        outline: 2px solid var(--blue);
    }

    textarea {
        width: 100%;
        border: none;
        padding: 5px 0 0 10px;
        font-size: 18px;
        border: none;
        height: 2rem;

    }

    /* form focus invalid */
    textarea:user-invalid
    {
        outline: 2px solid red;
    }

    /* form focus valid  */
    textarea:user-valid{
        outline: 2px solid green;

    }

    @container  (min-width: 600px) {
        .input-textfield {
            grid-row: 6;
            grid-column-start: 1;
            grid-column-end: 3;
        }

    }
</style>
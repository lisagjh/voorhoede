<script>
    import TextButton from '$lib/Subscribe-button.svelte';

    let selectedValue = "";
</script>

<form action="/bedankt">
    <fieldset>
        <legend>persoonlijke gegevens</legend>

        <label class="form-label" for="functie">
            <span class="star"> Functie</span>
            <input aria-required="true"
                   id="functie"
                   name="functie"
                   required type="text"/>
        </label>

        <label class="form-label" for="Voornaam">
            <span class="star">Voornaam</span>
            <input aria-required="true"
                   autocomplete="given-name" id="Voornaam"
                   name="voornaam"
                   required
                   type="text"
            />
        </label>

        <label class="form-label" for="functie">
            <span class="no-star">Tussenvoegsel</span>
            <input aria-required="true"
                   autocomplete="additional-name"
                   id="tussenvoegsel"
                   name="tussenvoegesel"
                   type="text"/>
        </label>

        <label class="form-label" for="Achternaam">
            <span class="star">Achternaam</span>
            <input aria-required="true"
                   autocomplete="family-name"
                   id="Achternaam"
                   name="Achternaam"
                   required type="text"/>
        </label>

        <label class="form-label" for="email">
            <span class="star">E-mail</span>
            <input aria-required="true"
                   autocomplete="email"
                   id="email"

                   name="email"
                   required type="email"/>
        </label>

        <label class="form-label" for="Mobiel">
            <span class="star">Mobiel</span>
            <input aria-required="true"
                   autocomplete="tel"
                   id="Mobiel"
                   name="Mobiel"
                   required
                   type="number"/>
        </label>

        <label class="form-label" for="Bedrijfsnaam">

            <span class="star">Bedrijfsnaam</span>
            <input aria-required="true"
                   id="Bedrijfsnaam"
                   name="Bedrijfsnaam"

                   required type="text"/>
        </label>
        <label class="form-label " for="Bedrijfswebsite">

            <span class="star">Bedrijfswebsite</span>
            <input aria-required="true"
                   id="Bedrijfswebsite"
                   name="Bedrijfswebsite"
                   required type="text"/>
        </label>


        <label class="form-label input-textfield" for="ik-wil-graag-lid-worden-omdat">
            <span class="star">Ik wil graag lid worden omdat </span>
            <textarea aria-required="true" cols="5" id="Textarea"
                      name="Textarea"
                      placeholder=""
                      required
                      rows="1">

</textarea>
        </label>

        <label class="dropown" for="FTE">
            <span class="star">FTE</span>
            <select aria-required="true"
                    bind:value={selectedValue}
                    id="FTE"
                    name="FTE"
                    required>

                <option value="">
                </option>
                <option value="">
                    1-9
                </option>
                <option value="10-24">
                    10-24
                </option>
                <option value="25-49">
                    25-49
                </option>
                <option value="50-99">
                    50-99
                </option>
                <option value="100-249">
                    100-249
                </option>
                <option value="250+">
                    250
                </option>
            </select>

        </label>

        <TextButton/>
    </fieldset>
</form>

<style>

    form {
        color: var(--grey);
    }

    fieldset {
        border: none;
    }

    legend {
        position: absolute;
        top: 0;
        left: -9999px;
    }

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

    input, textarea, select {
        border: none;
    }


    textarea {
        height: auto;
    }

    .star:after {
        content: "*";
        font-size: 2rem;
        color: red;

    }

    .no-star:after {
        font-size: 2rem;

        content: "";
    }

    /*ui states*/
    input:focus, textarea:focus, select:focus, option:focus {
        outline: 2px solid var(--blue);
    }

    textarea {
        width: 100%; /* Make it full width */
    }

    /* form focus valid  */


    input[type='text']:user-valid,
    input[type='email']:valid,
    input[type='number']:valid,
    textarea:user-valid,
    select:user-valid {
        outline: 2px solid green;

    }

    /* form focus invalid */

    input[type='text']:user-invalid,
    input[type='email']:user-invalid,
    input[type='number']:user-invalid,
    textarea:user-invalid,
    select:user-invalid {
        outline: 2px solid red;
    }

    /*contianer queries */
    form {
        container-type: inline-size;
    }

    @container  (max-width: 300px) {
        textarea {
            margin-top: 2rem;
        }
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



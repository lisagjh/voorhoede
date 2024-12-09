<script>
    import TextButton from '$lib/Subscribe-button.svelte';


    import Input from "$lib/input/Input-text.svelte";
    import InputNotMandoraty from "$lib/input/Input-text-not-mandaroty.svelte";
    import InputEmail from "$lib/input/Input-email.svelte";
    import InputMobile from "$lib/input/Input-mobile.svelte";
    import Textareacompoent from "$lib/input/Textarea.svelte";

    // https://svelte.dev/tutorial/svelte/derived-state
    // this value is going to change
    let selectedValue = "";


</script>

<form action="/bedankt" class="form">
    <!--     todo met css steertetje maken befoe en after -->
    <fieldset>
        <legend>persoonlijke gegevens</legend>
        <Input label="Functie" id="Functie" name="Functie" />
        <Input label="Voornaam" id="voornaam" name="voornaam" />
        <InputNotMandoraty label="Tussenvoegsel" id="Tussenvoegsel" name="Tussenvoegsel" />
        <Input label="Achternaam" id="Achternaam" name="Achternaam" />
        <InputEmail label="email" id="email" name="email" />
        <InputMobile label="Mobiel" id="Mobiel" name="Mobiel" />
        <Input label="Bedrijfsnaam" id="Bedrijfsnaam" name="Bedrijfsnaam" />
        <Input label="Bedrijfswebsite" id="Bedrijfswebsite" name="Bedrijfswebsite" />
        <Textareacompoent label="Ik-wil-graag-lid-worden" id="Ik-wil-graag-lid-worden" />
        <label class="dropown" for="FTE">
            <span class="star">  FTE</span>
            <!--todo uitzoeken hoe je een false state kan doen met bind en css -->
            <!--            //     https://svelte.dev/docs/svelte/bind-->
            <select aria-required="true" bind:value={selectedValue}
                    name="FTE"
                    id="FTE"
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



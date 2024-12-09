<script>
    import TextButton from '$lib/Subscribe-button.svelte';

    // input components
    import Input from "$lib/input/Input-text.svelte";
    import InputNotMandoraty from "$lib/input/Input-text-not-mandatory.svelte";
    import InputEmail from "$lib/input/Input-email.svelte";
    import InputMobile from "$lib/input/Input-mobile.svelte";
    import TextArea from "$lib/input/Textarea.svelte";

    // this value is going to change
    let selectedValue = "";

//     todo user-valid moet een javascript functie worden waarin de gebruiker eerst typt en geen feedback krijgt
//     en als er op submit gedrukt word dat er gecheckt moet worden of alles goed is ingevuld en er feebback op gegeven moet worden
</script>

<form action="/bedankt" class="form">
    <fieldset>

        <legend>persoonlijke gegevens</legend>
        <Input id="Functie" label="Functie" name="Functie"/>

        <Input id="voornaam" label="Voornaam" name="voornaam"/>

        <InputNotMandoraty id="Tussenvoegsel" label="Tussenvoegsel" name="Tussenvoegsel"/>

        <Input id="Achternaam" label="Achternaam" name="Achternaam"/>

        <InputEmail id="email" label="email" name="email"/>

        <InputMobile id="Mobiel" label="Mobiel" name="Mobiel"/>

        <Input id="Bedrijfsnaam" label="Bedrijfsnaam" name="Bedrijfsnaam"/>

        <Input id="Bedrijfswebsite" label="Bedrijfswebsite" name="Bedrijfswebsite"/>

        <TextArea id="Ik-wil-graag-lid-worden" label="Ik-wil-graag-lid-worden"/>

        <label class="dropown" for="FTE">
            <span class="star">  FTE</span>
            <select aria-required="true" bind:value={selectedValue}
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


    select {
        border: none;
    }


    .star:after {
        content: "*";
        font-size: 2rem;
        color: red;

    }


    /*ui states*/
    select:focus, option:focus {
        outline: 2px solid var(--blue);
    }


    /* form focus valid  */

    select:user-valid {
        outline: 2px solid green;

    }

    /* form focus invalid */

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

        .dropown {
            grid-row: 7;
        }
    }

</style>



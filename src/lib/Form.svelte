<script>
    import TextButton from '$lib/Subscribe-button.svelte';
    import Input from "$lib/input/Input.svelte";
    import Select from "$lib/input/Select.svelte";
    import Textarea from "$lib/input/Textarea.svelte";
</script>

<form action="/bedankt">
    <fieldset>

        <legend>persoonlijke gegevens</legend>
        <Input label="Functie" id="Functie" name="Functie"/>
        <Input label="Voornaam" id="voornaam" name="voornaam"/>
        <Input label="Tussenvoegsel" id="Tussenvoegsel" name="Tussenvoegsel"/>
        <Input label="Achternaam" id="Achternaam" name="Achternaam"/>
        <Input label="Email" id="email" name="email"/>
        <Input label="Mobiel" id="Mobiel" name="Mobiel"/>
        <Input label="Bedrijfsnaam" id="Bedrijfsnaam" name="Bedrijfsnaam"/>
        <Input label="Bedrijfswebsite" id="Bedrijfswebsite" name="Bedrijfswebsite"/>

        <Select/>
        <Textarea/>
        <TextButton/>
    </fieldset>
</form>

<style>

    form {
        color: var(--grey);
        padding: 2rem;
    }

    fieldset {
        border: none;
    }

    legend {
        position: absolute;
        top: 0;
        left: -9999px;
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
    }

</style>



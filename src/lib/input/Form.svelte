<script>
    import Input from "$lib/input/Input.svelte";
    import Select from "$lib/input/Select.svelte";
    import Textarea from "$lib/input/Textarea.svelte";
    import Button from "$lib/input/Button.svelte";
</script>

<form action="/bedankt">
    <fieldset>

        <legend>persoonlijke gegevens</legend>

        <Input id="Functie" label="Functie" name="Functie"/>
        <Input id="voornaam" label="Voornaam" name="voornaam"/>
        <Input id="Tussenvoegsel" label="Tussenvoegsel" name="Tussenvoegsel"/>
        <Input id="Achternaam" label="Achternaam" name="Achternaam"/>
        <Input id="email" label="Email" name="email"/>
        <Input id="Mobiel" label="Mobiel" name="Mobiel"/>
        <Input id="Bedrijfsnaam" label="Bedrijfsnaam" name="Bedrijfsnaam"/>
        <Input id="Bedrijfswebsite" label="Bedrijfswebsite" name="Bedrijfswebsite"/>

        <Select/>

        <Textarea/>


        <Button
                action={() => {
                console.log("lid worden");
                }}
                className="Button-Subscribe"
                href="/bedankt"
                label="SCHRIJF MIJ IN"
                svgIcon=""
                tag="button"
                type="submit"
        />
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



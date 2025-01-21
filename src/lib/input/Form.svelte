<script>
    import Input from "$lib/input/Input.svelte";
    import Select from "$lib/input/Select.svelte";
    import Textarea from "$lib/input/Textarea.svelte";
    import Button from "$lib/input/Button.svelte";
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
<!--        todo classname add for button of the styling-->
        <div class="button-styling-border">


        <Button
                className="button-test"
                tag="button"
                label="SCHRIJF MIJ IN"
                href="/bedankt"

        />

        <svg aria-label="pijltje ga naar schrijf me in"
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
        </div>

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


    /*button component inschrijven*/

    /*.button-styling-border{*/
    /*    border-left: 1px solid var(--grey);*/
    /*    border-right: 1px solid var(--grey);*/
    /*    border-top: 1px solid var(--grey);*/
    /*    border-bottom: 1px solid var(--grey);*/
    /*    margin-right: -0.3rem;*/
    /*    color: var(--black);*/
    /*    text-decoration: none;*/
    /*    padding: 0px 0.2rem 0.4rem 0.4rem;*/
    /*    background-color: transparent;*/
    /*    margin-top: 2rem;*/
    /*    grid-row: 8;*/
    /*}*/



    .button-test{
        border-left: 1px solid var(--grey);
        border-right: 1px solid var(--grey);
        border-top: 1px solid var(--grey);
        border-bottom: 1px solid var(--grey);
        margin-right: -0.3rem;
        color: var(--black);
        text-decoration: none;
        padding: 0px 0.2rem 0.4rem 0.4rem;
        background-color: transparent;
        margin-top: 2rem;
        display: grid;
        grid-row: 8;
    }
    .button-test *{
        box-sizing: content-box;
    }
    .button-test:hover{
        color: var(--blue);
    }

    button-test:focus {
        outline: 2px solid var(--blue);
    }

    svg{
        /*margin-bottom: -0.6rem;*/
        border-left: 1px solid var(--grey);
        /*padding: 0.2rem 0.2rem 0.4rem 0.4em;*/
    }

</style>



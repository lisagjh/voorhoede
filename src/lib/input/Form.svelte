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

        <!--{#snippet svg(svgIcon)}-->
        <!--    <svg aria-label="pijltje ga naar schrijf me in"-->
        <!--         width="16"-->
        <!--         height="16"-->
        <!--         viewBox="0 0 16 16"-->
        <!--         fill="none"-->
        <!--         xmlns="http://www.w3.org/2000/svg"-->
        <!--    >-->
        <!--        <path-->
        <!--                d="M8 3L13.0001 8.0001L8 13.0002"-->
        <!--                stroke="#222226"-->
        <!--                stroke-width="1.5"-->
        <!--                stroke-miterlimit="4.62023"-->
        <!--        />-->
        <!--        <path-->
        <!--                d="M3 8L13 8"-->
        <!--                stroke="#222226"-->
        <!--                stroke-width="1.5"-->
        <!--                stroke-miterlimit="4.62023"-->
        <!--                stroke-linejoin="round"-->
        <!--        />-->
        <!--    </svg>-->
        <!--{/snippet}-->
        <!--{#if svgIcon}-->
        <!--    <svg-->
        <!--            width="16"-->
        <!--            height="16"-->
        <!--            viewBox="0 0 16 16"-->
        <!--            fill="none"-->
        <!--            xmlns="http://www.w3.org/2000/svg"-->
        <!--    >-->
        <!--        <path-->
        <!--                d="M8 3L13.0001 8.0001L8 13.0002"-->
        <!--                stroke="#222226"-->
        <!--                stroke-width="1.5"-->
        <!--                stroke-miterlimit="4.62023"-->
        <!--        />-->
        <!--        <path-->
        <!--                d="M3 8L13 8"-->
        <!--                stroke="#222226"-->
        <!--                stroke-width="1.5"-->
        <!--                stroke-miterlimit="4.62023"-->
        <!--                stroke-linejoin="round"-->
        <!--        />-->
        <!--    </svg>-->
        <!--{/if}-->


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



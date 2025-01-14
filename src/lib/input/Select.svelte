<script>

    let selectedValue = "";

</script>

<label class="dropown" for="FTE">
    <span class="star">  FTE</span>
    <select aria-required="true"
            bind:value={selectedValue}
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
    .star:after {
        content: "*";
        font-size: 2rem;
        color: red;

    }

    /*ui states*/
    select:focus, option:focus {
        outline: 2px solid var(--blue);
    }
    select:user-valid {
        outline: 2px solid green;

    }
    select:user-invalid {
        outline: 2px solid red;
    }
</style>


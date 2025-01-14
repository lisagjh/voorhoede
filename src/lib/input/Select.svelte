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




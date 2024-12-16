<script>
    let { option } = $props()
</script>

<label for="songs">Choose a song:</label>
<!-- load songs into the select -->
<select name="songs">
    <option value="{option}"></option>
</select>

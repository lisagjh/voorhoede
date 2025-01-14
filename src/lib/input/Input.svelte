<script>
    export let type = 'text';
    export let label;
    export let id;
    export let name;

    let value = '';
    export let placeholder = '';
    export let required = true;
    let noStarClass = '';
    if (id === 'Tussenvoegsel') {
        noStarClass = 'no-star';
    }

    let starClass = '';
    if (required === required) {
        starClass = 'star';
    }
    let requiredType = required;
    if (label === 'Tussenvoegsel') {
        requiredType = false;
    }

    let inputType = type;
    if (id === 'email') {
        inputType = 'email';
    } else if (id === 'Mobiel') {
        inputType = 'number';
    } else if (id === 'text') {
        inputType = 'text';
    }
</script>

<label class="form-label" for={id}>
    <span class="{noStarClass} {starClass}">{label}</span>
    <input
            aria-required="true"
            id={id}
            name={name}
            type={inputType}
            bind:value
            placeholder={placeholder}
            required={requiredType}
    />
</label>

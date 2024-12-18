<script>
    export let options = []; // Songs passed from the parent
    let selectedSong = ""; // Track the currently selected song
  
    // Emit the selected song to the parent component
    function handleChange(event) {
      selectedSong = event.target.value;
      // Emit an event with the selected song's name
      dispatch("change", selectedSong);
    }
  
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
  </script>
  
  <label for="songs">Choose a song:</label>
  <select name="songs" bind:value={selectedSong} on:change={handleChange}>
    <!-- Dynamically create options -->
    {#each options as song}
      <option value={song.name}>{song.name}</option>
    {/each}
  </select>
  
  <style>
    label {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
    select {
      font-size: 1rem;
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  </style>
  
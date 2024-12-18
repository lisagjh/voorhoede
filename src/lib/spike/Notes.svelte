<script>
  import { onMount, tick } from "svelte";

  export let notes = []; // Notes array (e.g., [{ note: "C4", time: 0 }, ...])
  export let bpm = 120; // Speed of the song in beats per minute

  let fallingNotes = [];
  let startTime;

  const noteHeight = 40; // Height of the note
  const animationDuration = 2000; // Duration for the note to fall (in ms)

  // Create falling notes
  async function startFallingNotes() {
    startTime = performance.now();

    for (const note of notes) {
      const delay = note.time; // Delay in ms for when the note should appear
      await new Promise((resolve) => setTimeout(resolve, delay));

      // Add a new falling note
      fallingNotes = [
        ...fallingNotes,
        {
          id: crypto.randomUUID(),
          note: note.note,
          time: performance.now(),
        },
      ];

      await tick(); // Ensure the DOM updates before continuing
    }
  }

  // Remove notes when they leave the screen
  function removeNote(id) {
    fallingNotes = fallingNotes.filter((n) => n.id !== id);
  }

  onMount(() => {
    startFallingNotes();
  });

  // Check for user key presses (you can move this logic elsewhere)
  document.addEventListener("keydown", (e) => {
    const pressedKey = e.key.toUpperCase() + "3"; // Match the octave if needed
    const activeNote = fallingNotes.find((note) => note.note === pressedKey);
    if (activeNote) {
      console.log(`Hit note: ${activeNote.note}`);
      removeNote(activeNote.id); // Remove the note when hit
    }
  });

  // Utility function to map note names to positions (e.g., "C4" -> 10%)
  function getNotePosition(note) {
    const keys = [
      "C3",
      "C#3",
      "D3",
      "D#3",
      "E3",
      "F3",
      "F#3",
      "G3",
      "G#3",
      "A3",
      "A#3",
      "B3",
      "C4",
      "C#4",
      "D4",
      "D#4",
      "E4",
      "F4",
      "F#4",
      "G4",
      "G#4",
      "A4",
      "A#4",
      "B4",
    ];
    return (keys.indexOf(note) / keys.length) * 100;
  }
</script>

<div class="falling-notes">
  {#each fallingNotes as note (note.id)}
    <div
      class="note"
      style="
          left: {getNotePosition(note.note)}%;
          animation: fall {animationDuration}ms linear;
        "
      on:animationend={() => removeNote(note.id)}
    ></div>
  {/each}
</div>

<style>
  .falling-notes {
    position: relative;
    height: 15rem;
    width: 600px;
    border: 2px solid red;
    overflow: hidden;
  }

  .note {
    position: absolute;
    width: 5%;
    height: 40px;
    background-color: red;
    transform: translateY(-40px); /* Start offscreen */
  }

  @keyframes fall {
    0% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(100%);
    }
  }
</style>

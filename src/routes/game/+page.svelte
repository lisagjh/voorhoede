<script>
  import { onMount } from "svelte";
  import Select from "../../lib/spike/Select.svelte";
	import Notes from './../../lib/spike/Notes.svelte';

  const songs = [
    {
      name: "Jingle Bells",
      notes: [
        { note: "E4", time: 0 },
        { note: "E4", time: 500 },
        { note: "E4", time: 1000 },
        { note: "G4", time: 1500 },
        { note: "C4", time: 2000 },
      ],
    },
    {
      name: "Twinkle Twinkle",
      notes: [
        { note: "C4", time: 0 },
        { note: "C4", time: 500 },
        { note: "G4", time: 1000 },
        { note: "G4", time: 1500 },
        { note: "A4", time: 2000 },
      ],
    },
  ];

  let selectedSong = null;

  function handleSongChange(event) {
    selectedSong = songs.find((song) => song.name === event.detail);
    console.log("Selected song:", selectedSong);
  }

  let audioContext;

  // give each note a frequency
  const frequencies = {
    C3: 130.81,
    "C#3": 138.59,
    D3: 146.83,
    "D#3": 155.56,
    E3: 164.81,
    F3: 174.61,
    "F#3": 185.0,
    G3: 196.0,
    "G#3": 207.65,
    A3: 220.0,
    "A#3": 233.08,
    B3: 246.94,
    C4: 261.63,
    "C#4": 277.18,
    D4: 293.66,
    "D#4": 311.13,
    E4: 329.63,
    F4: 349.23,
    "F#4": 369.99,
    G4: 392.0,
    "G#4": 415.3,
    A4: 440.0,
    "A#4": 466.16,
    B4: 493.88,
    C5: 523.24,
    "C#5": 554.37,
    D5: 587.33,
    "D#5": 622.25,
    E5: 659.25,
    F5: 698.46,
    "F#5": 739.99,
    G5: 783.99,
    "G#5": 830.61,
    A5: 880.0,
    "A#5": 932.33,
    B5: 987.77,
  };

  // Initialize the AudioContext
  onMount(() => {
    audioContext = new AudioContext();

    // Add event listeners to all keys
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
      key.addEventListener("click", () => {
        const note = key.dataset.note; // Get the note from data attribute
        playNote(note);
      });
    });
  });

  //   Play a note using the Web Audio API
  function playNote(note) {
    if (!audioContext) return;

    const frequency = frequencies[note];

    if (!frequency) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = "sine"; // You can change this to 'square', 'triangle', or 'sawtooth'
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(1.5, audioContext.currentTime); // Volume
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5); // Play note for 0.5 seconds
  }

  async function playSong(songName) {
    const notes = songs[songName];
    for (const note of notes) {
      playNote(note);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Wacht 500ms tussen noten
    }
  }
</script>

<Select options={songs} on:change={handleSongChange} />

{#if selectedSong}
  <h2>Playing: {selectedSong.name}</h2>
  <button on:click={() => startGame(selectedSong)}>Start Game</button>

  <Notes notes={selectedSong.notes} bpm={120} />
{/if}
<div class="wrapper">
  <div class="piano">
    <svg
      width="538"
      height="315"
      viewBox="200 0 538 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        class="f3 white key"
        data-note="F3"
        x="202"
        y="1"
        width="62"
        height="314"
        fill="#EBEBEB"
      />
      <text
        class="note"
        x="222"
        y="290"
        fill="black"
        font-size="14"
        font-family="Arial">F3</text
      >

      <rect
        class="g3 white key"
        data-note="G3"
        x="270"
        y="1"
        width="61"
        height="314"
        fill="#EBEBEB"
      />
      <text
        class="note"
        x="290"
        y="290"
        fill="black"
        font-size="14"
        font-family="Arial">G3</text
      >

      <rect
        class="a3 white key"
        data-note="A3"
        x="337"
        y="1"
        width="61"
        height="314"
        fill="#EBEBEB"
      />
      <text
        class="note"
        x="357"
        y="290"
        fill="black"
        font-size="14"
        font-family="Arial">A3</text
      >

      <rect
        class="b3 white key"
        data-note="B3"
        x="404"
        y="1"
        width="62"
        height="314"
        fill="#EBEBEB"
      />
      <text
        class="note"
        x="424"
        y="290"
        fill="black"
        font-size="14"
        font-family="Arial">B3</text
      >

      <rect
        class="c4 white key"
        data-note="C4"
        x="472"
        y="1"
        width="62"
        height="314"
        fill="#EBEBEB"
      />
      <text
        class="note"
        x="494"
        y="290"
        fill="black"
        font-size="14"
        font-family="Arial">C4</text
      >

      <rect
        class="d4 white key"
        data-note="D4"
        x="540"
        y="1"
        width="61"
        height="314"
        fill="#EBEBEB"
      />
      <text
        class="note"
        x="560"
        y="290"
        fill="black"
        font-size="14"
        font-family="Arial">D4</text
      >

      <rect
        class="e4 white key"
        data-note="E4"
        x="607"
        y="1"
        width="61"
        height="314"
        fill="#EBEBEB"
      />
      <text
        class="note"
        x="627"
        y="290"
        fill="black"
        font-size="14"
        font-family="Arial">E4</text
      >

      <rect
        class="f4 white key"
        data-note="F4"
        x="674"
        y="1"
        width="62"
        height="314"
        fill="#EBEBEB"
      />
      <text
        class="note"
        x="694"
        y="290"
        fill="black"
        font-size="14"
        font-family="Arial">F4</text
      >

      <path
        class="f3-sharp key"
        data-note="F#3"
        d="M245.961 0H288.64V230C288.64 231.105 287.745 232 286.64 232H247.961C246.857 232 245.961 231.105 245.961 230V0Z"
        fill="#121212"
      />
      <text
        class="note"
        x="252"
        y="200"
        fill="white"
        font-size="14"
        font-family="Arial">F#3</text
      >

      <path
        class="g3-sharp key"
        data-note="G#3"
        d="M312.266 0H354.944V230C354.944 231.105 354.049 232 352.944 232H314.266C313.161 232 312.266 231.105 312.266 230V0Z"
        fill="#121212"
      />
      <text
        class="note"
        x="318"
        y="200"
        fill="white"
        font-size="14"
        font-family="Arial">G#3</text
      >

      <path
        class="a3-sharp key"
        data-note="A#3"
        d="M378.57 0H421.249V230C421.249 231.105 420.353 232 419.249 232H380.57C379.466 232 378.57 231.105 378.57 230V0Z"
        fill="#121212"
      />
      <text
        class="note"
        x="388"
        y="200"
        fill="white"
        font-size="14"
        font-family="Arial">A#3</text
      >

      <path
        class="c4-sharp key"
        data-note="C#4"
        d="M515.751 0H558.43V230C558.43 231.105 557.535 232 556.43 232H517.751C516.647 232 515.751 231.105 515.751 230V0Z"
        fill="#121212"
      />
      <text
        class="note"
        x="522"
        y="200"
        fill="white"
        font-size="14"
        font-family="Arial">C#4</text
      >

      <path
        class="d4-sharp key"
        data-note="D#4"
        d="M580.531 0H623.21V230C623.21 231.105 622.315 232 621.21 232H582.531C581.427 232 580.531 231.105 580.531 230V0Z"
        fill="#121212"
      />
      <text
        class="note"
        x="588"
        y="200"
        fill="white"
        font-size="14"
        font-family="Arial">D#4</text
      >
    </svg>
  </div>
</div>

<style>
  .wrapper {
    min-height: 70vh;
    height: 100%;
  }

  .piano {
    background-color: black;
    width: fit-content;
    padding: 2rem;
    border-radius: 5px;
  }

  svg text {
    transform: translateY(6%);
    /* not selectable text */
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  svg path,
  svg rect {
    transition: 0.15s ease-in-out;
    transform-origin: top center;
  }

  svg rect:active {
    fill: #fff;
    transform: scale(0.99) translateX(-2px);
  }

  svg path:active {
    fill: #000;
    transform: scale(0.99) translateX(-2px);
  }
</style>

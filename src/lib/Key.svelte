<script>
export let note;
export let octave;
export let freq;
export let audioContext;
export let mainGainNode;
export let oscList;
export let waveType;

let isPressed = false;

function playTone() {
  const osc = audioContext.createOscillator();
  osc.connect(mainGainNode);

	const type = waveType;

	osc.type = type;

  osc.frequency.value = freq;
  osc.start();

  return osc;
}

function notePressed(event) {
  if (event.buttons & 1) {
    if (!isPressed) {
      const octaveAsNumber = Number(octave);
      oscList[octaveAsNumber][note] = playTone();
      isPressed = true;
    }
  }
}

function noteReleased(event) {
  if (isPressed) {
    const octaveAsNumber = Number(octave);
    oscList[octaveAsNumber][note].stop();
    delete oscList[octaveAsNumber][note];
    isPressed = false;
  }
}
</script>

<button class="key" class:pressed="{isPressed}" on:mousedown={notePressed} on:mouseup={noteReleased} on:mouseover={notePressed} on:mouseleave={noteReleased} on:focus={notePressed}>
	{note}
	<sub>{octave}</sub>
</button>

<style>
	.key {
		background-color: #fff;
		border: 1px solid #ddd;
		color: #000;
		flex-shrink: 0;
		height: 200px;
		margin: .1rem;
		padding: 0;
		text-align: center;
		transition: all .1s ease-in-out;
		user-select: none;
		width: 40px;
	}

	.key:hover,
	.key.pressed {
		background-color: #eee;
	}

	.key:active {
		background-color: #777;
	}
</style>
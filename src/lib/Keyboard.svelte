<script>
	import Key from "./Key.svelte";
	import createNoteTable from "../noteTable";
	import Control from "./Control.svelte";

  const audioContext = new AudioContext();
  const oscList = [{},{},{},{},{},{},{},{},{},{},{},{}];
  const mainGainNode = audioContext.createGain();
	const waveForms = ['square', 'sine', 'sawtooth', 'triangle', 'custom'];
	let gain = 5;
	let selectedWave = waveForms[0];

  const notes = createNoteTable();
	let keyList = [];

	//init gain
  mainGainNode.connect(audioContext.destination);
  mainGainNode.gain.value = gain;

	// create array for making keys from octave table
	notes.forEach((keys, i) => {
		const octaves = Object.entries(keys);
		octaves.forEach((octave, i) => {
			octave.push(i);
			keyList.push(octave);
		});
	});

	function onGainChange(event) {
		mainGainNode.gain.value = Math.round(1000 * Number(event.target.value)) / 1000;
	}

	function onWaveTypeChange(event) {
		selectedWave = event.target.value;
	}
</script>

<section class="keyboard">
	<div class="controls">
		<Control name={'gain'} label={"Gain"} onChange={onGainChange} value={mainGainNode.gain.value} max={10} step={1}></Control>
		<select on:change={onWaveTypeChange}>
			{#each waveForms as waveForm}
				<option value={waveForm}>{waveForm}</option>
			{/each}
		</select>
	</div>
	<div>
		{#each keyList as key, i}
			<Key note={key[0]} octave={key[2]} freq={key[1]} audioContext={audioContext} mainGainNode={mainGainNode} oscList={oscList} waveType={selectedWave}></Key>
		{/each}
	</div>
</section>


<style>
.keyboard {
	display: flex;
	flex-direction: column;
}

.controls {
	display: flex;
}

.controls > * {
	margin-right: 1rem;
}

.controls:last-chlid {
	margin-right: 0;
}
</style>
<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Keyboard from './lib/Keyboard.svelte';
  import createNoteTable from './noteTable';

  let isStarted = false;

</script>

<main>
  {#if isStarted === false}
    <button on:click={() => isStarted = true}>Show me the keyboard!!!</button>
  {/if}
  {#if isStarted === true}
    <Keyboard></Keyboard>
  {/if}
</main>

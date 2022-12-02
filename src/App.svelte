<script>
  import Keyboard from './lib/Keyboard.svelte';

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

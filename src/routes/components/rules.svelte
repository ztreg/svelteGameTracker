<script>
    // your script goes here
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()



    function startGame() {
        dispatch('toggle', {})
    }
</script>

<div>
    <h2>
        <button type="button" on:click={() => startGame()}>Start Game</button>
    </h2>
</div>

<style>
    /* your styles go here */
</style>

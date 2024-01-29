<script lang="ts">
    import { easy, type Difficulty, type DispatchEvent, medium, hard } from '../../lib/services/api';
    import { createEventDispatcher } from 'svelte'
    import '../styles.css';
    const dispatch = createEventDispatcher()
    const levels = [easy, medium, hard]

    let chosenDiff = undefined as Difficulty | undefined
    $: if(chosenDiff) {
        console.log(chosenDiff);
        
    }
    function startGame() {
        dispatch('toggle', chosenDiff )
    }

</script>

<div class="wrapper">
    <div class="diff"> 
        <h2>Game settings</h2>
        {#each levels as level }    
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="level + {level.name} + { chosenDiff?.name === level.name ? 'active' : ''}" on:click={() => chosenDiff = level}>
                <p>{ level.name.toUpperCase() }</p>
                <p>Lives: {level.numberOfErrors} TimeToThink: {level.timeToThink} cards: {level.numberOfCards} * 2</p>

            </div>
        {/each}

    </div>
    <button class="{chosenDiff ? '' : 'disabled'}" disabled={chosenDiff === undefined} type="button" on:click={() => startGame()}>Start Game</button>

</div>

<style>
    .wrapper {
        /* color: var(--color-theme-2); */
        max-width: 500px;
        min-width: 280px;
        margin: 0 10vw;
    }
    h1, h2, h3 {
        color: white;
    }
    .diff {
        justify-content: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .level {
        background-color: black;
        padding: 24px;
        border-radius: 4px;
        cursor: pointer;
    }
    .level:hover {
        background-color: rgba(255, 236, 236, 0.067);
    }
    .active {
        border: 1px solid red;
        background-color: rgba(0, 0, 0, 0.511);
    }
    .easy {
        color: var(--color-theme-2)
    }
    .medium {
        color: var(--color-theme-3)
    }
    .hard {
        color: var(--color-theme-1) 
    }
    button {
        cursor: pointer;
        color: white;
        background: var(--color-theme-2);
        margin-top: 16px;
        padding: 16px;
        width: 100%;
    }
    button.disabled {
        background-color: rgba(255, 236, 236, 0.067);
        cursor: default;
        /* background: var(--color-theme-3); */
    }
</style>

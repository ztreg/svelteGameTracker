<script lang="ts">
	import { gameSettings, lifeRemaining } from "$lib/stores/store";
    console.log(gameSettings);
    
    // your script goes here
</script>

<style>
    .header-settings {
        color: white;
        display: flex;
        justify-content: space-between;
    }
</style>

    <div class="header-settings">
        <h2>Difficulty: {$gameSettings?.name}</h2>
        <h2>Lives remaining: {$lifeRemaining} / {$gameSettings?.numberOfErrors} </h2>
    </div>

<!-- markup (zero or more items) goes here -->
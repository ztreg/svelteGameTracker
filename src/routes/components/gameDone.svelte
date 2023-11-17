<script lang="ts">
    export let gameStatus: string
    // your script goes here
</script>

<style>
    div {
        color: white
    }
    /* your styles go here */
</style>

<div> 
    {#if gameStatus === 'won'}
         <!-- content here -->
         <h1>you won</h1>
    {/if}
    {#if gameStatus === 'lost'}
        <!-- content here -->
        <h1>you lost</h1>
    {/if}
</div>
<!-- markup (zero or more items) goes here -->
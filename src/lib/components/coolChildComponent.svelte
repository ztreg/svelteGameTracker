
<script lang="ts">
    interface Item {
        name: string,
        id: number
    }
    export let item: Item
    
</script>

<style>
    /* your styles go here */
</style>

<main>
    <!-- <button type="button" on:click={toggle}></button> -->
    id: { item.id }
    Name: { item.name }
</main>
<!-- markup (zero or more items) goes here -->
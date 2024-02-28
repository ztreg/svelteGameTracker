<script lang="ts">
	import { page } from "$app/stores";

    // your script goes here
    const pageParams = $page.params?.id

    export let data;
    $: console.log(data)
    
</script>

<style>
    main {
        color: white;
    }
    /* your styles go here */
</style>

<main>
    id: { pageParams }
</main>

<!-- markup (zero or more items) goes here -->
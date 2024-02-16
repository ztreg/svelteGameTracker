<!-- Webpack vs esbuild vs vite vs rollup

------------------------------------------------------
component structure like vue & react -->
<script lang="ts">
	import { writable } from "svelte/store";

    // Local state variable
    let name = "Jonacito"

    // Property from parent
    export let lastName: string;

    // Computed variable
    $: fullname = name + lastName

    // Writeable (observable)
    export const awesomeName = writable(<string>(''))
    
    // Update writable
    export const coolMethodName = () => {
        awesomeName.set('wowAwesomeName')
        setTimeout(() => {
            awesomeName.update((oldName) => oldName + ' WOW')
        }, 2000);
    }

</script>

<main>
   <!-- Hello { name } { lastName } -->
   Hello2 {fullname}
   <br>
   <button type="button" on:click={coolMethodName} >Do something</button>
    <br>
   Hello3 { $awesomeName}
</main>

<style>
    main {
        padding: 40px;
        color: red;
    }
</style>
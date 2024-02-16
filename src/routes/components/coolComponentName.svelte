<!-- Webpack vs esbuild vs rollup vs vite

------------------------------------------------------
component structure like vue & react -->
<script lang="ts">
	import { awesomeName } from "$lib/stores/store";

    // Local state variable
    let name = "Jonacito"

    // Property from parent
    export let lastName: string;

    function changeName() {
        name = "Pelle"
    }

    // Reactive logic
    $: fullname = name +  ' ' + lastName
    $: console.log(name)

    // Writeable (observable)
    // const awesomeName = writable(<string>(''))
    
    // Update writable
    export const coolMethodName = () => {
        awesomeName.set('wowAwesomeName')
        setTimeout(() => {
            awesomeName.update((oldName) => oldName + ' WOW')
        }, 2000);
    }


</script>

<main>
    <div>
        Hello { name } { lastName }
        <br>
        <button type="button" on:click={changeName} >Change Name</button>
        <button type="button" on:click={() => name = "Joooonas"} >Change Name Directly</button>
        <br>
        Hello2 {fullname}
    </div>
    <div>
        <br>
        <button type="button" on:click={coolMethodName} >Change writeable</button>
        <br>
        Hello3 { $awesomeName}
        <br>
    </div>

</main>

<style>
    main {
        padding: 40px;
        color: black;
    }
    div {
            border-bottom: 1px solid black;
    }
</style>
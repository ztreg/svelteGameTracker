<!-- Webpack vs esbuild vs rollup vs vite

------------------------------------------------------
component structure like vue & react -->
<script lang="ts">
	import { myWritable } from "$lib/stores/store";
	import CoolChildComponent from "./coolChildComponent.svelte";

	// import { writable } from "svelte/store";

    // Local state variable
    let name = "Jonacito"
    let svelteGood = false
    let writeablesGood = false
    let reactiveState = false
    let stateGood = false

    // Property from parent
    export let lastName = '123'

    function changeName() {  
        name = "Pelle"
    }

    // Reactive logic
    $: fullName = name +  ' ' + lastName
    $: console.log(name)

    // Writeable (observable)
    // const writeable = writable(<string>('writeable Value'))
    
    $: {
        console.log($myWritable);   
    }  
    
    // // Update writable
    export const coolMethodName = () => {
        myWritable.set('wowAwesomeName')
        setTimeout(() => {
            myWritable.update((oldName) => oldName +    ' WOW')
        }, 2000);
    }

    const items = [
        {id: 1, name: "item 1"},
        {id: 2, name: "item 2"},
        {id: 3, name: "item 3"},
        {id: 4, name: "item 4"},
        {id: 5, name: "item 5"},
    ]


</script>

<main>
    <div>
        <h2>Is state good?</h2>
        <label>
            <input checked={stateGood===true} on:change={() => stateGood = true} type="radio" name="stateGood" value="true" /> Yes
        </label>
        <label>
            <input checked={stateGood===false} on:change={() => stateGood = false} type="radio" name="stateGood" value="false" /> No
        </label>

        {#if stateGood}
            <p>Hello: { name } { lastName }</p>
            <button type="button" on:click={changeName}>Change Name</button>
            <button type="button" on:click={() => name = "Joooonas" } >Change State Directly</button>
            <br>
        {/if}

        
        <h2>Is reactive state good?</h2>
        <label>
            <input checked={reactiveState===true} on:change={() => reactiveState = true} type="radio" name="reactiveState" value="true" /> Yes
        </label>
        <label>
            <input checked={reactiveState===false} on:change={() => reactiveState = false} type="radio" name="reactiveState" value="false" /> No
        </label>
        {#if reactiveState}
            <p>Fullname: {fullName}</p>
        {/if}

        
        
    </div>
    <div>
        <h2>Are writeables good?</h2>
        <label>
            <input checked={writeablesGood===true} on:change={() => writeablesGood = true} type="radio" name="writeablesGood" value="true" /> Yes
        </label>
        <label>
            <input checked={writeablesGood===false} on:change={() => writeablesGood = false} type="radio" name="writeablesGood" value="false" /> No
        </label>
        {#if writeablesGood}
            <br>
            <button type="button" on:click={coolMethodName} >Change writeable</button>
            <br>
            Writable: { $myWritable }
            <br>
        {/if}

    </div>

    <div>
        <h2>Is children good?</h2>
        <label>
            <input checked={svelteGood===true} on:change={() => svelteGood = true} type="radio" name="amount" value="true" /> Yes
        </label>
        <label>
            <input checked={svelteGood===false} on:change={() => svelteGood = false} type="radio" name="amount" value="false" /> No
        </label>
        
        {#if svelteGood}
        <h2>Children</h2>
            {#each items as item}
                 <CoolChildComponent {item} ></CoolChildComponent>
            {/each}
        {/if}

    </div>

</main>

<style>
    main {
        padding: 40px;
        color: black;
        background-color: lightgray;
    }
    div {
            border-bottom: 1px solid black;
    }
    div, button {
        margin-bottom: 8px;
    }
</style>
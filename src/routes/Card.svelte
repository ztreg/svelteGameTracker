<script lang="ts">
	import type { Cat } from "$lib/services/api";
	import { onMount } from "svelte";

    export let cat: Cat
    export let clickedId: string
    export let counter: number
    const src = 'https://cataas.com/cat/' + cat._id + '?position=centre&width=200&height=200'
    
    function clickCard() {
        clickedId = cat._id
    }
    
	onMount(() => {
        counter = counter + 1
    });

</script>
<main>
    {#if src}
        <div class="flip-card" id="{cat._id}">
            <button class="card" on:click={clickCard}>
                <div class="card-image">
                    <img {src} alt="" srcset="">
                </div>    
                <div class="card-image2">
                <img src="src\lib\images\cat-questionmark.jpg" alt="" srcset="">
            </div>   
            </button>
        </div>
    {/if}
</main>

<style>
    main, .card, .card-image, .card-image2 {
        width: 200px;
        height: 200px; 
    }
    button {
        padding: 0;
    }
    img {
          width: 200px;
          height: auto;  
    }
    /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */

.flip-card {
    padding: 0;
    margin: 0;
    background-color: transparent;
    width: 200px;
    height: 200px;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.card {
    border-radius: 4px;
    padding: 0;
  position: relative;
  top: 0;
  width: 200px;
  height: 200px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
/* .card:hover {
  transform: rotateY(180deg);
} */

/* Position the front and back side */
.card-image, .card-image2 {
  position: absolute;
  top: 0;
  width: 200px;
  height: 200px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.card-image {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.card-image2 {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}

</style>

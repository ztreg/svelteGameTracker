<script lang="ts">
	import type { Cat } from "$lib/services/api";
	import { onMount } from "svelte";
  import { lazyLoad } from '../lib/utils/lazyLoad'
	import { gameSettings } from "$lib/stores/store";
    export let cat: Cat
    export let clickedCat: Cat | null
    
    const src = 'https://cataas.com/cat/' + cat._id + '?width=200&height=200'
    // const src = 'https://cataas.com/cat/5w3BlQo4wqJTLDJk%3F/says/hello?font=Impact&fontSize=30&fontColor=%23000&fontBackground=none&position=centre&width=200&height=200'
    function clickCard() {
        clickedCat = cat
    }
    let size = 200
    $: if($gameSettings) {
      switch ($gameSettings.name) {
        case 'easy':
          size = 300
          break;
        case 'medium':
          size = 225
          break;
      
        case 'hard':
          size = 200
          break;
      
        default:
          size = 200
          break;
      }
    }

    onMount(() =>  {
      console.log('yo');
      
    })

</script>
<main style="width: {size}; height: {size}">
    
    {#if src}
        <div style="width: {size}px; height: {size}px" class="flip-card" class:correct={cat.correct === true}>
            <button 
              disabled={cat.correct}
              class="{cat._id} card {cat.uniqueId}" 
              style="width: {size}px; height: {size}px" 
              on:click={clickCard} 
            >
              <div class="card-image" style="width: {size}px; height: {size}px">
                <figure>
                  <img style="width: {size}px; height: {size}px" use:lazyLoad={src} alt="cat" />
                </figure>
      
              </div>    
              <div style="width: {size}px; height: {size}px" class="card-image2">
                  <img style="width: {size}px; height: {size}px" src="src\lib\images\cat-questionmark.jpg" alt="" srcset="">
              </div>   
            </button>
        </div>
    {/if}
</main>

<style>
    main, .card, .card-image, .card-image2 {
        /* width: 200px;
        height: 200px;  */
        cursor: pointer;
    }
    button {
        padding: 0;
    }
    /* img {
          width: 200px;
          height: 200px; 
    } */
    /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */

.flip-card {
    padding: 0;
    margin: 0;
    background-color: transparent;
    /* width: 200px;
    height: 200px; */
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
    animation: 3s slidein;
}

.correct {
  opacity: 0.6;
  border: 5px solid green;
  animation: 1s correctGuess;
  /* border-radius: 4px; */
  /* cursor: default; */
}
/* @keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
} */
@keyframes correctGuess {
  from {
    opacity: 1;
  }

  to {
    opacity: 0.6;
  }
}

/* This container is needed to position the front and back side */
.card {
    border-radius: 4px;
    padding: 0;
  position: relative;
  top: 0;
  /* width: 200px;
  height: 200px; */
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
  /* width: 200px;
  height: 200px; */
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

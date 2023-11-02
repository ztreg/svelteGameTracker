
<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchNmrOfCats, type Cat } from '../lib/services/api';
	import { catsData } from '$lib/stores/store';
	import Card from './Card.svelte';

	let gameStarted = false
	let clickedIds: string[] = []
	let clickedId = ''
	let counter = 0
	let cards: NodeListOf<Element>


	async function startGame() {
		await fetchNmrOfCats(5)
		gameStarted = true
	}

	$: if (clickedId) {
		clickedIds = [...clickedIds, clickedId]
		clickedId = ''
		console.log(clickedIds);
		
	}

	$: if(counter > 0) {
		cards = document.querySelectorAll('.card');
		[...cards].forEach((card)=>{
			card.addEventListener( 'click', function() {
				card.classList.toggle('flip');
			});
		});	
	}
	
	$: if (clickedIds.length === 2) {
		
		clickedIds = []
	}
	
</script>

<svelte:head>
	<title>CatMurry</title>
	<meta name="description" content="CatMurry" />
</svelte:head>

<section>
	{#if !gameStarted}
		<h2>
			<button type="button" on:click={() => startGame()}>Start Game</button>
		</h2>
	{/if}


	<div class="card-wrapper">
		{#if $catsData.length > 0 && gameStarted}
			{#each $catsData as cat}
				<Card bind:counter  bind:clickedId cat="{cat}" />
			{/each}
			{#each $catsData as cat}
				<Card bind:counter bind:clickedId cat="{cat}" />
			{/each}
		{/if}
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		flex: 0.6;
		width: 100%;
	}
	.card-wrapper {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		height: calc(100vh - 200px);
		width: 550px;
		gap: 16px;
		flex-wrap: wrap;
	}
	.flip {
		transform: rotateY(180deg);
		}

</style>

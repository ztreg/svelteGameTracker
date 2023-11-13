
<script lang="ts">
	import { fetchNmrOfCats, type Cat } from '../lib/services/api';
	import { catsData, correctCats } from '$lib/stores/store';
	import Card from './Card.svelte';
	import Rules from './components/rules.svelte';

	let gameStarted = false
	let clickedCats: Cat[] = []
	let clickedCat: Cat | null
	let counter = 0
	let cards: NodeListOf<Element>
	let timeToThink = 1000

	async function startGame(rules: any) {
		console.log(rules);
		
		await fetchNmrOfCats(5)
		gameStarted = true
		setTimeout(() => {
			cards = document.querySelectorAll('.card');
			[...cards].forEach((card)=>{
				setTimeout(() => {
					card.classList.toggle('flip');
				}, timeToThink);

				card.addEventListener( 'click', function() {
					card.classList.toggle('flip');
				});
		
			});	
		}, 1);

	}

	$: if (clickedCat) {
		clickedCats = [...clickedCats, clickedCat]
		clickedCat = null

		cards.forEach(card => {
			// User clicks the same cars twice	
			if (clickedCats.length === 2) {
				if (clickedCats[0].uniqueId === clickedCats[1].uniqueId) {
					console.log('same card, do nothing');
				}
				else if (clickedCats[0]._id !== clickedCats[1]._id) {
					// Guessed wrong, flip back selected cards
					console.log('wrooong');
					if (card.className.includes(clickedCats[0].uniqueId) || card.className.includes(clickedCats[1].uniqueId)) {
						setTimeout(() => {
							card.classList.toggle('flip');
						}, 800);
							
					}
				}
				else if (clickedCats[0]._id === clickedCats[1]._id) {
					console.log('point!');
					// Guessed correct, don't flip back selected cards
					if (card.className.includes(clickedCats[0]._id)) {
						catsData.update(allCats => {
							const updatedCats = allCats.map(cat => {
								if(cat._id === clickedCats[0]._id) {
									cat.correct = true
								}
								return cat
							})
							return [...updatedCats]
						})
					}
				}	
			}
		})	
	}

	$: if (clickedCats.length === 2) {
		clickedCats = []
	}	
	
</script>

<svelte:head>
	<title>CatMurry</title>
	<meta name="description" content="CatMurry" />
</svelte:head>

<section>
	{#if !gameStarted}
		<Rules on:toggle={(rules) => startGame(rules)} ></Rules>
	{/if}


	<div class="card-wrapper">
		{#if $catsData.length > 0 && gameStarted}
			{#each $catsData as cat}
				<Card bind:counter bind:clickedCat cat="{cat}" />
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

</style>

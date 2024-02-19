
<script lang="ts">
	import GameDone from '$lib/components/gameDone.svelte';
	import { fetchNmrOfCats, type Cat, type Difficulty } from '$lib/services/api';
	import { catsData, gameSettings, gameStatus, lifeRemaining } from '$lib/stores/store';
	import Card from '$lib/components/Card.svelte';
	import GameDetails from '$lib/components/gameDetails.svelte';
	import Rules from '$lib/components/rules.svelte';

	let gameStarted = false
	let clickedCats: Cat[] = []
	let clickedCat: Cat | null

	let cards: NodeListOf<Element>

	// How in gods name do you do js
	async function startGame(event: CustomEvent) {
		const settings: Difficulty = event.detail
		gameSettings.set(settings)
		lifeRemaining.set(settings.numberOfErrors)
		await fetchNmrOfCats(settings.numberOfCards || 5)
		gameStarted = true
		setTimeout(() => {
			cards = document.querySelectorAll('.card');
			[...cards].forEach((card)=>{
				setTimeout(() => {
					card.classList.toggle('flip');
				}, settings.timeToThink);

				card.addEventListener( 'click', function() {
					card.classList.toggle('flip');
				});
		
			});	
		}, 1);

	}

	// Card is clicked
	$: if (clickedCat) {
		clickedCats = [...clickedCats, clickedCat]
		clickedCat = null
		let clickCounter = 0
		cards.forEach(card => {
			if (clickedCats.length === 2) {
				// User clicks the same card twice	
				if (clickedCats[0].uniqueId === clickedCats[1].uniqueId) {
					clickCounter++
					if (clickCounter === 2) {
						lifeRemaining.update(lives => (lives = lives - 1))
					}
				}
				else if (clickedCats[0]._id !== clickedCats[1]._id) {
					// Guessed wrong, flip back selected cards
					if (card.className.includes(clickedCats[0].uniqueId) || card.className.includes(clickedCats[1].uniqueId)) {
						setTimeout(() => {
							card.classList.toggle('flip');
						}, 800);
						clickCounter++
						if (clickCounter === 2) {
							lifeRemaining.update(lives => (lives = lives - 1))
						}
							
					}
				}
				else if (clickedCats[0]._id === clickedCats[1]._id) {
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

	$: if($catsData.length > 0 && $gameSettings?.numberOfErrors) {
		if($catsData.filter(cat => cat.correct === true).length === $catsData.length) {
			$gameStatus = 'won'
		}
		if($lifeRemaining === $gameSettings?.numberOfErrors - $gameSettings?.numberOfErrors) {
			$gameStatus = 'lost'
		}
	}

	// Reset clicks
	$: if (clickedCats.length === 2) {
		clickedCats = []
	}	

	$: if($catsData) {
		console.log($catsData.length);
		
	}
	$: if($gameStatus) {
		console.log($gameStatus);
		
	}
	
</script>

<svelte:head>
	<title>CatMurry</title>
	<meta name="description" content="CatMurry" />
</svelte:head>

<section>

	{#if $gameSettings} 
		<GameDetails></GameDetails>
	{/if}

	{#if $catsData.length === 0}
		<Rules on:toggle={(rules) => startGame(rules)} ></Rules>
	{/if}

	{#if $gameStatus !== '' && $catsData.length > 0}
	{$gameStatus} - {$catsData.length}
		<GameDone bind:gameStatus={$gameStatus}></GameDone>
	{/if}

	{#if $gameStatus === ''}
		{#if $catsData.length > 0}
		 	<div class="card-wrapper">
				{#each $catsData as cat}
					<Card bind:clickedCat cat="{cat}" />
				{/each}
			</div>
		{/if}
	{/if}

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
		height: calc(100% - 50px);
		width: 100%;
		gap: 16px;
		flex-wrap: wrap;
	}

</style>

<script lang="ts">
	import { resetData } from "$lib/services/stateMethods";
	import { catJamLevel, catsData, gameSettings } from "$lib/stores/store";

	function setJamLevel(level: string) {
		catJamLevel.set('level-' + level)
	}


</script>

<header>
	<div class="corner1 + {$catJamLevel}"></div>
	<button on:click={() => resetData()}>Reset</button>
	<h1>CatMurry</h1>
	<div>
		<button class="{$catJamLevel === 'level-3' ? 'active' : ''}" on:click={() => setJamLevel('3')}>CatJam level 3</button>
		<button class="{$catJamLevel === 'level-2' ? 'active' : ''}" on:click={() => setJamLevel('2')}>CatJam level 2</button>
		<button class="{$catJamLevel === 'level-1' ? 'active' : ''}" on:click={() => setJamLevel('1')}>CatJam level 1</button>
	</div>
	<div class="corner2 + {$catJamLevel}"></div>
</header>

<style>
	header {
		background-color: black;
		color: white;
		display: flex;
		justify-content: space-between;
		height: 100px;
	}

	.active {
		border: 1px solid white;
	}
	button {
		width: 100px;
		background-color: black;
		color: white;
		border: none;
		cursor: pointer;
		height: 100%;
	}

	.corner1 {
    	background-size: cover;
		/* transform: scaleX(-1); */
		padding: 16px;
		width: 3em;
	}
	.corner2 {
		/* background-image: url('https://i.pinimg.com/originals/0d/7a/e1/0d7ae1673553b12e35a894df801628aa.gif'); */
    	background-size: cover;
		transform: scaleX(-1);
		padding: 16px;
		width: 3em;
	}

</style>

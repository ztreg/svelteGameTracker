<script>
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import { catJamLevel } from "$lib/stores/store";
</script>

<div class="app">
	<Header />

	<main class="{$catJamLevel === 'level-3' ? 'level-3' : 'default'}">
		<slot />
	</main>

	<footer>
		<p>Created by the burrito himself.</p>
	</footer>
</div>

<style>
	.app {
		min-height: 100vh;
		/* width: 100%; */
		background-color: black;
		/* display: grid; */
		/* place-items: center; */
		animation: rotate 5s ease-in-out infinite;

	}

	.default {
		background-image: url("https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
	}

	footer {
		color: var(--color-theme-1);
		position: fixed;
		width: 100%;
		bottom: 0;
		background-color: black;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		min-height: calc(100vh - 50px);
		height: auto;
		background-color: black;
		margin: 0 auto;
		box-sizing: border-box;
		background-size: cover;
		
  		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		padding-bottom: 100px;

		
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		height: 50px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Created by the burrito himself.</p>
	</footer>
</div>

<style>
	.app {
		min-height: 100vh;
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
		background-image: url("../lib/images/cat-bg3.png");
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

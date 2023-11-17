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
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-attachment: fixed;
		background-size: 100vw 100vh;
		background-repeat: no-repeat;
		/* background-image: url('https://i.pinimg.com/originals/0d/7a/e1/0d7ae1673553b12e35a894df801628aa.gif'); */
    	background-size: cover;
		background-image: url("../lib/images/cat-bg.png")


	}

	footer {
		color: var(--color-theme-1);
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 90%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/products.json');
		const { products } = await res.json();

		if (res.ok) {
			return {
				props: {
					products
				}
			};
		}
	}
</script>

<script>
	import { fly } from 'svelte/transition';
	import ProductCard from '../../components/ProductCard.svelte';

	export let products;
</script>

<div in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	<div class="p-10 grid grid-cols-5 gap-x-7 gap-y-10">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</div>

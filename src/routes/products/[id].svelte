<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`/products/${id}.json`);
		const { product } = await res.json();

		if (res.ok) {
			return {
				props: {
					product
				}
			};
		}
	}
</script>

<script>
	import ProductDetail from '../../components/ProductDetail.svelte';

	export let product;
</script>

<div class="p-5">
	<div class="flex align-middle justify-around mb-7">
		<h1 class="text-3xl">Product Detail</h1>
		<button class="border border-black px-2 rounded hover:text-white hover:bg-[#223071]">
			<a href="/products">Go back</a>
		</button>
	</div>

	<div class="flex shadow-xl rounded-xl border border-black-500 w-fit">
		<img class="rounded-xl p-5" src={product.image} alt="" />
		<ProductDetail {product} />
	</div>
</div>

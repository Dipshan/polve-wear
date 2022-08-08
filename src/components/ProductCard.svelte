<script>
	export let product;
</script>

<div class="shadow-xl border border-black-500 rounded-xl hover:opacity-80">
	<a href={`/products/${product.id}`}>
		<img class="rounded-xl p-5" src={product.image} alt="" />
		<div class="p-3">
			<h1 class="text-base font-bold">{product.name}</h1>
			<h2>Rs. {product.price}</h2>
		</div>
	</a>
</div>

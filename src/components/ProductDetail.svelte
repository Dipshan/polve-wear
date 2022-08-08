<script>
	export let product;
</script>

<div class="p-5">
	<h1 class="text-3xl mb-1 font-bold">{product.name}</h1>
	<p class="text-lg mb-3">{product.description}</p>
	<p class="mb-3">
		<span class="font-semibold">Price: </span>
		{product.price}
	</p>
	<i>To order this product contact us at 986000000.</i>
	<i>We will deliver you within 36 hours of order</i>
</div>

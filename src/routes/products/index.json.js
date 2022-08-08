export async function get() {
	const products = [
		{
			id: 1,
			name: 'Leather bag',
			image: '/images/bag.png',
			description: 'High quality product',
			price: 3000
		},
		{
			id: 2,
			name: 'Leather bag',
			image: '/images/bag.png',
			description: 'High quality product',
			price: 3000
		},
		{
			id: 3,
			name: 'Leather bag',
			image: '/images/bag.png',
			description: 'High quality product',
			price: 3000
		},
		{
			id: 4,
			name: 'Leather bag',
			image: '/images/bag.png',
			description: 'High quality product',
			price: 3000
		},
		{
			id: 5,
			name: 'Leather bag',
			image: '/images/bag.png',
			description: 'High quality product',
			price: 3000
		}
	];

	return {
		status: 200,
		body: { products }
	};
}

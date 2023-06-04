const btns=[
{
	id: 1,
	name: 'Cereal Drink'
},
{
	id: 2,
	name: 'Coffee'
},
{
	id: 3,
	name: 'Liquor'
},
{
	id: 4,
	name: 'Malt Drink'
},
{
	id: 5,
	name: 'Powdered Milk'
},
]

const filters = [...new Set(btns.map((btn)=>
	{return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
	var {name, id} = btn;
	return(
		"<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
		)
}).join('');

const product = [
{
	id: 1,
	image: 'image/energen-cereal-drink-mix-choco-40g.png',
	title: 'Energen Cereal Drink Mix Choco 40g',
	price: 10,
	category: 'Cereal Drink'
},
{
	id: 1,
	image: 'image/energen-cereal-drink-mix-vanilla-40g.png',
	title: 'Energen Cereal Drink Mix Vanilla 40g',
	price: 10,
	category: 'Cereal Drink'
},
{
	id: 2,
	image: 'image/great-taste-premium-stick-2g.jpg',
	title: 'Great Taste Premium Coffee Stick 2g',
	price: 2.50,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/great-taste-choco-coffee-mix-30g.jpg',
	title: 'Great Taste Choco Coffee Mix 30g',
	price: 9,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/great-taste-choco-coffee-mix-twin-50g.png',
	title: 'Great Taste Choco Coffee Mix Twin Pack 50g',
	price: 15,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/great-taste-white-30g.jpg',
	title: 'Great Taste White Coffee 30g',
	price: 9,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/great-taste-white-twin-50g.jpg',
	title: 'Great Taste White Coffee Twin Pack 50g',
	price: 15,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/kopiko-black-3-in-1-30g.jpg',
	title: 'Kopiko Black Astig Coffee 30g',
	price: 9,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/kopiko-black-3-in-1-twin-60g.jpg',
	title: 'Kopiko Black Astig Coffee Twin Pack 60g',
	price: 15,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/kopiko-blanca-3-in-1-30g.jpg',
	title: 'Kopiko Blanca Coffee 30g',
	price: 9,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/kopiko-blanca-3-in-1-twin-58g.jpg',
	title: 'Kopiko Blanca Coffee Twin Pack 58g',
	price: 15,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/kopiko-brown-3-in-1-27.5g.jpg',
	title: 'Kopiko Brown Coffee 27.5g',
	price: 9,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/kopiko-brown-3-in-1-twin-53g.jpg',
	title: 'Kopiko Brown Coffee Twin Pack 53g',
	price: 15,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/nescafe-classic-stick-2g.png',
	title: 'Nescafe Classic Instant Coffee Stick 2g',
	price: 3,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/nescafe-creamy-latte-3-in-1-27.5g.jpg',
	title: 'Nescafe Creamy Latte Coffee 27.5g',
	price: 9,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/nescafe-creamy-latte-3-in-1-twin-55g.jpg',
	title: 'Nescafe Creamy Latte Coffee Twin Pack 52g',
	price: 15,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/nescafe-creamy-white-3-in-1-29g.png',
	title: 'Nescafe Creamy White Coffee 29g',
	price: 9,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/nescafe-creamy-white-3-in-1-twin-52g.jpg',
	title: 'Nescafe Creamy White Coffee Twin Pack 52g',
	price: 15,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/nescafe-original-3-in-1-26g.png',
	title: 'Nescafe Original Coffee 26g',
	price: 9,
	category: 'Coffee'
},
{
	id: 2,
	image: 'image/nescafe-original-3-in-1-twin-52g.jpg',
	title: 'Nescafe Original Coffee Twin Pack 52g',
	price: 15,
	category: 'Coffee'
},
{
	id: 3,
	image: 'image/red-horse-extra-strong-beer-500ml.jpg',
	title: 'Red Horse Extra Strong Beer 500ml',
	price: 60,
	category: 'Liquor'
},
{
	id: 3,
	image: 'image/red-horse-extra-strong-beer-1000ml.png',
	title: 'Red Horse Extra Strong Beer 1000ml',
	price: 120,
	category: 'Liquor'
},
{
	id: 3,
	image: 'image/san-miguel-beer-pale-pilsen-1000ml.jpg',
	title: 'San Miguel Beer Pale Pilsen Grande 1000ml',
	price: 120,
	category: 'Liquor'
},
{
	id: 4,
	image: 'image/milo-choco-malt-24g.png',
	title: 'Milo Choco Malt Drink 24g',
	price: 10,
	category: 'Malt Drink'
},
{
	id: 5,
	image: 'image/alaska-fortified-milk-33g.png',
	title: 'Alaska Fortified Powdered Milk Drink 33g',
	price: 12,
	category: 'Powdered Milk'
},
{
	id: 5,
	image: 'image/bear-brand-fortified-milk-150g.jpg',
	title: 'Bear Brand Fortified Powdered Milk Drink 150g',
	price: 58,
	category: 'Powdered Milk'
},
{
	id: 5,
	image: 'image/bear-brand-fortified-milk-350g.png',
	title: 'Bear Brand Fortified Powdered Milk Drink 320g+30g',
	price: 130,
	category: 'Powdered Milk'
},
{
	id: 5,
	image: 'image/bear-brand-fortified-milk-swak-33g.png',
	title: 'Bear Brand Fortified Milk Swack Pack 33g',
	price: 12,
	category: 'Powdered Milk'
},
{
	id: 5,
	image: 'image/birch-tree-fortified-milk-33g.jpg',
	title: 'Birch Tree Fortified Milk Fiber Boost 33g',
	price: 12,
	category: 'Powdered Milk'
},
];

const categories = [...new Set(product.map((item)=>
	{return item}))]

const filterItems = (a)=>{
	const flterCategories = categories.filter(item);
	function item(value){
		if(value.id==a){
			return(
				value.id
				)
		}
	}
	displayItem(flterCategories)
}


const displayItem = (items) => {
	document.getElementById('root').innerHTML = items.map((item)=>
	{
		var {image, title, price} = item;
		return(
			`<div class='box'>
			<h3>${title}</h3>
			<div class='img-box'>
			<img class='images' src=${image}></img>
			</div>
			<div class='bottom'>
			<h2>&#8369 ${price}.00</h2>
			<button>Add to Cart</button>
			</div>
			</div>`)
	}).join('');
}
displayItem(categories);

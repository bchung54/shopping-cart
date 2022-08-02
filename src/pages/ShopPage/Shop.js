import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Cart from '../../components/Cart/Cart';
import banner from '../../assets/images/watch-wallpaper.jpg';
import '../../styles/shop.css';

const Shop = () => {
	const [cartItems, setCartItems] = useState([]);
	const [products] = useState([
		{ id: 100, name: 'Hiss Watch', price: 10.99 },
		{ id: 200, name: 'Meow Watch', price: 250.99 },
		{ id: 300, name: 'Whooo Watch', price: 1599.98 }
	]);

	const handleAddToCart = (productID, qty) => {
		if (cartItems.some((element) => element.id === productID)) {
			const cartCopy = [...cartItems];
			const elementID = cartItems.findIndex((element) => element.id === productID);
			cartCopy[elementID] = {
				id: productID,
				qty: qty
			};
		}
		setCartItems([...cartItems, { id: productID, qty: qty }]);
	};
	return (
		<div className="shop">
			<h2>Shop</h2>
			<div className="announcements">
				<h4>Deals</h4>
				<img src={banner} alt="" className="shop-banner" />
			</div>
			<div className="products">
				<h4>Products</h4>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
				))}
			</div>
			<Cart items={cartItems} products={products} />
			{/* {items.length === 0 ? '' : <Cart items={items} />} */}
		</div>
	);
};

export default Shop;

import { useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Cart from '../../components/Cart/Cart';
import banner from '../../assets/images/watch-wallpaper.jpg';
import '../../styles/shop.css';

const Shop = ({ products }) => {
	const [cartItems, setCartItems] = useState([]);

	const handleAddToCart = (productID, qty) => {
		if (cartItems.some((element) => element.id === productID)) {
			const cartCopy = [...cartItems];
			const elementID = cartCopy.findIndex((element) => element.id === productID);
			cartCopy[elementID] = {
				id: productID,
				qty: parseInt(qty) + parseInt(cartCopy[elementID].qty)
			};
			setCartItems(cartCopy);
		} else {
			setCartItems([...cartItems, { id: productID, qty: qty }]);
		}
	};
	return (
		<div className="shop">
			<h2>Shop</h2>
			<div className="announcements">
				<img src={banner} alt="banner" className="shop-banner" />
			</div>
			<div className="products">
				<h3>Products</h3>
				<hr />
				<div className="product-cards">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
					))}
				</div>
			</div>
			{cartItems.length > 0 && <Cart items={cartItems} products={products} />}
		</div>
	);
};

export default Shop;

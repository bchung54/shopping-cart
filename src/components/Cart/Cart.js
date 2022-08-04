import '../../styles/cart.css';

const Cart = ({ items, products }) => {
	return (
		<div className="cart">
			<div className="subtotal">
				<div id="subtotal-label">Subtotal:</div>
				<div aria-labelledby="subtotal-label">
					$
					{items
						.reduce(
							(previousSum, item) =>
								previousSum + item.qty * products.find((e) => e.id === item.id).price,
							0
						)
						.toFixed(2)}
				</div>
			</div>
			{items.map((item, i) => (
				<div key={i} className="cart-item">
					<img className="cart-img" src="https://via.placeholder.com/100x100" alt="cart-item" />
					{item.qty > 1 && <div className="cart-qty">{item.qty}</div>}
				</div>
			))}
			<button className="checkout-btn">Checkout</button>
		</div>
	);
};
export default Cart;

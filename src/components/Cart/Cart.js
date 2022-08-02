const Cart = ({ items, products }) => {
	return (
		<div className="cart">
			<div className="subtotal">
				<span>
					Subtotal:{' '}
					{items.reduce(
						(previousSum, item) =>
							previousSum + item.qty * products.find((e) => e.id === item.id).price,
						0
					)}
				</span>
			</div>
			{items.map((item, i) => (
				<div key={i} className="cart-item">
					<img src="https://via.placeholder.com/100x100" alt="" />
					{item.qty > 1 && <div>{item.qty}</div>}
				</div>
			))}
			<button>Checkout</button>
		</div>
	);
};
export default Cart;

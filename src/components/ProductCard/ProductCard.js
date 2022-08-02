import React, { useState } from 'react';
const Card = ({ product, onAddToCart }) => {
	const [value, setValue] = useState(0);
	const addToCart = (e) => {
		e.preventDefault();
		onAddToCart(product.id, e.target.querySelector('input[name=qty]').value);
		e.target.reset();
	};

	const handleOnFocus = (e) => {
		if (e.target.value === '0') {
			e.target.value = '';
		}
	};

	const handleOnBlur = (e) => {
		if (e.target.value === '') {
			e.target.value = '0';
		}
	};

	const handleOnInput = (e) => {
		if (e.target.value < 0) {
			e.target.value = 0;
		}
	};

	return (
		<div className="product-card">
			<h4>{product.name}</h4>
			<img src="https://via.placeholder.com/350x250" alt="product" />
			<div className="price">$ {product.price}</div>
			<button className="qty-decrement" onClick={() => (value - 1 >= 0 ? setValue(value - 1) : 0)}>
				-
			</button>
			<form className="qty-inputs" onSubmit={addToCart}>
				<label>
					Qty:{' '}
					<input
						type="number"
						name="qty"
						value={value}
						min="0"
						onChange={(e) => setValue(e.target.value)}
						onFocus={handleOnFocus}
						onBlur={handleOnBlur}
						onInput={handleOnInput}
					/>
				</label>
				<button type="submit" className="add-cart">
					Add to Cart
				</button>
			</form>
			<button className="qty-increment" onClick={() => setValue(value + 1)}>
				+
			</button>
		</div>
	);
};

export default Card;

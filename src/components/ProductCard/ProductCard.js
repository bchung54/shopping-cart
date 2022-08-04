import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import '../../styles/productcard.css';

const Card = ({ product, onAddToCart }) => {
	const [value, setValue] = useState(0);
	const addToCart = (e) => {
		const valueToAdd = e.target.previousElementSibling.querySelector('input[type="number"]').value;
		if (valueToAdd > 0) {
			onAddToCart(product.id, valueToAdd);
		}
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
			e.target.value = '0';
		}
	};

	return (
		<div className="product-card">
			<h4>{product.name}</h4>
			<img src="https://via.placeholder.com/350x250" alt="product" />
			<div className="price">$ {product.price}</div>

			<label htmlFor={'item' + product.id + '-qty'}>
				Qty:{' '}
				<button
					className="qty-decrement"
					aria-label="-"
					onClick={() => (value - 1 >= 0 ? setValue(parseInt(value - 1)) : setValue(0))}
				>
					<FontAwesomeIcon icon={faMinus} />
				</button>
				<input
					type="number"
					id={'item' + product.id + '-qty'}
					value={value}
					min="0"
					onChange={(e) => (e.target.value ? setValue(parseInt(e.target.value)) : setValue(0))}
					onFocus={handleOnFocus}
					onBlur={handleOnBlur}
					onInput={handleOnInput}
				/>
				<button
					className="qty-increment"
					aria-label="+"
					onClick={() => setValue(parseInt(value + 1))}
				>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</label>

			<button className="add-cart" onClick={addToCart}>
				Add to Cart
			</button>
		</div>
	);
};

export default Card;

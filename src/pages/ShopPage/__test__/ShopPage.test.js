import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Shop from '../Shop';

const testProduct = [{ id: 999, name: 'Big Bertha', price: 5000 }];

describe('ShopPage Display', () => {
	it('should render the correct shop heading', () => {
		render(<Shop products={testProduct} />);
		const headingElement = screen.getByRole('heading', { level: 2 }, { name: 'Shop' });
		expect(headingElement).toBeInTheDocument();
	});
});

describe('ShopPage Add to Cart Function', () => {
	it('should render 1 image if the same item is added multiple times', () => {
		render(<Shop products={testProduct} />);
		const incrementElement = screen.getByRole('button', { name: '+' });
		const addToCartElement = screen.getByRole('button', { name: 'Add to Cart' });
		const inputElement = screen.getByRole('spinbutton', { name: 'Qty:' });

		/* Add 1 to cart */
		userEvent.click(incrementElement);
		userEvent.click(addToCartElement);

		/* Add 10 to cart */
		userEvent.type(inputElement, '0');
		userEvent.click(addToCartElement);

		const cartImgElement = screen.getByAltText('cart-item');
		const cartQtyElement = screen.getByText('11');

		expect(cartImgElement).toBeInTheDocument();
		expect(cartQtyElement).toBeInTheDocument();
	});
});
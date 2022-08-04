import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../ProductCard';

const mockedAddToCart = jest.fn();
const product = { id: 999, name: 'Mock Watch', price: 420.69 };

describe('ProductCard Display', () => {
	it('should render the correct title', () => {
		render(<ProductCard product={product} onAddToCart={mockedAddToCart} />);
		const cardElement = screen.getByText(product.name);
		expect(cardElement).toBeInTheDocument();
	});

	it('should render input buttons', () => {
		render(<ProductCard product={product} onAddToCart={mockedAddToCart} />);
		const incrementElement = screen.getByRole('button', { name: '+' });
		const decrementElement = screen.getByRole('button', { name: '-' });
		const addToCartElement = screen.getByRole('button', { name: 'Add to Cart' });
		expect(incrementElement).toBeInTheDocument();
		expect(decrementElement).toBeInTheDocument();
		expect(addToCartElement).toBeInTheDocument();
	});

	it('should render number input for quantity', () => {
		render(<ProductCard product={product} onAddToCart={mockedAddToCart} />);
		const inputElement = screen.getByRole('spinbutton', { name: 'Qty:' });
		expect(inputElement).toBeInTheDocument();
	});
});

describe('ProductCard Quantity Input Functions', () => {
	it('should render 3 when increment button is clicked three times', () => {
		render(<ProductCard product={product} onAddToCart={mockedAddToCart} />);
		const incrementElement = screen.getByRole('button', { name: '+' });
		const inputElement = screen.getByRole('spinbutton', { name: 'Qty:' });
		for (let i = 0; i < 3; i++) {
			userEvent.click(incrementElement);
		}
		expect(inputElement.value).toBe('3');
	});

	it('should render 0 when decrement button is clicked three times', () => {
		render(<ProductCard product={product} onAddToCart={mockedAddToCart} />);
		const decrementElement = screen.getByRole('button', { name: '-' });
		const inputElement = screen.getByRole('spinbutton', { name: 'Qty:' });
		for (let i = 0; i < 3; i++) {
			userEvent.click(decrementElement);
		}
		expect(inputElement.value).toBe('');
	});

	it('should render 2 when increment button is clicked four times and decrement is clicked twice', () => {
		render(<ProductCard product={product} onAddToCart={mockedAddToCart} />);
		const incrementElement = screen.getByRole('button', { name: '+' });
		const decrementElement = screen.getByRole('button', { name: '-' });
		const inputElement = screen.getByRole('spinbutton', { name: 'Qty:' });
		for (let i = 0; i < 4; i++) {
			userEvent.click(incrementElement);
		}
		userEvent.click(decrementElement);
		userEvent.click(decrementElement);
		expect(inputElement.value).toBe('2');
	});

	it('should render 5 when input for Qty', () => {
		render(<ProductCard product={product} onAddToCart={mockedAddToCart} />);
		const inputElement = screen.getByRole('spinbutton', { name: 'Qty:' });
		userEvent.type(inputElement, '5');
		expect(inputElement.value).toBe('5');
	});

	it('should render 0 when input for Qty is negative', () => {
		render(<ProductCard product={product} onAddToCart={mockedAddToCart} />);
		const inputElement = screen.getByRole('spinbutton', { name: 'Qty:' });
		userEvent.type(inputElement, '-3');
		expect(inputElement.value).toBe('0');
	});
});

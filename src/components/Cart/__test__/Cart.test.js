import { render, screen } from '@testing-library/react';
import Cart from '../Cart';

it('should render the correct subtotal amount', () => {
	render(
		<Cart
			items={[
				{ id: 100, qty: 1 },
				{ id: 200, qty: 1 },
				{ id: 300, qty: 1 }
			]}
			products={[
				{ id: 100, name: 'Hiss Watch', price: 10.99 },
				{ id: 200, name: 'Meow Watch', price: 250.99 },
				{ id: 300, name: 'Whooo Watch', price: 1599.98 }
			]}
		/>
	);
	const subtotalElement = screen.getByText(/Subtotal: 1861.96/i);
	expect(subtotalElement).toBeInTheDocument();
});

it('should render 3 images when 3 separate items are added to cart', () => {
	render(
		<Cart
			items={[
				{ id: 100, qty: 1 },
				{ id: 200, qty: 1 },
				{ id: 300, qty: 1 }
			]}
			products={[
				{ id: 100, name: 'Hiss Watch', price: 10.99 },
				{ id: 200, name: 'Meow Watch', price: 250.99 },
				{ id: 300, name: 'Whooo Watch', price: 1599.98 }
			]}
		/>
	);
	const imgElements = screen.getAllByRole('img');
	expect(imgElements).toHaveLength(3);
});

it('should render 1 image when same item is added to cart 3 times', () => {
	render(
		<Cart
			items={[{ id: 100, qty: 3 }]}
			products={[
				{ id: 100, name: 'Hiss Watch', price: 10.99 },
				{ id: 200, name: 'Meow Watch', price: 250.99 },
				{ id: 300, name: 'Whooo Watch', price: 1599.98 }
			]}
		/>
	);
	const imgElement = screen.getAllByRole('img');
	const imgQty = screen.getByText('3');
	expect(imgElement).toHaveLength(1);
	expect(imgQty).toBeInTheDocument();
});

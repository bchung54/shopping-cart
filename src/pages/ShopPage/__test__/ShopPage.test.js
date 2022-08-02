import { render, screen } from '@testing-library/react';
import Shop from '../Shop';

describe('ShopPage Display', () => {
	it('should render the correct shop heading', () => {
		render(<Shop />);
		const headingElement = screen.getByRole('heading', { level: 2 }, { name: 'Shop' });
		expect(headingElement).toBeInTheDocument();
	});
});

import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/ShopPage/Shop';
import About from './pages/About';

function App() {
	const products = [
		{ id: 100, name: 'Hiss Watch', price: 10.99 },
		{ id: 200, name: 'Meow Watch', price: 250.99 },
		{ id: 300, name: 'Whooo Watch', price: 1599.98 },
		{ id: 999, name: 'Big Bertha', price: 5000.99 }
	];

	return (
		<div className="App">
			<BrowserRouter>
				<nav>
					<h1>Real Fake Watch & Co.</h1>
					<Link className="site-links" to="/">
						Home
					</Link>
					<Link className="site-links" to="/shop">
						Products
					</Link>
					<Link className="site-links" to="/about">
						About
					</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop products={products} />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

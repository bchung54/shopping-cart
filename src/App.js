import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/ShopPage/Shop';
import About from './pages/About';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<nav>
					<h1>Real Fake Watch & Co.</h1>
					<Link to="/">Home</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/about">About</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

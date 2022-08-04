import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
	return (
		<div className="home">
			<button className="shop-btn">
				<Link className="shop-btn-link" to="/shop">
					Shop Now
				</Link>
			</button>
		</div>
	);
};

export default Home;

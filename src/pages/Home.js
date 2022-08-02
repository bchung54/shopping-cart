import cover from '../assets/images/pocketwatch-wallpaper.jpg';
import '../styles/home.css';

const Home = () => {
	return (
		<div className="home">
			<img src={cover} alt="watch-cover" className="cover-img" />
		</div>
	);
};

export default Home;

import '../styles/about.css';

const About = () => {
	return (
		<div className="about">
			<h2>About Us</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<hr></hr>
			<h4>Who wants to know?</h4>
			<form>
				<label htmlFor="name">
					Name: <input className="about-input" id="name" type="text" />
				</label>
				<label htmlFor="email">
					Email: <input className="about-input" id="email" type="text" />
				</label>
			</form>
		</div>
	);
};

export default About;

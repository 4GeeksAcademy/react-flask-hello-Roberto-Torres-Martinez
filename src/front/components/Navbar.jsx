import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white ms-3"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" style={{ width: '40px', height: 'auto' }} /><b className="brand-name">Facebook</b></span>
			</Link>
			<div className="ml-auto">
				<Link to="/login">
					<button className="button-create-user">Login</button>
				</Link>
			</div>
		</nav>
	);
};
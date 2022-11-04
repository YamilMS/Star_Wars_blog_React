import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"

export const Navbar = () => {
	const styleImg= {
		height: "4em"
	}
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-0">
			<Link to="/">
				<span className="navbar-brand mx-2 h1"><img style={styleImg} src={logo}/></span>
			</Link>
			<div className="ml-auto">
				<Link to="/fav">
					<button className="btn btn-primary mx-2">Go to Favourites</button>
				</Link>
			</div>
		</nav>
	);
};

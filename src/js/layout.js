import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import {Character} from "./views/character"
import {Planet} from "./views/planet"
import {Vehicle} from "./views/vehicle"
import { Favourites } from "./views/fav";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const getApi= async ()=> {
		const response= await fetch (`https://www.swapi.tech/api/`)
		const data= await response.json();
	}
	getApi();

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/characters">
							<Character />
						</Route>
						<Route exact path="/planets">
							<Planet />
						</Route>
						<Route exact path="/vehicles">
							<Vehicle />
						</Route>
						<Route exact path="/fav">
							<Favourites />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

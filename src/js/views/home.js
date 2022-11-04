import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import charPic from "../../img/charPic.jpg"
import vehiPic from "../../img/vehiPic.jpg"
import planetPic from "../../img/planetPic.jpg"

export const Home = () =>{
    const { store, actions } = useContext(Context);

	const styleImgChar={
        backgroundImage: `url(${charPic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const styleImgPlanet={
        backgroundImage: `url(${planetPic})`,
        height: '80vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const styleImgVehi={
        backgroundImage: `url(${vehiPic})`,
        height: '80vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
   
    const styleHeader={
        color: "#990012"
    }
	
	return (
		<div>
            <div id="charDiv" style={styleImgChar} className="p-5 my-5 rounded-3">
                <div className="subDivHome container-fluid py-5">
                
                    <h1 className="display-5 fw-bold" style={styleHeader}>Characters</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <Link to="/characters" style={{ textDecoration: 'none' }}>
                     <button className="btn btn-primary btn-lg" type="button">Explore the characters</button>
                    </Link>
                </div>
            </div>
            <div className="p-5 my-5 bg-light rounded-3" style={styleImgPlanet}>
                <div className="subDivHome container-fluid py-5">
                    <h1 className="display-5 fw-bold" style={styleHeader}>Planets</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <Link to="/planets" style={{ textDecoration: 'none' }}>
                     <button className="btn btn-primary btn-lg" type="button">Explore the planets</button>
                    </Link>
                </div>
            </div>
            <div className="p-5 my-5 bg-light rounded-3" style={styleImgVehi}>
                <div className="subDivHomeVehi container-fluid py-5">
                    <h1 className="display-5 fw-bold" style={styleHeader}>Vehicles</h1>
                    <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <Link to="/vehicles" style={{ textDecoration: 'none' }}>
                     <button className="btn btn-primary btn-lg" type="button">Explore the vehicles</button>
                    </Link>
                </div>
            </div>
	</div>
	
);
} 
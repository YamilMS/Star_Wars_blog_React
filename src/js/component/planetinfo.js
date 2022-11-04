import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetInfo= (props)=>{
    const { store, actions } = useContext(Context);
    const [planetInfo, setPlanetInfo]= useState([]);
    const [fav, setFav]= useState(false);
    
    useEffect(()=>{
        const planetPesonalInfo= async ()=> {
            const response= await fetch (props.url)
            const data= await response.json();
            const info= data.result.properties
            setPlanetInfo(info)
        } 
        planetPesonalInfo();
    }, [])

    const handleFavChar = (planetInfo) =>{
        actions.addFav(planetInfo);
    }
    const removeFavChar = (planetInfo) =>{
        actions.removeFav(planetInfo);
    }
    
    
    return(
        <div className="m-2">
            <p className="card-text mb-1">Diameter: {planetInfo.diameter}</p>
            <p className="card-text mb-1">Population: {planetInfo.population}</p>
            <p className="card-text">Rotation period: {planetInfo.population}</p>
            <div>
            {planetInfo.diameter ? (
            <div>
                {fav ? <span id="NoFavIcon" className="material-icons" onClick={()=>{setFav(false);
                removeFavChar(planetInfo);}}>favorite</span> :  <span id="NoFavIcon" className="material-icons" onClick={()=>{setFav(true);
                handleFavChar(planetInfo);}}>favorite_border</span>}
            </div>
            ):(
            ""
            )
            }
            </div>
        </div>
    )
}
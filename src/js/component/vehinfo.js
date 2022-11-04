import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const VehInfo= (props)=>{
    const { store, actions } = useContext(Context);
    const [vehiInfo, setvehiInfo]= useState([]);
    const [fav, setFav]= useState(false);
    
    useEffect(()=>{
        const vehiPesonalInfo= async ()=> {
            const response= await fetch (props.url)
            const data= await response.json();
            const vInfo= data.result.properties
            setvehiInfo(vInfo)
        } 
        vehiPesonalInfo();
    }, [])
    
    const handleFavChar = (vehiInfo) =>{
        actions.addFav(vehiInfo);
    }
    const removeFavChar = (vehiInfo) =>{
        actions.removeFav(vehiInfo);
    }

    return(
        <div className="m-2">
            <p className="card-text mb-1">Type of vehicle: {vehiInfo.vehicle_class}</p>
            <p className="card-text mb-1">Passengers capacity: {vehiInfo.passengers}</p>
            <p className="card-text">Cost: {vehiInfo.cost_in_credits}</p>
            <div>
            {vehiInfo.vehicle_class ? (
            <div>
                {fav ? <span id="NoFavIcon" className="material-icons" onClick={()=>{setFav(false);
                removeFavChar(vehiInfo);}}>favorite</span> :  <span id="NoFavIcon" className="material-icons" onClick={()=>{setFav(true);
                handleFavChar(vehiInfo);}}>favorite_border</span>}
            </div>
            ):(
            ""
            )
            }
            </div>
        </div>
    )
}
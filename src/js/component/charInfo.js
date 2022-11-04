import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const CharInfo= (props)=>{
    const { store, actions } = useContext(Context);
    const [personalInfo, setPersonalInfo]= useState([]);
    const [fav, setFav]= useState(false);

    useEffect(()=>{
        const charPesonalInfo= async ()=> {
            const response= await fetch (props.url)
            const data= await response.json();
            const info= data.result.properties
            setPersonalInfo(info)
        } 
        charPesonalInfo();
    }, [])

    const handleFavChar = (personalInfo) =>{
        actions.addFav(personalInfo);
    }
    const removeFavChar = (personalInfo) =>{
        actions.removeFav(personalInfo);
    }

    return(
        <div className="m-2">
            <p className="card-text mb-1">Height: {personalInfo.height}cm</p>
            <p className="card-text mb-1">Hair Color: {personalInfo.hair_color}</p>
            <p className="card-text mb-1">Weight: {personalInfo.height}lbs</p>
            <p className="card-text">Gender: {personalInfo.gender}</p>
            <div>
            {personalInfo.height ? (
            <div>
                {fav ? <span id="NoFavIcon" className="material-icons" onClick={()=>{setFav(false);
                removeFavChar(personalInfo);}}>favorite</span> :  <span id="NoFavIcon" className="material-icons" onClick={()=>{setFav(true);
                handleFavChar(personalInfo);}}>favorite_border</span>}
            </div>
            ):(
            ""
            )
            }
            </div>
        </div>
    )
}
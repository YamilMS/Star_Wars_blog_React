import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PlanetInfo } from "../component/planetinfo";
export const Planet= ()=>{

    const [planet, setPlanet]= useState([])

    useEffect(()=>{
        const planetApi= async ()=> {
            const response= await fetch (`https://www.swapi.tech/api/planets`)
            const data= await response.json();
            console.log(data.results)
            setPlanet(data.results)
        } 
        planetApi();
    },[])
	
    const styleCard={
        width: '18rem'
    }

    const styleHeader={
        color: "#990012"
    }

    return(
        <div>
        {planet.length===0 ? (
            <div>
            <div className="text-center">
                <h3 className="mr-5">Loading the planets</h3>
            </div>
            <div className="spinner mx-auto"> </div>
            </div>
        ):(
        <div>
            <h2 className="my-5 mx-2" style={styleHeader}>Planets</h2>
            <div className="d-flex overflow-auto my-4">
            <div className="card-deck d-flex flex-row flex-nowrap " >
            {planet.map((world)=>{
                return (
                    <div className="card card-block mx-2" key={world.uid} style={styleCard}>
                        <img className="card-img-top" src={`https://via.placeholder.com/300x200.png?text=${world.name}`} alt="Card image cap"/>
                        <div className="card-body" id={world.uid}>
                                <h5 className="card-title mb-3" style={styleHeader}>{world.name}</h5>
                                <PlanetInfo url={world.url} />
                        </div>
                    </div>
                )
            })}
            </div>
            </div>
        </div>
        )}
        </div>
    )
}
import React, { useState, useEffect, useContext } from "react";
import { VehInfo } from "../component/vehinfo";
import { Link } from "react-router-dom";

export const Vehicle= ()=>{
    const [vehicle, setVehicle]= useState([])

    useEffect(()=>{
        const vehicleApi= async ()=> {
            const response= await fetch (`https://www.swapi.tech/api/vehicles`)
            const data= await response.json();
            //console.log(data)
            setVehicle(data.results)
        } 
        vehicleApi();
    },[])
	
    const styleCard={
        width: '18rem'
    }

    const styleHeader={
        color: "#990012"
    }

    return(
        <div>
        {vehicle.length===0 ? (
            <div>
            <div className="text-center">
                <h3 className="mr-5">Loading the vehicles</h3>
            </div>
            <div className="spinner mx-auto"> </div>
            </div>
        ):(
        <div>
        <h2 className="my-5 mx-2" style={styleHeader}>Vehicles</h2>
        <div className="d-flex overflow-auto">
            <div className="card-deck d-flex flex-row flex-nowrap " >
            {vehicle.map((car)=>{
                return (
                    <div className="card card-block mx-2" key={car.uid} style={styleCard}>
                        <img className="card-img-top" src={`https://via.placeholder.com/300x200.png?text=${car.name}`}  alt="Card image cap"/>
                        <div className="card-body" id={car.uid}>
                                <h5 className="card-title mb-3" style={styleHeader}>{car.name}</h5>
                                <VehInfo url={car.url} />
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
import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favourites= ()=>{
    const { store, actions } = useContext(Context);
    const favourite = store.itemFav
    console.log(favourite)

    const styleCard={
        width: '18rem',
    }
   
    const styleHeader={
        color: "#990012"
    }

    const remove = (item) =>{
        actions.removeFav(item);
    }

   return(
    <div>
        <h2 className="my-5 mx-2" style={styleHeader}>Favourites</h2>
        {favourite.length>0 ? (
            <div className="d-flex overflow-auto">
            <div className="card-deck d-flex flex-row flex-nowrap " >
            {favourite.map((item, idx)=>{
                return(
                <div key={idx}>
                   {("height" in item) ? (
                    <div>
                            <div className="card card-block mx-2" key={idx} style={styleCard}>
                                <img className="card-img-top" src={`https://via.placeholder.com/300x200.png?text=${item.name}`} alt="Card image cap"/>
                                <div className="card-body" id={idx}>
                                        <h5 className="card-title mb-3"  style={styleHeader}>{item.name}</h5>
                                        <p className="card-text mb-1">Height: {item.height}cm</p>
                                        <p className="card-text mb-1">Hair Color: {item.hair_color}</p>
                                        <p className="card-text mb-1">Weight: {item.height}lbs</p>
                                        <p className="card-text">Gender: {item.gender}</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-danger w-50 btn-sm mb-3" onClick={()=> remove(item)}>Remove</button>
                                </div>
                            </div>
                    </div>
                   ): ("diameter" in item) ? (
                    <div>
                    <div className="card card-block mx-2" key={idx} style={styleCard}>
                        <img className="card-img-top" src={`https://via.placeholder.com/300x200.png?text=${item.name}`} alt="Card image cap"/>
                        <div className="card-body" id={idx}>
                                <h5 className="card-title mb-3"  style={styleHeader}>{item.name}</h5>
                                <p className="card-text mb-1">Diameter: {item.diameter}</p>
                                <p className="card-text mb-1">Population: {item.rotation_period}</p>
                                <p className="card-text">Rotation period: {item.population}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-danger w-50 btn-sm mb-3" onClick={()=> remove(item)}>Remove</button>
                            </div>
                        </div>
                    </div>
                   ) : ("passengers" in item) ? (
                    <div>
                    <div className="card card-block mx-2" key={idx} style={styleCard}>
                        <img className="card-img-top" src={`https://via.placeholder.com/300x200.png?text=${item.name}`} alt="Card image cap"/>
                        <div className="card-body" id={idx}>
                                <h5 className="card-title mb-3"  style={styleHeader}>{item.name}</h5>
                                <p className="card-text mb-1">Type of vehicle: {item.vehicle_class}</p>
                                <p className="card-text mb-1">Passengers capacity: {item.passengers}</p>
                                <p className="card-text">Cost: {item.cost_in_credits}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-danger w-50 btn-sm mb-3" onClick={()=> remove(item)}>Remove</button>
                            </div>
                        </div>
                    </div>
                   ) : <p>No favourites</p> }
                </div>
                )
            })}
             </div>
            </div>
        ):(
            <h3 className="text-center">You don't have any favourite</h3>
        )}
        
    </div>
    )
}
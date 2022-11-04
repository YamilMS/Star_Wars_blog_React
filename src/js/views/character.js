import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CharInfo } from "../component/charInfo";

export const Character= ()=>{
    const [char, setChar]= useState([]);
    
    useEffect(()=>{
        const charactersApi= async ()=> {
            const response= await fetch (`https://www.swapi.tech/api/people`)
            const data= await response.json();
            const result= data.results;
            setChar(result);
        }
        charactersApi();
    },[])

    const styleCard={
        width: '18rem',
    }
   
    const styleHeader={
        color: "#990012"
    }

    return(
        <div>
        {char.length===0 ? (
            <div>
            <div className="text-center">
                <h3 className="mr-5">Loading the characters</h3>
            </div>
            <div className="spinner mx-auto"> </div>
            </div>
        ):(
            <div>
            <h2 className="my-5 mx-2" style={styleHeader}>Characters</h2>
            <div className="d-flex overflow-auto">
            <div className="card-deck d-flex flex-row flex-nowrap " >
            {char.map((person)=>{
                return (
                    <div className="card card-block mx-2" key={person.uid} style={styleCard}>
                        <img className="card-img-top" src={`https://via.placeholder.com/300x200.png?text=${person.name}`} alt="Card image cap"/>
                        <div className="card-body" id={person.uid}>
                                <h5 className="card-title mb-3"  style={styleHeader}>{person.name}</h5>
                                 <CharInfo url={person.url} /> 
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


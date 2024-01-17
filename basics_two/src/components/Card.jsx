import React from "react";


export default function Card(props){
    return(
        <div className="border-2 border-green-400 p-3 my-2 w-1/3">
            <div className="text-lg text-red-400">{props.title}</div>
            <div className="text-lg text-brown-400">{props.price}</div>
            <div className="text-lg text-blue-400">{props.img}</div>
            <div className="text-lg text-blue-400">{props.location}</div>
            {(props.spots)?<div className="text-lg text-blue-400">{props.spots}</div>:<div className="text-lg text-blue-400">No Spots</div>}
            <div className="text-lg text-orange-400">{props.description}</div>
        </div>
    )
}

import React from "react";
import data from '../data.js'
import Card from "./Card.jsx";

export default function Content(){
    return (<div className="flex mx-3 gap-3">
        {data.map((item)=>{
            return (
                <Card 
                    key = {item.id}
                    title = {item.title}
                    description = {item.description}
                    price = {item.price}
                    img = {item.coverImg}
                    location = {item.location}
                    spots = {item.openSpots}
                    />
            )
        })}
    </div>)
}
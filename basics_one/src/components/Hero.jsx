import React from "react";
import appleLogo from "../appleLogo.png" 

export default function Hero(){
    return  <div className="flex items-center justify-between px-10">
                <h1 className="text-xl w-1/2 ml-[50px]">
                    <h1 className="mb-[40px] text-3xl font-bold">About Us</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur omnis obcaecati rerum quibusdam assumenda aut explicabo accusamus quo dolores quaerat cumque dicta iste consequuntur quae, nostrum, sint deleniti voluptatibus quos. Quas inventore iste corrupti, enim vero error deleniti nulla totam laboriosam cupiditate possimus porro eaque eos
                </h1>
                <img className="w-[400px] mt-5 mr-4" src={appleLogo} alt="appleLogo"  />
            </div>
}
import React from "react";
import imgData from '../imgsdata.js' 

export default function Main(){

    let imgList = "";
        let randomIndex = 0;
        let imgURL = "";

    function handleClick(){
        imgList = imgData.imagesURL;
        randomIndex = Math.floor(Math.random() * imgList.length)
        imgURL = imgList[randomIndex].url
    }

    return(
        <div className="w-1/2 mx-auto">
            <div className="w-full mx-auto mt-[50px] space-y-10">
                <div className="flex items-center justify-between">
                    <label className="text-2xl" htmlFor="fname">First Name</label>
                    <input id="fname" type="text" name="fname" className="border-2 p-2 rounded-md w-[300px] text-gray-700 text-xl"></input>
                </div>
                <div className="flex items-center justify-between">
                    <label className="text-2xl" htmlFor="lname">Last Name</label>
                    <input id="lname" type="text" name="lname" className="border-2 p-2 rounded-md w-[300px] text-gray-700 text-xl"></input>
                </div>
                <button onClick={handleClick} className="block w-full px-7 py-2 rounded-lg text-2xl bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white">
                    Display 
                </button>
                <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTcwNTUwMDgzMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600" alt="nature" />
            </div>
        </div>
    )
}


// https://source.unsplash.com/1600x900/?nature
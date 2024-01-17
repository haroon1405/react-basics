import React from "react";

export default function Main(){
    return(
        <div>
            <div className="w-fit mx-auto mt-[100px] space-y-10">
                <div className="space-x-[200px]">
                    <label className="text-2xl" htmlFor="fname">First Name</label>
                    <input id="fname" type="text" name="fname" className="border-2 p-2 rounded-md w-[300px]"></input>
                </div>
                <div className="space-x-[200px]">
                    <label className="text-2xl" htmlFor="lname">Last Name</label>
                    <input id="lname" type="text" name="lname" className="border-2 p-2 rounded-md w-[300px]"></input>
                </div>
            </div>
            <div className="w-fit mx-auto mt-[55px] px-7 py-2 rounded-lg text-2xl bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white">
                    Click
            </div>
        </div>
    )
}
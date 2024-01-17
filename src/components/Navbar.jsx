import React from "react";

export default function Navbar(){
    return <div className="flex justify-between items-center py-2 px-4 bg-slate-200 mt-0">
      <img src='https://picsum.photos/200' alt='randomImg' className='w-10 rounded-3xl'/>
            <ul className="flex space-x-10">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">About</li>
              <li className="hover:underline">Services</li>
            </ul>
           </div>
  }



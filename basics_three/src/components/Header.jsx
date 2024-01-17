import React from "react";

export default function Header(){
    return <nav className="flex justify-between items-center py-2 px-6 bg-purple-600 mt-0">
            <img src='https://picsum.photos/200' alt='randomImg' className='w-10 rounded-3xl'/>
            <div className="mr-auto pl-5 text-white text-2xl font-semibold">Forms</div>
            <div className="text-white text-lg">Understanding States</div>
           </nav>
  }



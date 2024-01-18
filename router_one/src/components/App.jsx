import React from "react"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import About from "./About";
import Home from "./Home";

export default function App()
{
    return (
    <BrowserRouter>
        <nav className="flex justify-between items-center py-2 px-4 bg-slate-200 mt-0">
            <img src='https://picsum.photos/200' alt='randomImg' className='w-10 rounded-3xl'/>
            <ul className="flex space-x-10 mr-5">
              <Link to='/' className="hover:underline">Home</Link>
              <Link to='/about' className="hover:underline">About</Link>
            </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
    )   
}
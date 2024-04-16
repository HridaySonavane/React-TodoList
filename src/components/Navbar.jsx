import React from 'react'
import { GoHomeFill } from "react-icons/go";

function Navbar() {
  return (
    <div className="flex justify-center">
      <div className='absolute top-6 flex justify-around items-center w-6/12 h-12 rounded-full backdrop-blur-3xl bg-gradient-to-br from-white/70 border border-white font-semibold text-lg '>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Bg Gallery</a>
        <a href="">Contact Us</a>
        <button className="bg-black text-white px-3 py-1 rounded-full">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
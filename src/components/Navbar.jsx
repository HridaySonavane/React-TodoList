import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='absolute flex justify-center items-center w-screen h-full bg-zinc-900'>
      {/* <FaPlus/> */}
      <div className="card relative w-[450px] h-[500px] bg-white rounded-md">
        <div className='text-3xl mb-10 ml-4 mt-4'>ToDo-List</div>
        <div className='flex relative justify-center border border-black'>
          <input className='border border-slate-400 px-2 py-1 w-72' type="text" placeholder='Add your New ToDo' />
          <button className='bg-violet-900 text-white px-2' type="submit">Add a ToDo</button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
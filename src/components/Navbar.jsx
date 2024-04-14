import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='absolute flex justify-center items-center w-screen h-full bg-zinc-900'>
      {/* <FaPlus/> */}
      <div className="card relative w-[450px] h-[500px] bg-white rounded-md">
        <div>ToDo-List</div>
        <div>
          <input className='border border-slate-400 px-2 py-1 w-72' type="text" placeholder='Add your New ToDo' />
          <button className='bg-violet-900 text-white h-7' type="submit"> <FaPlus size={22} /> </button>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
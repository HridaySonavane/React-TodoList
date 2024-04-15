import React, { useState } from "react";

function App() {
  const [first, setfirst] = useState('')

  const handleChange = e =>{
    setfirst(e.target.value)
  }
  
  return (
    <div className="absolute flex justify-center items-center w-screen h-full bg-zinc-900">
      {/* <FaPlus/> */}
      <div className="card relative w-[450px] h-[500px] bg-white rounded-md">
        <div className="text-3xl font-bold mb-10 ml-4 mt-4">ToDo-List</div>
        <div className="flex relative justify-evenly ">
          <input
            className="border border-slate-400 px-2 py-1 w-72 rounded-md"
            type="text"
            placeholder="Add your New ToDo"
            value={first}
            onChange={handleChange}
          />
          <button
            className="bg-violet-900 text-white px-3 rounded-md"
            type="submit"
          >
            Add a ToDo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

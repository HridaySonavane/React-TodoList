import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <TodoList/>
      <Navbar/>
    </div>
  );
}

export default App;

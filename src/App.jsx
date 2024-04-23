import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { scrollbarGutter } from "tailwind-scrollbar-utilities";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TodoList />} />

          <Route exact path="about/" element={<About style={"scrollbarGutter: stable"} />} />
        </Routes>
      </div>
      <Navbar />
      
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TodoList />} />

          <Route exact path="about/*" element={<About/>} />
        </Routes>
      </div>
      <Navbar />
      
    </Router>
  );
}

export default App;

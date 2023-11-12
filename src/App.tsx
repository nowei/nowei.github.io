import React from "react";
import face from "./imgs/face.jpg";
import "./App.css";
import { text } from "stream/consumers";
import Navbar from "./navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import WritingRouter from "./writing/Writing";
import SweLife from "./writing/misc/swe-life";
// style={{
//   background: "linear-gradient(275deg, #52acff 25%, #ffe32c 100%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent"
// }}

function App() {
  return (
    <div className="MainIndex">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div />} />
          <Route path="/timeline" element={<div />} />
        </Routes>
        <WritingRouter />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import face from "./imgs/face.jpg";
import "./App.css";
import { text } from "stream/consumers";
import Navbar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
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
          <Route path="/contact" element={<div />} />
          <Route path="/blogs" element={<div />} />
          <Route path="/sign-up" element={<div />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
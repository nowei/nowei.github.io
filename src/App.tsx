import React from "react";
import face from "./imgs/face.jpg";
import "./App.css";
import { text } from "stream/consumers";
import Navbar from "./navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import WritingRouter from "./writing/Writing";
import SweLife from "./writing/misc/swe-life";
import AboutMe from "./about/About";
import Timeline from "./timeline/Timeline";
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
          <Route path="/about" element={<AboutMe />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
        <WritingRouter />
      </Router>
    </div>
  );
}

export default App;

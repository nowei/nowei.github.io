import React, { useState, useRef, useEffect } from "react";
import face from "./imgs/face.jpg";
import "./App.css";
import Navbar from "./navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import { Writing, WritingRoutes } from "./writing/Writing";
import AboutMe from "./about/About";
import Timeline from "./timeline/Timeline";
import NotFoundPage from "./pages/notfoundpage";
// style={{
//   background: "linear-gradient(275deg, #52acff 25%, #ffe32c 100%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent"
// }}

// Set up SPA based on: https://github.com/rafgraph/spa-github-pages
// and https://github.com/gfmio/github-pages-boilerplate
function App() {
  return (
    <div className="MainIndex" style={{ position: "relative" }}>
      <div style={{ paddingTop: "85px", width: "100%" }}></div>
      <Router>
        <Navbar />
        <Routes>
          {WritingRoutes()}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

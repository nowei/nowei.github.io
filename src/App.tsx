import React, { useState, useRef, useEffect } from "react";
import face from "./imgs/face.jpg";
import "./App.css";
import { text } from "stream/consumers";
import Navbar from "./navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import WritingRouter from "./writing/Writing";
import AboutMe from "./about/About";
import Timeline from "./timeline/Timeline";
// style={{
//   background: "linear-gradient(275deg, #52acff 25%, #ffe32c 100%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent"
// }}

// Set up SPA based on: https://github.com/rafgraph/spa-github-pages
function App() {
  const ref = useRef({ current: { clientHeight: 0 } });
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  // This script checks to see if a redirect is present in the query string,
  // converts it back into the correct url and adds it to the
  // browser's history using window.history.replaceState(...),
  // which won't cause the browser to attempt to load the new url.
  // When the single page app is loaded further down in this file,
  // the correct url will be waiting in the browser's history for
  // the single page app to route accordingly.
  (function (l) {
    if (l.search[1] === "/") {
      var decoded = l.search
        .slice(1)
        .split("&")
        .map(function (s) {
          return s.replace(/~and~/g, "&");
        })
        .join("?");
      window.history.replaceState(
        null,
        "",
        l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  })(window.location);
  return (
    <div className="MainIndex" style={{ position: "relative" }}>
      <div style={{ paddingTop: "85px", width: "100%" }}></div>
      <Router basename={process.env.PUBLIC_URL}>
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

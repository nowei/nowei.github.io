import React from "react";
import Recommendations from "./Recommendations";
import SweLife from "./misc/swe-life";
import OnOffBoarding from "./misc/on-off-boarding";
import { Blogs, BlogRoutes } from "./blogs/index";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export function Writing() {
  return (
    <>
      <div style={{ top: 0 }}>
        <Blogs />
        <h1>Misc. writing</h1>
        <p>
          <Link to={"./misc/swe-life"}>
            Stuff I learned as a Software Engineer
          </Link>
        </p>
        <p>
          <Link to={"./misc/on-boarding-off-boarding"}>
            What to do when it's time to go
          </Link>
        </p>
        <h2>What do you watch/listen to</h2>
        <p>
          <Link to={"./recommendations"}>Recommendations</Link>
        </p>
        <div style={{ padding: "10%" }}></div>
      </div>
    </>
  );
}

export function WritingRoutes() {
  const routes = BlogRoutes().concat([
    <Route path="/writing/misc/swe-life" element={<SweLife />} />,
    <Route
      path="/writing/misc/on-boarding-off-boarding"
      element={<OnOffBoarding />}
    />,
    <Route path="/writing/recommendations" element={<Recommendations />} />,
  ]);
  return routes;
}

export default Writing;

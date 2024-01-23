import React from "react";
import Blog20200328 from "./blogs/20200328";
import Blog20220504 from "./blogs/20220504";
import Blog20221229 from "./blogs/20221229";
import Blog20231001 from "./blogs/20231001";
import Recommendations from "./Recommendations";
import SweLife from "./misc/swe-life";
import OnOffBoarding from "./misc/on-off-boarding";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function WritingRouter() {
  return (
    <Routes>
      <Route path="/writing" element={<Writing />} />
      <Route path="/writing/blogs/20231001" element={<Blog20231001 />} />
      <Route path="/writing/blogs/20221229" element={<Blog20221229 />} />
      <Route path="/writing/blogs/20220504" element={<Blog20220504 />} />
      <Route path="/writing/blogs/20200328" element={<Blog20200328 />} />
      <Route path="/writing/misc/swe-life" element={<SweLife />} />
      <Route
        path="/writing/misc/on-boarding-off-boarding"
        element={<OnOffBoarding />}
      />
      <Route path="/writing/recommendations" element={<Recommendations />} />
    </Routes>
  );
}

function Writing() {
  return (
    <div style={{ top: 0 }}>
      <h1>Blog</h1>
      <h2>Reflection is good, I guess</h2>
      <p>
        <a className="links" href={"./writing/blogs/20231001"}>
          10/1/2023: On Time and Moving On
        </a>
      </p>
      <p>
        <a className="links" href="./writing/blogs/20221229">
          12/29/2022 + 6/18/2023: Why do we do things?
        </a>
      </p>
      <p>
        <a className="links" href="./writing/blogs/20220504">
          5/4/2022: As good a time as any
        </a>
      </p>
      <p>
        <a className="links" href="./writing/blogs/20200328">
          3/28/2020: A new beginning
        </a>
      </p>
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
        <a className="links" href="./writing/recommendations">
          {" "}
          Recommendations
        </a>
      </p>
      <div style={{ padding: "10%" }}></div>
    </div>
  );
}

export default WritingRouter;

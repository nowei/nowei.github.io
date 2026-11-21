import { lazy } from "react";
import { Route } from "react-router-dom";
import SweLife from "../misc/swe-life";
import OnOffBoarding from "../misc/on-off-boarding";
import Recommendations from "../Recommendations";

const Blog20200328 = lazy(() => import("./20200328"));
const Blog20220504 = lazy(() => import("./20220504"));
const Blog20221229 = lazy(() => import("./20221229"));
const Blog20231001 = lazy(() => import("./20231001"));
const Blog20240601 = lazy(() => import("./20240601"));

export function BlogRoutes() {
  return [
    <Route path="/writing/blogs/20240601" element={<Blog20240601 />} key="20240601" />,
    <Route path="/writing/blogs/20231001" element={<Blog20231001 />} key="20231001" />,
    <Route path="/writing/blogs/20221229" element={<Blog20221229 />} key="20221229" />,
    <Route path="/writing/blogs/20220504" element={<Blog20220504 />} key="20220504" />,
    <Route path="/writing/blogs/20200328" element={<Blog20200328 />} key="20200328" />,
  ];
}

export function WritingExtraRoutes() {
  return [
    <Route path="/writing/misc/swe-life" element={<SweLife />} key="swe-life" />,
    <Route
      path="/writing/misc/on-boarding-off-boarding"
      element={<OnOffBoarding />}
      key="on-off-boarding"
    />,
    <Route
      path="/writing/recommendations"
      element={<Recommendations />}
      key="recommendations"
    />,
  ];
}

export function WritingRoutes() {
  return BlogRoutes().concat(WritingExtraRoutes());
}
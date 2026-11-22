import { lazy } from "react";
import { Route } from "react-router-dom";
import SweLife from "../misc/swe-life";
import OnOffBoarding from "../misc/on-off-boarding";
import PeComputerEngineering from "../misc/pe-computer-engineering";
import Recommendations from "../Recommendations";
import { BLOG_POSTS, blogPostPath, type BlogSlug } from "./posts";

const blogPages: Record<BlogSlug, ReturnType<typeof lazy>> = {
  "20261121": lazy(() => import("./20261121")),
  "20240601": lazy(() => import("./20240601")),
  "20231001": lazy(() => import("./20231001")),
  "20230618": lazy(() => import("./20230618")),
  "20221229": lazy(() => import("./20221229")),
  "20220504": lazy(() => import("./20220504")),
  "20200328": lazy(() => import("./20200328")),
};

export function BlogRoutes() {
  return BLOG_POSTS.map((post) => {
    const Page = blogPages[post.slug];
    return (
      <Route
        path={blogPostPath(post.slug)}
        element={<Page />}
        key={post.slug}
      />
    );
  });
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
      path="/writing/misc/pe-computer-engineering"
      element={<PeComputerEngineering />}
      key="pe-computer-engineering"
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
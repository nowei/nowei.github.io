import Blog20200328 from "./20200328";
import Blog20220504 from "./20220504";
import Blog20221229 from "./20221229";
import Blog20231001 from "./20231001";
import Blog20240601 from "./20240601";
import { Link, Route } from "react-router-dom";

export function Blogs() {
  return (
    <>
      <h1>Blog</h1>
      <h2>Reflection is good, I guess</h2>
      <p>
        <Link to={"./blogs/20240601"}>6/1/2024: Cycle times</Link>
      </p>
      <p>
        <Link to={"./blogs/20231001"}>10/1/2023: On Time and Moving On</Link>
      </p>
      <p>
        <Link to={"./blogs/20221229"}>
          12/29/2022 + 6/18/2023: Why do we do things?
        </Link>
      </p>
      <p>
        <Link to={"./blogs/20220504"}>5/4/2022: As good a time as any</Link>
      </p>
      <p>
        <Link to={"./blogs/20200328"}>3/28/2020: A new beginning</Link>
      </p>
    </>
  );
}

export function BlogRoutes() {
  return [
    <Route path="/writing/blogs/20240601" element={<Blog20240601 />} />,
    <Route path="/writing/blogs/20231001" element={<Blog20231001 />} />,
    <Route path="/writing/blogs/20221229" element={<Blog20221229 />} />,
    <Route path="/writing/blogs/20220504" element={<Blog20220504 />} />,
    <Route path="/writing/blogs/20200328" element={<Blog20200328 />} />,
  ];
}

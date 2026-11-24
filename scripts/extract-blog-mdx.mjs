import fs from "node:fs";
import path from "node:path";

const dir = "src/app/writing/blogs";
const slugs = [
  "20261121",
  "20240601",
  "20231001",
  "20230618",
  "20221229",
  "20220504",
  "20200328",
];

for (const slug of slugs) {
  const tsxPath = path.join(dir, `${slug}.tsx`);
  let s = fs.readFileSync(tsxPath, "utf8");
  const match = s.match(/<BlogPostLayout[\s\S]*?>\s*([\s\S]*?)\s*<\/BlogPostLayout>/);
  if (!match) {
    console.error("skip", slug, "no layout");
    continue;
  }
  let body = match[1].trim();

  body = body.replace(
    /<Image[\s\S]*?src=\{blogAsset\(\s*"[^"]+",\s*"([^"]+)"\s*\)\}[\s\S]*?alt="([^"]*)"[\s\S]*?width="([^"]+)"[\s\S]*?\/>/g,
    '<BlogImage slug="' + slug + '" file="$1" alt="$2" width="$3" />',
  );

  body = body.replace(
    /<Image[\s\S]*?src=\{blogImages\("([^"]+)"\)\}[\s\S]*?alt="([^"]*)"[\s\S]*?width="([^"]+)"[\s\S]*?\/>/g,
    '<BlogImage slug="' + slug + '" file="$1" alt="$2" width="$3" />',
  );

  body = body.replace(
    /<Text className="text-muted">/g,
    '<Text className="text-muted" component="p">',
  );

  const mdxPath = path.join(dir, `${slug}.mdx`);
  fs.writeFileSync(mdxPath, body + "\n");

  const wrapper = `import Content from "./${slug}.mdx";
import { withBlogLayout } from "./withBlogLayout";

export default withBlogLayout("${slug}", Content);
`;
  fs.writeFileSync(tsxPath, wrapper);
  console.log("wrote", slug);
}
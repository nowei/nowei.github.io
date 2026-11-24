import { BLOG_POSTS, blogPostPath } from "../app/writing/blogs/posts";

/**
 * Client routes (React Router). Each path is pre-rendered at build time so
 * direct navigation works on GitHub Pages and in `next dev` without relying
 * only on 404.html.
 */
export const SPA_CLIENT_PATHS = [
  "/about",
  "/now",
  "/teaching",
  "/timeline",
  "/writing",
  ...BLOG_POSTS.map((post) => blogPostPath(post.slug)),
  "/writing/misc/swe-life",
  "/writing/misc/on-boarding-off-boarding",
  "/writing/misc/pe-computer-engineering",
  "/writing/recommendations",
] as const;

export function spaPathToSlug(path: string): string[] {
  return path.replace(/^\//, "").split("/").filter(Boolean);
}

export function spaStaticParams(): { slug: string[] }[] {
  return SPA_CLIENT_PATHS.map((path) => ({
    slug: spaPathToSlug(path),
  }));
}
export const BLOG_POSTS = [
  { slug: "20261121", date: "2026-11-21", title: "A burning star" },
  { slug: "20240601", date: "2024-06-01", title: "Cycle times" },
  { slug: "20231001", date: "2023-10-01", title: "On Time and Moving On" },
  { slug: "20230618", date: "2023-06-18", title: "A moment in time" },
  { slug: "20221229", date: "2022-12-29", title: "Why do we do things?" },
  { slug: "20220504", date: "2022-05-04", title: "As good a time as any" },
  { slug: "20200328", date: "2020-03-28", title: "A new beginning" },
] as const;

export type BlogSlug = (typeof BLOG_POSTS)[number]["slug"];

export function blogPostPath(slug: string) {
  return `/writing/blogs/${slug}`;
}

export function blogIndexLabel(post: { date: string; title: string }) {
  return `${post.date}: ${post.title}`;
}
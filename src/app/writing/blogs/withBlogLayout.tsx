import type { ComponentType } from "react";
import { BlogPostLayout } from "./BlogPostLayout";
import { BLOG_POSTS, type BlogSlug } from "./posts";

export function withBlogLayout(slug: BlogSlug, Content: ComponentType) {
  const meta = BLOG_POSTS.find((post) => post.slug === slug);
  if (!meta) {
    throw new Error(`Unknown blog slug: ${slug}`);
  }
  const { date, title } = meta;

  function BlogPostPage() {
    return (
      <BlogPostLayout date={date} title={title}>
        <Content />
      </BlogPostLayout>
    );
  }

  return BlogPostPage;
}
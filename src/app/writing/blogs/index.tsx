import { Link } from "react-router-dom";
import { Stack, Anchor } from "@mantine/core";
import { BLOG_POSTS, blogIndexLabel, blogPostPath } from "./posts";

export function Blogs() {
  return (
    <Stack gap="sm" w="100%">
      {BLOG_POSTS.map((post) => (
        <Anchor component={Link} to={blogPostPath(post.slug)} size="md" key={post.slug}>
          {blogIndexLabel(post)}
        </Anchor>
      ))}
    </Stack>
  );
}

export { BlogRoutes } from "./routes";
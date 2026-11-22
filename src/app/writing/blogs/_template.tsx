import { Text } from "@mantine/core";
import { BlogPostLayout, BlogKicker, BlogSection } from "./BlogPostLayout";

function BlogYYYYMMDD() {
  return (
    <BlogPostLayout date="YYYY-MM-DD" title="Post title">
      <BlogKicker>Optional time or opening line.</BlogKicker>
      <Text>Body paragraph.</Text>
      <BlogSection title="Section heading" />
      <Text>More body.</Text>
    </BlogPostLayout>
  );
}

export default BlogYYYYMMDD;
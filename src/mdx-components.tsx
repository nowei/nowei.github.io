import type { MDXComponents } from "mdx/types";
import { Text, Divider, Image, Group, Space } from "@mantine/core";
import {
  BlogKicker,
  BlogSection,
} from "./app/writing/blogs/BlogPostLayout";
import { BlogImage } from "./app/writing/blogs/BlogImage";

export function useMDXComponents(): MDXComponents {
  return {
    // MDX often nests blocks inside <p>; use div for all prose blocks (valid HTML).
    p: ({ children }) => (
      <Text component="div" className="blog-paragraph">
        {children}
      </Text>
    ),
    BlogKicker,
    BlogSection,
    BlogImage,
    Text: ({ component, ...props }) => (
      <Text component={component ?? "div"} {...props} />
    ),
    Image,
    Group,
    Space,
    Divider,
    hr: () => <Divider className="home-section-divider" my="sm" />,
    iframe: ({ className, ...props }) => (
      <iframe {...props} className={className ? `embedded-media ${className}` : "embedded-media"} />
    ),
  };
}
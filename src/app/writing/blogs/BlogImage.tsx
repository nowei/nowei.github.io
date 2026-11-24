import { Image } from "@mantine/core";
import { blogAsset } from "./blogAsset";
import type { BlogSlug } from "./posts";

type BlogImageProps = {
  slug: BlogSlug;
  file: string;
  alt: string;
  width?: number | string;
};

export function BlogImage({ slug, file, alt, width = "100%" }: BlogImageProps) {
  return (
    <Image
      src={blogAsset(slug, file)}
      alt={alt}
      width={width}
      mx="auto"
      radius="md"
      my="md"
    />
  );
}
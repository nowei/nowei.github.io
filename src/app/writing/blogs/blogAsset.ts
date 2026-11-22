export function blogAsset(slug: string, imagePath: string) {
  const file = imagePath.replace(/^\.\//, "");
  return `/images/writing/blogs/${slug}/${encodeURIComponent(file)}`;
}
declare module "*.mdx" {
  import type { ComponentType } from "react";
  const MDXComponent: ComponentType;
  export default MDXComponent;
}

declare module "*.pdf";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.html";

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

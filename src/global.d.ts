declare module "*.pdf";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.html";

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

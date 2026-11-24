/**
 * New post checklist:
 * 1. Add entry to posts.ts
 * 2. Copy _template.mdx → YYYYMMDD.mdx
 * 3. Create YYYYMMDD.tsx:
 *    import Content from "./YYYYMMDD.mdx";
 *    import { withBlogLayout } from "./withBlogLayout";
 *    export default withBlogLayout("YYYYMMDD", Content);
 * 4. Register lazy import in routes.tsx and rebuild
 */
export {};
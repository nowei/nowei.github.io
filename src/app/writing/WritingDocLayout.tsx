import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Title, Text, Divider, Stack, Anchor } from "@mantine/core";

type WritingDocLayoutProps = {
  title: string;
  subtitle?: string;
  /** Wider column (~900px), e.g. PE study outline */
  wide?: boolean;
  /** Extra body classes (e.g. `blog-prose`) */
  bodyClassName?: string;
  children: ReactNode;
};

export function WritingDocLayout({
  title,
  subtitle,
  wide = false,
  bodyClassName,
  children,
}: WritingDocLayoutProps) {
  const widthClass = wide ? "writing-doc__body--wide" : "page-sheet--prose";
  const bodyClass = [
    "home-section",
    "writing-doc__body",
    bodyClassName ?? widthClass,
    wide && bodyClassName !== "blog-prose" ? "page-sheet--prose" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className="page-shell home-flat writing-doc">
      <header className="home-section writing-doc__header blog-post__header">
        <Anchor component={Link} to="/writing" size="sm" className="blog-post__back">
          ← Writing
        </Anchor>
        <Title order={1} className="about-page__title" mt="sm">
          {title}
        </Title>
        {subtitle ? (
          <Text size="md" className="text-muted home-hero__summary" mt="sm">
            {subtitle}
          </Text>
        ) : null}
      </header>

      <Divider className="home-section-divider" />

      <div className={bodyClass}>
        <Stack gap="md" w="100%">
          {children}
        </Stack>
      </div>
    </article>
  );
}
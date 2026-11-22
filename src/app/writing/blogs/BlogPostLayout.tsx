import type { ReactNode } from "react";
import { Title, Text } from "@mantine/core";
import { WritingDocLayout } from "../WritingDocLayout";

type BlogPostLayoutProps = {
  date: string;
  title: string;
  children: ReactNode;
};

export function BlogPostLayout({ date, title, children }: BlogPostLayoutProps) {
  const pageTitle = `${date}: ${title}`;

  return (
    <WritingDocLayout title={pageTitle} bodyClassName="blog-prose">
      {children}
    </WritingDocLayout>
  );
}

export function BlogKicker({ children }: { children: ReactNode }) {
  return (
    <Text component="p" className="blog-kicker" size="lg">
      {children}
    </Text>
  );
}

export function BlogSection({
  title,
  center,
}: {
  title: string;
  center?: boolean;
}) {
  return (
    <Title
      order={2}
      size="h3"
      className={
        center ? "blog-section-title blog-section-title--center" : "blog-section-title"
      }
    >
      {title}
    </Title>
  );
}
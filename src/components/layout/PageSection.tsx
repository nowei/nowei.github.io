import { Title } from "@mantine/core";
import type { ReactNode } from "react";

export function PageSection({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section
      className="home-section"
      aria-labelledby={title ? id : undefined}
    >
      {title ? (
        <Title order={2} id={id} className="home-section__title">
          {title}
        </Title>
      ) : null}
      <div className={title ? "home-section__body" : undefined}>{children}</div>
    </section>
  );
}
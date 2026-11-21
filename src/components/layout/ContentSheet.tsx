import { Paper, type PaperProps } from "@mantine/core";
import type { ReactNode } from "react";

type ContentSheetProps = PaperProps & {
  children: ReactNode;
  /** Narrower measure for long-form copy (about, hero). */
  prose?: boolean;
};

export default function ContentSheet({
  children,
  prose,
  className,
  p = "xl",
  radius = "lg",
  shadow = "sm",
  withBorder = true,
  ...rest
}: ContentSheetProps) {
  return (
    <Paper
      p={p}
      radius={radius}
      shadow={shadow}
      withBorder={withBorder}
      className={["page-sheet", prose ? "page-sheet--prose" : "", className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Paper>
  );
}
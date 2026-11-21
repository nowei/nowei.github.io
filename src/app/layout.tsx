import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../index.css";

export const metadata: Metadata = {
  title: "Andrew Wei",
  description: "Andrew Wei's personal website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <noscript>
          <p>
            This site needs JavaScript for navigation. You can still open{" "}
            <a href="/resume/WeiAndrew.pdf">Andrew&apos;s resume (PDF)</a>.
          </p>
        </noscript>
        {children}
      </body>
    </html>
  );
}

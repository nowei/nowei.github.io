"use client";

import Navbar from "../components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFoundPage from "./pages/notfoundpage";
import { WritingRoutes } from "./writing/blogs/routes";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { lazy, Suspense, useLayoutEffect, useState } from "react";
import { restoreSpaPathFromQuery } from "../lib/spaRedirect";

const AboutMe = lazy(() => import("./about/About"));
const Timeline = lazy(() => import("./pages/timeline/Timeline"));
const Writing = lazy(() => import("./writing/Writing"));

const monoStack =
  "Consolas, 'Liberation Mono', Menlo, Courier, monospace";

export default function ClientApp() {
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    restoreSpaPathFromQuery();
    setMounted(true);
  }, []);

  return (
    <MantineProvider
      defaultColorScheme="auto"
      theme={{
        fontFamily: monoStack,
        fontFamilyMonospace: monoStack,
        headings: { fontFamily: monoStack, fontWeight: "700" },
        defaultRadius: "md",
        lineHeights: {
          xs: "1.45",
          sm: "1.5",
          md: "1.55",
          lg: "1.6",
          xl: "1.65",
        },
      }}
    >
      {mounted ? (
        <Router>
          <Navbar />
          <main id="main-content" className="site-main">
            <Suspense
              fallback={
                <p className="app-loading" aria-live="polite">
                  Loading…
                </p>
              }
            >
              <Routes>
                {WritingRoutes()}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
        </Router>
      ) : (
        <p className="app-loading" aria-live="polite">
          Loading…
        </p>
      )}
    </MantineProvider>
  );
}
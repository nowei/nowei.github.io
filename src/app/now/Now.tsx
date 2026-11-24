"use client";

import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Title, Text, Divider, Stack, Anchor } from "@mantine/core";
import { PageSection } from "../../components/layout/PageSection";

const UPDATED = { iso: "2026-11-24", label: "November 24, 2026" };

function NowFacts({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="now-facts">
      {items.map((item) => (
        <div className="now-facts__row" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Now() {
  useEffect(() => {
    document.title = "Now · Andrew Wei";
    return () => {
      document.title = "Andrew Wei";
    };
  }, []);

  return (
    <div className="page-shell home-flat">
      <header className="home-section about-page__header">
        <Title order={1} id="now-page-title" className="about-page__title">
          Now
        </Title>
        <Text size="md" className="text-muted home-hero__summary" mt="sm">
          What I&apos;m doing at the moment. Last updated{" "}
          <time dateTime={UPDATED.iso}>{UPDATED.label}</time>.
        </Text>
      </header>

      <Divider className="home-section-divider" />

      <PageSection id="now-doing" title="Doing">
        <NowFacts
          items={[
            {
              label: "Work",
              value:
                "Staff software engineer at Sunrun, building internal platforms and automations for business operations.",
            },
            {
              label: "Where",
              value: "Remote from the greater Seattle area.",
            },
            {
              label: "Teaching",
              value: (
                <>
                  Not in a classroom right now. I still talk with folks who
                  reach out.{" "}
                  <Anchor component={Link} to="/teaching">
                    More about teaching
                  </Anchor>
                  .
                </>
              ),
            },
            {
              label: "Life Events",
              value:
                "Became a Professional Engineer in the state of Washington.",
            },
            {
              label: "Otherwise",
              value:
                "Gym, food, games, concerts, and whatever volunteering I can find time for, and learning about the perils of homeownership.",
            },
          ]}
        />
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="now-year" title="This year">
        <ul className="about-list">
          {[
            "Be able to do pull-ups more consistently",
            "Hang out with friends and volunteer more",
            "Try to not be a terrible homeowner",
            "Work on more projects",
          ].map((item) => (
            <li key={item}>
              <Text size="md">{item}</Text>
            </li>
          ))}
        </ul>
      </PageSection>
    </div>
  );
}

export default Now;

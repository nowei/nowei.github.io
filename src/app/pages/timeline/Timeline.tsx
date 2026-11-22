"use client";

import { useCallback, useState, type ReactNode } from "react";
import {
  QuarterGroup,
  Quarter,
  QuarterProps,
} from "../../../components/timeline/Quarter";
import timelineJson from "./timeline.json";
import { Title, Text, Divider, Stack, Accordion, Button, Group } from "@mantine/core";

type EraSection = {
  id: string;
  title: string;
  subtitle?: string;
  /** Calendar year span for quarters in this section (second header line). */
  years: string;
  content: ReactNode;
};

function Timeline() {
  const [openSections, setOpenSections] = useState<string[]>(["era-recent"]);

  const data: { [id: string]: Quarter } = timelineJson;
  const y2026_2027: QuarterProps = {
    quarters: [data["aut2026"], data["sum2026"], data["spr2026"]],
  };
  const y2025_2026: QuarterProps = {
    quarters: [data["aut2025"], data["sum2025"], data["spr2025"], data["win2025"]],
  };
  const y2024_2025: QuarterProps = { quarters: [data["aut2024"]] };
  const y2023_2024: QuarterProps = {
    quarters: [data["sum2024"], data["spr2024"], data["win2024"], data["aut2023"]],
  };
  const y2022_2023: QuarterProps = {
    quarters: [data["sum2023"], data["spr2023"], data["win2023"], data["aut2022"]],
  };
  const y2021_2022: QuarterProps = {
    quarters: [data["sum2022"], data["spr2022"], data["win2022"], data["aut2021"]],
  };
  const y2020_2021: QuarterProps = {
    quarters: [data["sum2021"], data["spr2021"], data["win2021"], data["aut2020"]],
  };
  const y2019_2020: QuarterProps = {
    quarters: [data["sum2020"], data["spr2020"], data["win2020"], data["aut2019"]],
  };
  const y2018_2019: QuarterProps = {
    quarters: [data["sum2019"], data["spr2019"], data["win2019"], data["aut2018"]],
  };
  const y2017_2018: QuarterProps = {
    quarters: [data["sum2018"], data["spr2018"], data["win2018"], data["aut2017"]],
  };
  const y2016_2017: QuarterProps = {
    quarters: [data["sum2017"], data["spr2017"], data["win2017"], data["aut2016"]],
  };
  const y2015_2016: QuarterProps = {
    quarters: [data["sum2016"], data["spr2016"], data["win2016"], data["aut2015"]],
  };

  const yearPair = (a: QuarterProps, b?: QuarterProps) => (
    <Stack gap="xl" w="100%">
      <QuarterGroup {...a} />
      {b ? <QuarterGroup {...b} /> : null}
    </Stack>
  );

  const eras: EraSection[] = [
    {
      id: "era-recent",
      title: "Adulting / in the real world",
      subtitle: "Now (we are here)",
      years: "2025 - present",
      content: yearPair(y2026_2027, y2025_2026),
    },
    {
      id: "era-2023-24",
      title: "Adulting / in the real world",
      subtitle: "Joined Sunrun",
      years: "2023 - 2025",
      content: yearPair(y2024_2025, y2023_2024),
    },
    {
      id: "era-2021-22",
      title: "Adulting / in the real world",
      subtitle: "The Octo Years",
      years: "2021 - 2023",
      content: yearPair(y2022_2023, y2021_2022),
    },
    {
      id: "era-uw-ms",
      title: "University of Washington",
      subtitle: "M.S. in Computer Science and Engineering",
      years: "2019 - 2021",
      content: yearPair(y2020_2021, y2019_2020),
    },
    {
      id: "era-uw-bs",
      title: "University of Washington",
      subtitle: "B.S. in Computer Engineering",
      years: "2017 - 2019",
      content: yearPair(y2018_2019, y2017_2018),
    },
    {
      id: "era-edcc",
      title: "Edmonds Community College",
      subtitle: "High School and Community College (Running Start)",
      years: "2015 - 2017",
      content: (
        <Stack gap="xl" w="100%">
          <Stack gap="md" className="timeline-note">
            <Text>
              Before UW, I did Running Start at Edmonds Community College while
              in high school and took AP classes on top of that.
            </Text>
            <Text className="text-muted" size="sm">
              AP Euro and physics; volunteered at Alderwood Middle School&apos;s
              TSA club.
            </Text>
          </Stack>
          <QuarterGroup {...y2016_2017} />
          <Stack gap="sm" className="timeline-note">
            <Text className="text-muted" size="sm">
              AP Calculus BC, AP Chemistry, and AP Statistics; earlier AP
              Calculus AB, AP World History, and CAD classes.
            </Text>
            <Text className="text-muted" size="sm">
              Volunteering: Achievement4Edmonds, Move60, Edmonds Demo Garden.
            </Text>
          </Stack>
          <QuarterGroup {...y2015_2016} />
        </Stack>
      ),
    },
  ];

  const eraIds = eras.map((era) => era.id);

  const expandAll = useCallback(() => {
    setOpenSections(eraIds);
  }, [eraIds]);

  const collapseAll = useCallback(() => {
    setOpenSections([]);
  }, []);

  const goToEra = useCallback((id: string) => {
    setOpenSections((current) =>
      current.includes(id) ? current : [...current, id],
    );
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <div className="page-shell home-flat timeline-page">
      <header className="home-section timeline-page__header">
        <Title order={1} id="timeline-page-title" className="about-page__title">
          Timeline
        </Title>
      </header>

      <Divider className="home-section-divider" />

      <div className="timeline-page__layout home-section">
        <nav aria-label="Timeline sections" className="timeline-page__nav">
          <Text
            component="p"
            size="xs"
            fw={700}
            className="timeline-page__nav-heading"
          >
            Jump to
          </Text>
          <Group gap="xs" className="timeline-page__nav-actions" grow preventGrowOverflow={false}>
            <Button size="compact-xs" variant="light" onClick={expandAll}>
              Expand all
            </Button>
            <Button size="compact-xs" variant="light" onClick={collapseAll}>
              Collapse all
            </Button>
          </Group>
          <ul className="timeline-page__nav-list">
            {eras.map((era) => (
              <li key={era.id}>
                <button
                  type="button"
                  className="timeline-page__nav-link"
                  onClick={() => goToEra(era.id)}
                >
                  <span className="timeline-page__nav-years">{era.years}</span>
                  {era.subtitle ? (
                    <span className="timeline-page__nav-subtitle text-muted">
                      {era.subtitle}
                    </span>
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <Accordion
          multiple
          value={openSections}
          onChange={setOpenSections}
          chevronPosition="right"
          classNames={{
            root: "timeline-accordion",
            item: "timeline-accordion__item",
            control: "timeline-accordion__control",
            label: "timeline-accordion__label",
            panel: "timeline-accordion__panel",
            content: "timeline-accordion__content",
            chevron: "timeline-accordion__chevron",
          }}
        >
          {eras.map((era) => (
            <Accordion.Item key={era.id} value={era.id} id={era.id}>
              <Accordion.Control aria-labelledby={`${era.id}-label`}>
                <Stack gap={2}>
                  <Text
                    id={`${era.id}-label`}
                    className="timeline-accordion__title"
                    fw={700}
                    size="md"
                  >
                    {era.title}
                  </Text>
                  {era.subtitle ? (
                    <Text size="sm" className="text-muted">
                      {era.subtitle}
                    </Text>
                  ) : null}
                  <Text size="sm" className="timeline-accordion__years" ff="monospace">
                    {era.years}
                  </Text>
                </Stack>
              </Accordion.Control>
              <Accordion.Panel>{era.content}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Timeline;
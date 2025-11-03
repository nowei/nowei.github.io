import React from "react";
import {
  QuarterGroup,
  Quarter,
  QuarterProps,
} from "../../components/timeline/Quarter";
import timelineJson from "./timeline.json";
import {
  Container,
  Paper,
  Title,
  Text,
  Divider,
  Space,
  Group,
} from "@mantine/core";

function TimelineSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <Paper shadow="xs" p="md" mb="lg" radius="md" withBorder>
      <Title order={2} mb="xs" style={{ textDecoration: "underline" }}>
        {title}
      </Title>
      {subtitle && (
        <Text size="lg" c="dimmed" mb="sm">
          {subtitle}
        </Text>
      )}
      <Divider mb="md" />
      {children}
    </Paper>
  );
}

function Timeline() {
  let data: { [id: string]: Quarter } = timelineJson;
  let y2025_2026: QuarterProps = {
    quarters: [
      // data["win2026"],
      data["aut2025"],
      data["sum2025"],
      data["spr2025"],
      data["win2025"],
    ],
  };
  let y2024_2025: QuarterProps = {
    quarters: [data["aut2024"]],
  };
  let y2023_2024: QuarterProps = {
    quarters: [
      data["sum2024"],
      data["spr2024"],
      data["win2024"],
      data["aut2023"],
    ],
  };
  let y2022_2023: QuarterProps = {
    quarters: [
      data["sum2023"],
      data["spr2023"],
      data["win2023"],
      data["aut2022"],
    ],
  };
  let y2021_2022: QuarterProps = {
    quarters: [
      data["sum2022"],
      data["spr2022"],
      data["win2022"],
      data["aut2021"],
    ],
  };
  let y2020_2021: QuarterProps = {
    quarters: [
      data["sum2021"],
      data["spr2021"],
      data["win2021"],
      data["aut2020"],
    ],
  };
  let y2019_2020: QuarterProps = {
    quarters: [
      data["sum2020"],
      data["spr2020"],
      data["win2020"],
      data["aut2019"],
    ],
  };
  let y2018_2019: QuarterProps = {
    quarters: [
      data["sum2019"],
      data["spr2019"],
      data["win2019"],
      data["aut2018"],
    ],
  };
  let y2017_2018: QuarterProps = {
    quarters: [
      data["sum2018"],
      data["spr2018"],
      data["win2018"],
      data["aut2017"],
    ],
  };
  let y2016_2017: QuarterProps = {
    quarters: [
      data["sum2017"],
      data["spr2017"],
      data["win2017"],
      data["aut2016"],
    ],
  };
  let y2015_2016: QuarterProps = {
    quarters: [
      data["sum2016"],
      data["spr2016"],
      data["win2016"],
      data["aut2015"],
    ],
  };

  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md" style={{ textAlign: "center" }}>
        Timeline of activities
      </Title>
      <Divider mb="xl" />
      <TimelineSection
        title="Adulting/Real-Worlding"
        subtitle="2025 - Present; Just trying to survive"
      >
        <Group justify="center">{QuarterGroup(y2025_2026)}</Group>
      </TimelineSection>
      <TimelineSection
        title="Adulting/Real-Worlding"
        subtitle="2023 - 2024; Returning to Normal, Nature is Healing"
      >
        <Group justify="center">
          {QuarterGroup(y2024_2025)}
          {QuarterGroup(y2023_2024)}
        </Group>
      </TimelineSection>
      <TimelineSection
        title="Adulting/Real-Worlding"
        subtitle="2021 - 2022; Pandemic Blues 2: Electric Boogaloo"
      >
        <Space h="md" />
        <Group justify="center">
          {QuarterGroup(y2022_2023)}
          {QuarterGroup(y2021_2022)}
        </Group>
      </TimelineSection>
      <TimelineSection
        title="University of Washington"
        subtitle="Master of Science in Computer Science and Engineering"
      >
        <Space h="md" />
        <Group justify="center">
          {QuarterGroup(y2020_2021)}
          {QuarterGroup(y2019_2020)}
        </Group>
      </TimelineSection>
      <TimelineSection
        title="University of Washington"
        subtitle="Bachelor of Science in Computer Engineering"
      >
        <Space h="md" />
        <Group justify="center">
          {QuarterGroup(y2018_2019)}
          {QuarterGroup(y2017_2018)}
        </Group>
      </TimelineSection>
      <TimelineSection
        title="Edmonds Community College"
        subtitle="Associate of Science in Mechanical Engineering and Computer Engineering"
      >
        <Paper p="md" mb="sm" radius="sm" withBorder>
          <Text maw={500} mx="auto" style={{ textAlign: "center" }}>
            Before UW, I did Running Start (taking Community College classes
            while in high school) at Edmonds Community College and took AP
            classes on top of that.
          </Text>
          <Space h="md" />
          <Group justify="center">{QuarterGroup(y2016_2017)}</Group>
          <Text maw={500} mx="auto" mt="md" style={{ textAlign: "center" }}>
            At the time I was also taking AP Euro and a physics class. I
            volunteered at Alderwood Middle School's TSA club.
          </Text>
        </Paper>
        <Space h="md" />
        <Paper p="md" mb="sm" radius="sm" withBorder>
          <Group justify="center">{QuarterGroup(y2015_2016)}</Group>
          <Text maw={500} mx="auto" mt="md" style={{ textAlign: "center" }}>
            At the time I was also taking AP Calculus BC, AP Chemistry, and AP
            Statistics.
          </Text>
          <Text maw={500} mx="auto" style={{ textAlign: "center" }}>
            Before that I took AP Calculus AB and AP World History and some CAD
            classes.
          </Text>
          <Text maw={500} mx="auto" style={{ textAlign: "center" }}>
            Volunteered at Achievement4Edmonds, Move60, and the Edmonds Demo
            Garden.
          </Text>
        </Paper>
        <Space h="xl" />
      </TimelineSection>
    </Container>
  );
}

export default Timeline;

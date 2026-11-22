import { useState, useEffect, type CSSProperties } from "react";
import { PageSection } from "../../../components/layout/PageSection";
import {
  Title,
  Text,
  Divider,
  Stack,
  SimpleGrid,
  Group,
} from "@mantine/core";

function LocalTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const formatted = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Text size="sm" className="text-muted" ff="monospace">
      {formatted}
    </Text>
  );
}

function Hero() {
  return (
    <PageSection>
      <Group
        justify="space-between"
        align="flex-start"
        wrap="wrap"
        gap="xl"
        w="100%"
      >
        <Stack gap="sm" maw={640}>
          <Title order={1} id="home-intro" className="home-hero__name">
            Andrew Wei
          </Title>
          <Stack gap={4}>
            <Text className="home-hero__role" size="lg" fw={600}>
              Staff Software Engineer
            </Text>
            <Text className="text-muted" size="md">
              Professional Engineer
            </Text>
          </Stack>
          <Text size="md" className="home-hero__summary">
            Distributed systems, machine learning, and general software
            engineering.
          </Text>
        </Stack>
        <Stack gap={6} className="home-hero__meta" align="flex-end">
          <Text size="sm" className="text-muted" ta="right">
            Greater Seattle area
          </Text>
          <LocalTime />
        </Stack>
      </Group>
    </PageSection>
  );
}

function AboutMe() {
  return (
    <PageSection id="about-heading" title="About">
      <Stack gap="md" w="100%">
        <Text>
          I grew up in Washington state and spend time volunteering, staying
          active, and exploring food in the greater Seattle area.
        </Text>
        <Text>
          I&apos;m currently a Staff Software Engineer at Sunrun, working
          remotely from the greater Seattle area on software systems for business
          operations.
        </Text>
        <Text>
          Previously I was a senior software engineer at OctoML (then OctoAI,
          which was then acquired!), building out ML deployment infrastructure and
          the SaaS platform.
        </Text>
        <Text>
          I earned an MS and BS in Computer Science & Engineering from the Paul
          G. Allen School at the University of Washington, with a focus on
          distributed systems and machine learning. I spent much of college as a
          teaching assistant.
        </Text>
        <Text size="sm" className="text-muted">
          All opinions are my own.
        </Text>
      </Stack>
    </PageSection>
  );
}

function InterestColumn({
  title,
  accent,
  items,
}: {
  title: string;
  accent: string;
  items: string[];
}) {
  return (
    <div
      className="home-interest-col"
      style={{ "--interest-accent": accent } as CSSProperties}
    >
      <Title order={3} size="h5" className="home-interest-col__title">
        {title}
      </Title>
      <ul className="home-interest-col__list">
        {items.map((item) => (
          <li key={item}>
            <Text size="md">{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Interests() {
  return (
    <PageSection id="interests-heading" title="Interests">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" w="100%">
        <InterestColumn
          title="Technical"
          accent="#145999"
          items={[
            "Machine / deep learning",
            "Distributed systems",
            "Applied algorithms",
            "Pedagogy",
          ]}
        />
        <InterestColumn
          title="Community"
          accent="#12b886"
          items={[
            "Inclusion and diversity",
            "Volunteering",
            "Accessibility",
            "Public transportation",
            "Sustainability",
          ]}
        />
        <InterestColumn
          title="Outside work"
          accent="#fd7e14"
          items={["Food and cooking", "Live music", "Games", "Fitness"]}
        />
      </SimpleGrid>
    </PageSection>
  );
}

function ContactInfo() {
  return (
    <PageSection id="contact-heading" title="Contact">
      <Group gap="sm" wrap="wrap" align="baseline" className="home-contact">
        <Text className="text-muted" size="sm">
          Email
        </Text>
        <Text fw={600} ff="monospace" size="md">
          a.nowei42 [at] gmail.com
        </Text>
      </Group>
    </PageSection>
  );
}

function Home() {
  return (
    <div className="page-shell home-flat">
      <Hero />
      <Divider className="home-section-divider" />
      <AboutMe />
      <Divider className="home-section-divider" />
      <Interests />
      <Divider className="home-section-divider" />
      <ContactInfo />
    </div>
  );
}

export default Home;
import { useState, useEffect, type ReactNode } from "react";
import {
  Title,
  Text,
  Divider,
  List,
  Stack,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

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
      Local time {formatted}
      <Text span className="comment-aside">
        {" "}
        // Seattle area
      </Text>
    </Text>
  );
}

function HomeSection({
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
      {children}
    </section>
  );
}

function Hero() {
  return (
    <HomeSection>
      <Stack gap="md" w="100%">
        <Stack gap={6}>
          <Title order={1} size="h2" id="home-intro">
            Andrew Wei
          </Title>
          <Text className="text-muted" size="lg">
            Staff Software Engineer (and Professional Engineer!)
          </Text>
          <Text size="md">
            Distributed systems, machine learning, general software engineering.
          </Text>
          <Text size="md">Based in the greater Seattle area.</Text>
        </Stack>
        <LocalTime />
      </Stack>
    </HomeSection>
  );
}

function AboutMe() {
  return (
    <HomeSection id="about-heading" title="About Me">
      <Stack gap="md" mt="md" w="100%">
        <Text>
          I grew up in Washington state and spend time volunteering, staying active,
          and exploring food in the greater Seattle area.
        </Text>
        <Text>
          I&apos;m currently a Staff Software Engineer at Sunrun, working remotely from
          the greater Seattle area on software systems for business operations.
        </Text>
        <Text>
          Previously I was a senior software engineer at OctoML (then OctoAI, which was then acquired!),
          building out ML deployment infrastructure and the SaaS platform.
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
    </HomeSection>
  );
}

const MARKER_CONTROL_BLUE = "#145999";
const MARKER_TEAL = "#12b886";
const MARKER_ORANGE = "#fd7e14";

function InterestColumn({
  title,
  markerColor,
  items,
}: {
  title: string;
  markerColor: string;
  items: string[];
}) {
  const marker = (
    <ThemeIcon
      size={24}
      radius="xl"
      variant="filled"
      className="interest-marker"
      style={{ backgroundColor: markerColor, color: "#ffffff" }}
    >
      <IconCheck size={14} stroke={2.5} />
    </ThemeIcon>
  );

  return (
    <div>
      <Title order={3} size="h4" mb="sm">
        {title}
      </Title>
      <List
        classNames={{
          root: "interest-list",
          item: "interest-list__item",
          itemWrapper: "interest-list__row",
          itemIcon: "interest-list__icon",
        }}
        center
        spacing="sm"
        size="md"
        listStyleType="none"
        icon={marker}
      >
        {items.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
    </div>
  );
}

function Interests() {
  return (
    <HomeSection id="interests-heading" title="Interests">
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="md" w="100%">
        <InterestColumn
          title="Technical"
          markerColor={MARKER_CONTROL_BLUE}
          items={[
            "Machine / deep learning",
            "Distributed systems",
            "Applied algorithms",
            "Pedagogy",
          ]}
        />
        <InterestColumn
          title="Community"
          markerColor={MARKER_TEAL}
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
          markerColor={MARKER_ORANGE}
          items={["Food and cooking", "Live music", "Games", "Fitness"]}
        />
      </SimpleGrid>
    </HomeSection>
  );
}

function ContactInfo() {
  return (
    <HomeSection id="contact-heading" title="Contact">
      <Text mt="md" w="100%">
        Email{" "}
        <Text span fw={600}>
          a.nowei42 [at] gmail.com
        </Text>
      </Text>
    </HomeSection>
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
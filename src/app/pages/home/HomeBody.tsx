import { type CSSProperties } from "react";
import { PageSection } from "../../../components/layout/PageSection";
import { Title, Text, Divider, Stack, SimpleGrid, Group } from "@mantine/core";

function AboutMe() {
  return (
    <PageSection id="about-heading" title="About">
      <Stack gap="md" w="100%">
        <Text>
          I grew up in Washington state and spend time volunteering, staying
          active, and exploring the food scene in the greater Seattle area.
        </Text>
        <Text>
          I&apos;m currently a Staff Software Engineer at Sunrun, working
          remotely from the greater Seattle area on software systems for
          business operations.
        </Text>
        <Text>
          Previously, I was a senior software engineer at OctoML (then OctoAI,
          which was then acquired!), building out ML deployment infrastructure
          and the SaaS platform.
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

export function HomeBody() {
  return (
    <>
      <AboutMe />
      <Divider className="home-section-divider" />
      <Interests />
      <Divider className="home-section-divider" />
      <ContactInfo />
    </>
  );
}

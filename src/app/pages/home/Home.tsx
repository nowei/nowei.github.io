import { useState, useEffect } from "react";
import { PageSection } from "../../../components/layout/PageSection";
import { Title, Text, Divider, Stack, Group } from "@mantine/core";
import { HomeBody } from "./HomeBody";

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

function Home() {
  return (
    <div className="page-shell home-flat">
      <Hero />
      <Divider className="home-section-divider" />
      <HomeBody />
    </div>
  );
}

export default Home;

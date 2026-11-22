import { Title, Text, Divider, Stack } from "@mantine/core";
import { PageSection } from "../../components/layout/PageSection";

function AboutList({ items }: { items: string[] }) {
  return (
    <ul className="about-list">
      {items.map((item) => (
        <li key={item}>
          <Text size="md">{item}</Text>
        </li>
      ))}
    </ul>
  );
}

function AboutMe() {
  return (
    <div className="page-shell home-flat">
      <header className="home-section about-page__header">
        <Title order={1} id="about-page-title" className="about-page__title">
          About
        </Title>
      </header>

      <Divider className="home-section-divider" />

      <PageSection id="about-story" title="Story">
        <Stack gap="md" w="100%">
          <Text>
            I grew up in the greater Seattle area and studied computer engineering
            and computer science at the University of Washington, earning a
            combined BS/MS degree. I was a teaching assistant for most of that
            time and enjoyed helping people learn.
          </Text>
          <Text>
            I like to spend time learning and thinking about things. I get lost in
            thought sometimes (maybe even most of the time). I&apos;m not always the
            best in social situations; if that&apos;s the case, know that I don&apos;t
            have anything against anyone, that's just how I am. 
          </Text>
          <Text>
            I'm generally awkward and I&apos;m not always used to the social settings I find myself in.
          </Text>
          <Text>
            I like computer science, tech, and software; but I make no claims to how
            much I actually know or understand. I&apos;m proud to say that it is
            likely a non-negative amount (with high probability!).
          </Text>
        </Stack>
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="about-volunteering" title="Volunteering">
        <Stack gap="md" w="100%">
          <Text>
            I'm currently mostly volunteering my time by talking to college students that reach out to me.
            Or whatever random events I can find the time for.
          </Text>
          <Text>
            Previously, I volunteered as a teacher with TEALS, teaching computer science to
            high school students.
          </Text>
        </Stack>
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="about-work" title="Work">
        <Stack gap="md" w="100%">
          <Text>
            I&apos;m a staff software engineer, working remotely from the Seattle
            area and collaborating with teammates across the country.
          </Text>
          <Text>
            Being a software engineer means that I write code (read: bugs), ship
            it, and fix things that inevitably break in prod. Being a
            senior engineer means I&apos;ve broken prod a handful of times, fixed it a handful
            of times, and attempt to work with people to break it less often.
          </Text>
          <Text>
            I&apos;ve worked at large companies and start-ups and prefer start-up
            environments.
          </Text>
        </Stack>
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="about-principles" title="Principles">
        <AboutList
          items={[
            "Leave things in a better place than when I found them",
            "Build what I need, not what I want",
            "Say no biggie and actually mean it",
            "Try to remain unbothered",
          ]}
        />
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="about-values" title="Values">
        <Stack gap="md" w="100%">
          <Text>Outside of technology, I care about:</Text>
          <AboutList
            items={[
              "Accessibility because everyone deserves a seat at the table",
              "Public transportation because everyone deserves to get around easily",
              "Sustainability because everyone deserves a shot at a future",
            ]}
          />
          <Text>
            In my free time I&apos;m usually at the gym, playing games, grabbing
            food with friends, going to concerts, or watching shows.
          </Text>
        </Stack>
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="about-goals" title="This year">
        <AboutList
          items={[
            "Go to the gym more consistently",
            "Cook more",
            "Get better at a language",
            "Volunteer more",
          ]}
        />
      </PageSection>
    </div>
  );
}

export default AboutMe;
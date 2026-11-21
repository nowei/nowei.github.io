import React from "react";
import { Title, Text, Divider, List, Stack, Container } from "@mantine/core";
import ContentSheet from "../../components/layout/ContentSheet";

function AboutMe() {
  return (
    <Container className="page-shell" component="div">
      <ContentSheet maw={700} mx="auto">
      <Title order={2} className="sheet-heading">
        About Me
      </Title>
      <Divider className="sheet-rule" />
      <Stack gap="md">
        <Text>
          I grew up in the greater Seattle area and studied computer engineering
          and computer science at the University of Washington, earning a
          combined BS/MS degree. I was a teaching assistant for most of that
          time and enjoyed helping people learn.
        </Text>
        <Text>
          I like to spend time learning and thinking about things. I get lost in
          thought sometimes (maybe even most of the time). I'm not always the
          best in social situations; but if that's the case, know that I don't
          have anything against anyone. I'm just really, really awkward and I'm
          not used to social settings.
        </Text>
        <Text>
          I like computer science, tech, and math, but I make no claims to how
          much I actually know or understand. I'm proud to say that it is likely
          a non-negative amount. (With high probability!)
        </Text>
        <Text>
          I like volunteering. I'm currently a volunteer teacher with TEALS to
          teach Computer Science to high school students. I also like
          volunteering for random events when I can find the time or learn about
          them!
        </Text>
        <Text>
          I&apos;m a staff software engineer, working remotely from the Seattle
          area and collaborating with teammates across the country.
        </Text>
        <Text>
          Being a software engineer means that I write code (read: bugs), yeet
          the code into the cloud, and fix things that inevitably crash
          prod(uction). Being a senior software engineer just means that I've
          taken down prod a handful of times and I work with people to try to
          take down prod less frequently.
        </Text>
        <Text>
          I've worked at large companies and start-ups and I have a preference
          for start-up environments.
        </Text>
        <Text fw={700} mt="md">
          Things I try to do:
        </Text>
        <List withPadding size="md">
          <List.Item>
            I try to leave things in a better place than when I found it
          </List.Item>
          <List.Item>I try to build what I need, not what I want</List.Item>
          <List.Item>I try to say no biggie and actually mean it</List.Item>
          <List.Item>I try to remain unbothered 🙏🏻🧘🏻</List.Item>
        </List>
        <Text>
          Besides tech, I'm interested in things like accessibility because
          everyone deserves to have a seat at the table. I like public
          transportation because everyone deserves to be able to go places. I
          like sustainability because everyone deserves to live in a world for
          generations to come.
        </Text>
        <Text>
          Other than that, in my free time, I'm usually at the gym, playing
          games, grabbing food with friends, going to concerts, or watching
          shows.
        </Text>
        <Text fw={700} mt="md">
          Things I want to do this year:
        </Text>
        <List withPadding size="md">
          <List.Item>Go to the gym more consistently</List.Item>
          <List.Item>Cook more</List.Item>
          <List.Item>Get better at a language</List.Item>
          <List.Item>Volunteer more</List.Item>
        </List>
      </Stack>
      </ContentSheet>
    </Container>
  );
}

export default AboutMe;

import React from "react";
import { Paper, Title, Text, Divider, List, Stack } from "@mantine/core";

function AboutMe() {
  return (
    <Paper
      p="md"
      radius="lg"
      shadow="sm"
      withBorder
      style={{ maxWidth: 700, margin: "0 auto" }}
    >
      <Title order={2} mb="sm">
        About Me
      </Title>
      <Divider mb="md" />
      <Stack gap="sm">
        <Text>Hej! Henlo fren!</Text>
        <Text>
          I am just a dude trying to take life one step at a time, unperturbed
          and unbothered.
        </Text>
        <Text>
          I grew up in the greater Seattle area and went to the University of
          Washington to study CompE/CSE for a combined BS/MS degree. I was a
          teaching assistant for the majority of my time at university and I
          really liked interacting with people and watching them learn things.
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
          Professionally, I'm a staff software engineer 👨‍💻, which means that I
          am a professional keyboard and mouse clickity-clacker. I generally
          work remotely, but I'm based in the greater Seattle area and
          collaborate with people across the country (to try) to get things
          done.
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
        <Text>Welp, that's pretty much me.</Text>
      </Stack>
    </Paper>
  );
}

export default AboutMe;

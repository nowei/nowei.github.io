import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Title,
  Text,
  Divider,
  List,
  Group,
  Stack,
  ThemeIcon,
  Center,
  SimpleGrid,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

function parseTime(t: string): [number, number, string] {
  const timeHalfSplit = t.split(" ");
  const halfSplit = timeHalfSplit[1];
  const timeSplit = timeHalfSplit[0].split(":");
  const hour = parseInt(timeSplit[0]);
  const minute = parseInt(timeSplit[1]);
  let key: [number, number, string] = [hour, minute, halfSplit];
  return key;
}

function CurrTime() {
  const [time, setTime] = useState(new Date());
  const emojiMap = new Map<string, string>([
    [JSON.stringify([1, false]), "🕐"],
    [JSON.stringify([1, true]), "🕜"],
    [JSON.stringify([2, false]), "🕑"],
    [JSON.stringify([2, true]), "🕝"],
    [JSON.stringify([3, false]), "🕒"],
    [JSON.stringify([3, true]), "🕞"],
    [JSON.stringify([4, false]), "🕓"],
    [JSON.stringify([4, true]), "🕟"],
    [JSON.stringify([5, false]), "🕔"],
    [JSON.stringify([5, true]), "🕠"],
    [JSON.stringify([6, false]), "🕕"],
    [JSON.stringify([6, true]), "🕡"],
    [JSON.stringify([7, false]), "🕖"],
    [JSON.stringify([7, true]), "🕢"],
    [JSON.stringify([8, false]), "🕗"],
    [JSON.stringify([8, true]), "🕣"],
    [JSON.stringify([9, false]), "🕘"],
    [JSON.stringify([9, true]), "🕤"],
    [JSON.stringify([10, false]), "🕙"],
    [JSON.stringify([10, true]), "🕥"],
    [JSON.stringify([11, false]), "🕚"],
    [JSON.stringify([11, true]), "🕦"],
    [JSON.stringify([12, false]), "🕛"],
    [JSON.stringify([12, true]), "🕧"],
  ]);
  const initTimeKey = parseTime(time.toLocaleTimeString());
  let [timeKey, setTimeKey] = useState(initTimeKey);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      let timeKey = parseTime(time.toLocaleTimeString());
      setTimeKey(timeKey);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  let emoji =
    emojiMap.get(JSON.stringify([timeKey[0], timeKey[1] >= 30])) || "";
  return (
    <Text>
      It is currently {time.toLocaleTimeString()} {emoji}
      {((timeKey[2] === "PM" && timeKey[0] >= 9 && timeKey[0] < 12) ||
        (timeKey[2] === "AM" && timeKey[0] <= 6)) && (
        <Text span c="green">
          {" "}
          // It's time to sleep! 😴
        </Text>
      )}
      {((timeKey[2] === "AM" && timeKey[0] >= 11) ||
        (timeKey[2] === "PM" && (timeKey[0] === 12 || timeKey[0] <= 2))) && (
        <Text span c="green">
          {" "}
          // It's time for lunch! 🥪
        </Text>
      )}
    </Text>
  );
}

function Hero() {
  let globe = "🌎";
  return (
    <Paper
      p="md"
      mb="xl"
      radius="lg"
      shadow="sm"
      withBorder
      w={"100%"}
      mx="auto"
    >
      <Center h={"100%"} mih={"550px"}>
        <Stack m="auto">
          <Center>
            <Text>👋 Hello World! {globe}</Text>
            <Text c="green">// 🚀 My name is Andrew Wei 😎</Text>
          </Center>
          <Center>
            <CurrTime />
          </Center>
        </Stack>
      </Center>
    </Paper>
  );
}

function AboutMe() {
  return (
    <Paper p="md" mb="xl" radius="lg" shadow="sm" withBorder>
      <Title order={2} mb="sm">
        About Me
      </Title>
      <Divider mb="md" />
      <Stack gap={0}>
        <Text>
          I grew up in Washington and I like to spend my time volunteering,
          going to the gym, and eating food 😋
        </Text>
        <Text>
          I'm currently a Staff Software Engineer working remotely at Sunrun, a
          residential solar energy company and I'm located in the greater
          Seattle area.
        </Text>
        <Text>
          Before that, I worked at a start-up called OctoML (now called OctoAI!)
          where I was a senior software engineer.
        </Text>
        <Text>
          I received my MS in Computer Science & Engineering and BS in Computer
          Engineering from the Paul G. Allen School of Computer Science &
          Engineering at the University of Washington.
        </Text>
        <Text>
          I spent most of my time in college as a TA and learning about
          Distributed Systems and Machine Learning.
        </Text>
        <Text>All opinions are my own.</Text>
      </Stack>
    </Paper>
  );
}

function Interests() {
  return (
    <Paper p="md" mb="xl" radius="lg" shadow="sm" withBorder>
      <Title order={2} mb="sm">
        Interests
      </Title>
      <Divider mb="md" />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        <div>
          <Title order={3} size="h4">
            Technical
          </Title>
          <List
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
            spacing="xs"
            size="md"
            withPadding
          >
            <List.Item>Machine/Deep Learning</List.Item>
            <List.Item>Distributed Systems</List.Item>
            <List.Item>Applied Algorithms</List.Item>
            <List.Item>Pedagogy</List.Item>
            <List.Item>Herding cats</List.Item>
          </List>
        </div>
        <div>
          <Title order={3} size="h4">
            Social
          </Title>
          <List
            icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
            spacing="xs"
            size="md"
            withPadding
          >
            <List.Item>Inclusion/Diversity</List.Item>
            <List.Item>Volunteering</List.Item>
            <List.Item>Accessibility</List.Item>
            <List.Item>Public Transportation</List.Item>
            <List.Item>Sustainability</List.Item>
          </List>
        </div>
        <div>
          <Title order={3} size="h4">
            Hobbies
          </Title>
          <List
            icon={
              <ThemeIcon color="orange" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
            spacing="xs"
            size="md"
            withPadding
          >
            <List.Item>Food</List.Item>
            <List.Item>TV</List.Item>
            <List.Item>Games</List.Item>
            <List.Item>Memes</List.Item>
            <List.Item>Listening to music</List.Item>
          </List>
        </div>
      </SimpleGrid>
    </Paper>
  );
}

function ContactInfo() {
  return (
    <Paper p="md" mb="xl" radius="lg" shadow="sm" withBorder>
      <Title order={2} mb="sm">
        Contact Info
      </Title>
      <Divider mb="md" />
      <Text>
        email:{" "}
        <Text span fw={700}>
          a.nowei42[at]gmail.com
        </Text>
      </Text>
    </Paper>
  );
}

function Home() {
  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Hero />
        <AboutMe />
        <Interests />
        <ContactInfo />
      </Stack>
    </Container>
  );
}

export default Home;

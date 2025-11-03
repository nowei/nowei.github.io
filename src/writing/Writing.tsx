import React from "react";
import Recommendations from "./Recommendations";
import SweLife from "./misc/swe-life";
import OnOffBoarding from "./misc/on-off-boarding";
import { Blogs, BlogRoutes } from "./blogs/index";
import { Route, Link } from "react-router-dom";
import {
  Title,
  Text,
  Stack,
  Paper,
  Anchor,
  Divider,
  Space,
} from "@mantine/core";

export function Writing() {
  return (
    <Paper
      p="xl"
      radius="lg"
      withBorder
      shadow="sm"
      mt="lg"
      mx="auto"
      maw={700}
    >
      <Stack gap="md">
        <Blogs />
        <Divider my="sm" />
        <Title order={2}>Misc. writing</Title>
        <Anchor component={Link} to="./misc/swe-life" size="md">
          Stuff I learned as a Software Engineer
        </Anchor>
        <Anchor component={Link} to="./misc/on-boarding-off-boarding" size="md">
          What to do when it's time to go
        </Anchor>
        <Divider my="sm" />
        <Title order={3}>What do you watch/listen to</Title>
        <Anchor component={Link} to="./recommendations" size="md">
          Recommendations
        </Anchor>
        <Space h="xl" />
      </Stack>
    </Paper>
  );
}

export function WritingRoutes() {
  const routes = BlogRoutes().concat([
    <Route path="/writing/misc/swe-life" element={<SweLife />} />,
    <Route
      path="/writing/misc/on-boarding-off-boarding"
      element={<OnOffBoarding />}
    />,
    <Route path="/writing/recommendations" element={<Recommendations />} />,
  ]);
  return routes;
}

export default Writing;

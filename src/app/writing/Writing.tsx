import React from "react";
import { Blogs } from "./blogs/index";
import { Link } from "react-router-dom";
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
    <div className="page-shell" style={{ maxWidth: 780 }}>
      <Paper
        p="xl"
        radius="lg"
        withBorder
        shadow="sm"
        mx="auto"
        maw={700}
        className="page-sheet"
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
    </div>
  );
}

export default Writing;

import { Link } from "react-router-dom";
import { Paper, Title, Text, Divider, Stack, Anchor } from "@mantine/core";

export function Blogs() {
  return (
    <>
      <Stack gap="md">
        <Title order={1}>Blog</Title>
        <Title order={2} size="h3">
          Reflection is good, I guess
        </Title>
        <Divider />
        <Anchor component={Link} to={"./blogs/20240601"} size="md">
          6/1/2024: Cycle times
        </Anchor>
        <Anchor component={Link} to={"./blogs/20231001"} size="md">
          10/1/2023: On Time and Moving On
        </Anchor>
        <Anchor component={Link} to={"./blogs/20221229"} size="md">
          12/29/2022 + 6/18/2023: Why do we do things?
        </Anchor>
        <Anchor component={Link} to={"./blogs/20220504"} size="md">
          5/4/2022: As good a time as any
        </Anchor>
        <Anchor component={Link} to={"./blogs/20200328"} size="md">
          3/28/2020: A new beginning
        </Anchor>
      </Stack>
    </>
  );
}

export { BlogRoutes } from "./routes";

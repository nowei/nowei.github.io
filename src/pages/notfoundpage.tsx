// tslint:disable:max-line-length

import * as React from "react";
import { Link } from "react-router-dom";
import { Container, Paper, Title, Text, Button, Group } from "@mantine/core";

export class NotFoundPage extends React.Component {
  public componentDidMount() {
    document.title = "Not found";
  }

  public render() {
    return (
      <Container size="xs" py="xl">
        <Paper p="xl" radius="lg" shadow="sm" withBorder>
          <Group justify="center" mb="md">
            <Title style={{ color: "red", textAlign: "center" }}>404</Title>
          </Group>
          <Title order={2} mb="sm" style={{ textAlign: "center" }}>
            Page not found
          </Title>
          <Text mb="md" style={{ textAlign: "center" }}>
            The page you requested could not be found.
          </Text>
          <Group justify="center">
            <Button component={Link} to="/" variant="outline" color="blue">
              Home
            </Button>
          </Group>
        </Paper>
      </Container>
    );
  }
}

export default NotFoundPage;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Title, Text, Button, Group, Stack } from "@mantine/core";
import ContentSheet from "../../components/layout/ContentSheet";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Not found";
    return () => {
      document.title = "Andrew Wei";
    };
  }, []);

  return (
    <div className="page-shell" style={{ maxWidth: 480 }}>
      <ContentSheet>
        <Stack gap="md" align="center">
          <Title order={1} c="red" ta="center">
            404
          </Title>
          <Title order={2} ta="center" size="h3">
            Page not found
          </Title>
          <Text ta="center" className="text-muted">
            The page you requested could not be found.
          </Text>
          <Group justify="center" mt="sm">
            <Button component={Link} to="/" variant="subtle">
              Back to home
            </Button>
          </Group>
        </Stack>
      </ContentSheet>
    </div>
  );
}
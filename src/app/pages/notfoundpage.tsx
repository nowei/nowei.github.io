import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Title, Text, Button, Stack, Divider } from "@mantine/core";
import { PageSection } from "../../components/layout/PageSection";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Not found · Andrew Wei";
    return () => {
      document.title = "Andrew Wei";
    };
  }, []);

  return (
    <div className="page-shell home-flat">
      <header className="home-section about-page__header">
        <Title order={1} id="not-found-title" className="about-page__title">
          Page not found
        </Title>
      </header>

      <Divider className="home-section-divider" />

      <PageSection>
        <Stack gap="md" w="100%" maw="65ch">
          <Text className="text-muted">
            The page you requested could not be found. Try the main sections
            below, or head back home.
          </Text>
          <Stack gap="xs">
            <Button component={Link} to="/" variant="subtle">
              Home
            </Button>
            <Button component={Link} to="/about" variant="subtle">
              About
            </Button>
            <Button component={Link} to="/timeline" variant="subtle">
              Timeline
            </Button>
            <Button component={Link} to="/writing" variant="subtle">
              Writing
            </Button>
          </Stack>
        </Stack>
      </PageSection>
    </div>
  );
}
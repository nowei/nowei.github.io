import { Blogs } from "./blogs/index";
import { Link } from "react-router-dom";
import { Title, Text, Stack, Anchor, Divider } from "@mantine/core";
import { PageSection } from "../../components/layout/PageSection";

const miscWriting = [
  {
    to: "/writing/misc/swe-life",
    label: "Stuff I learned as a Software Engineer",
  },
  {
    to: "/writing/misc/on-boarding-off-boarding",
    label: "What to do when it's time to go",
  },
  {
    to: "/writing/misc/pe-computer-engineering",
    label:
      "Studying for the PE Electrical and Computer: Computer Engineering exam",
  },
] as const;

export function Writing() {
  return (
    <div className="page-shell home-flat writing-page">
      <header className="home-section about-page__header">
        <Title order={1} id="writing-page-title" className="about-page__title">
          Writing
        </Title>
        <Text size="md" className="text-muted home-hero__summary" mt="sm">
          Reflection is good, I guess.
        </Text>
      </header>

      <Divider className="home-section-divider" />

      <PageSection id="writing-blog" title="Blog">
        <Blogs />
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="writing-misc" title="Misc. writing">
        <Stack gap="sm" w="100%">
          {miscWriting.map((item) => (
            <Anchor component={Link} to={item.to} size="md" key={item.to}>
              {item.label}
            </Anchor>
          ))}
        </Stack>
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="writing-recs" title="Watch and listen">
        <Anchor component={Link} to="/writing/recommendations" size="md">
          Recommendations
        </Anchor>
      </PageSection>
    </div>
  );
}

export default Writing;
import {
  Group,
  Button,
  Menu,
  rem,
  Center,
  Text,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconExternalLink,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import { Anchor } from "@mantine/core";
import { useEffect, useState, type MouseEvent } from "react";

const Resume = "/resume/WeiAndrew.pdf";
const Resume1C = "/resume/WeiAndrew1C.pdf";
const Resume1CPlain = "/resume/WeiAndrew1CPlain.pdf";
const CVDoc = "/resume/WeiAndrewCV.pdf";

function useSystemPrefersDark(): boolean {
  const [prefersDark, setPrefersDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () => setPrefersDark(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return prefersDark;
}

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Now", to: "/now" },
  { label: "Timeline", to: "/timeline" },
  { label: "Writing", to: "/writing" },
];

const Navbar = () => {
  const location = useLocation();

  const systemPrefersDark = useSystemPrefersDark();

  return (
    <Center
      component="nav"
      aria-label="Primary"
      className="site-nav"
      data-nav-theme={systemPrefersDark ? "dark" : "light"}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "var(--nav-bg)",
        ["--nav-bg" as string]: systemPrefersDark ? "#1f1f1f" : "#dde1e6",
        ["--nav-fg" as string]: systemPrefersDark ? "#c5e4ff" : "#0f4785",
      }}
      w={"100%"}
    >
      <Group
        justify="space-between"
        px="md"
        py="sm"
        w="100%"
        maw={1200}
        wrap="wrap"
        gap="sm"
      >
        <Group gap="lg" wrap="wrap" className="site-nav-primary">
          <Anchor component={Link} to="/" className="site-brand" underline="never">
            Andrew Wei
          </Anchor>
          <Group gap="sm" wrap="wrap" className="site-nav-links">
          {navLinks.map((link) => (
            <Button
              miw={"80px"}
              key={link.to}
              component={Link}
              to={link.to}
              variant="subtle"
              size="md"
              radius="md"
              style={{
                fontWeight: 600,
                fontSize: rem(16),
                padding: "0 18px",
                background: "transparent",
                textDecoration: (() => {
                  const active =
                    link.to === "/"
                      ? location.pathname === "/"
                      : location.pathname === link.to ||
                        location.pathname.startsWith(`${link.to}/`);
                  return active ? "underline" : "none";
                })(),
              }}
            >
              {link.label}
            </Button>
          ))}
          </Group>
        </Group>
        <Group gap="sm" wrap="wrap" className="site-nav-external">
          <Button
            component="a"
            href="https://github.com/nowei"
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            leftSection={<IconBrandGithub size={20} />}
            rightSection={<IconExternalLink size={16} />}
            size="md"
            radius="md"
            style={{
              fontWeight: 500,
              background: "transparent",
            }}
          >
            GitHub
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/nowei/"
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            leftSection={<IconBrandLinkedin size={20} />}
            rightSection={<IconExternalLink size={16} />}
            size="md"
            radius="md"
            style={{
              fontWeight: 500,
              background: "transparent",
            }}
          >
            LinkedIn
          </Button>
          <Menu
            shadow="md"
            width={220}
            position="bottom-end"
            withinPortal
            trigger="click"
            closeOnItemClick
          >
            <Menu.Target>
              <Button
                leftSection={<IconBriefcase size={18} />}
                variant="subtle"
                size="md"
                radius="md"
                aria-haspopup="menu"
                aria-expanded={undefined}
                style={{
                  fontWeight: 500,
                  background: "transparent",
                }}
                onClick={(event: MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                }}
              >
                Resume
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                component="a"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                rightSection={
                  <IconExternalLink
                    size={16}
                    style={{ marginRight: 8, verticalAlign: "middle" }}
                  />
                }
              >
                <Text
                  size="sm"
                  component="span"
                  style={{ verticalAlign: "middle" }}
                >
                  Default resume
                </Text>
              </Menu.Item>
              <Menu.Item
                component="a"
                href={Resume1C}
                target="_blank"
                rel="noopener noreferrer"
                rightSection={
                  <IconExternalLink
                    size={16}
                    style={{ marginRight: 8, verticalAlign: "middle" }}
                  />
                }
              >
                <Text
                  size="sm"
                  component="span"
                  style={{ verticalAlign: "middle" }}
                >
                  1-C Resume
                </Text>
              </Menu.Item>
              <Menu.Item
                component="a"
                href={Resume1CPlain}
                target="_blank"
                rel="noopener noreferrer"
                rightSection={
                  <IconExternalLink
                    size={16}
                    style={{ marginRight: 8, verticalAlign: "middle" }}
                  />
                }
              >
                <Text
                  size="sm"
                  component="span"
                  style={{ verticalAlign: "middle" }}
                >
                  Plain 1-C Resume
                </Text>
              </Menu.Item>
              <Menu.Item
                component="a"
                href={CVDoc}
                target="_blank"
                rel="noopener noreferrer"
                rightSection={
                  <IconExternalLink
                    size={16}
                    style={{ marginRight: 8, verticalAlign: "middle" }}
                  />
                }
              >
                <Text
                  size="sm"
                  component="span"
                  style={{ verticalAlign: "middle" }}
                >
                  CV-ish
                </Text>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Center>
  );
};

export default Navbar;

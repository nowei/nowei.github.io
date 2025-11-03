import {
  Group,
  Button,
  Menu,
  rem,
  Center,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconExternalLink,
} from "@tabler/icons-react";
import Resume from "../../resume/WeiAndrew.pdf";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Resume1C from "../../resume/WeiAndrew1C.pdf";
import Resume1CPlain from "../../resume/WeiAndrew1CPlain.pdf";
import CVDoc from "../../resume/WeiAndrewCV.pdf";

function prefersDarkColorScheme(): boolean {
  // Ensure window and matchMedia are available (e.g., when running in a browser environment)
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  // Default to false or handle server-side rendering scenarios
  return false;
}

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Timeline", to: "/timeline" },
  { label: "Writing", to: "/writing" },
];

const Navbar = () => {
  const location = useLocation();

  let systemPrefersDark = prefersDarkColorScheme();

  return (
    <Center
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
      bg={systemPrefersDark ? "#333" : "lightgray"}
      w={"100%"}
    >
      <Group justify="space-between" px="md" py="sm" w="100%" maw={1200}>
        <Group>
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
                textDecoration:
                  (location.pathname == "/" && link.to == "/") ||
                  (link.to != "/" && location.pathname.includes(link.to))
                    ? "underline"
                    : "none",
              }}
            >
              {link.label}
            </Button>
          ))}
        </Group>
        <Group>
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
            trigger="hover"
          >
            <Menu.Target>
              <Button
                component="a"
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                leftSection={<IconBriefcase size={18} />}
                rightSection={<IconExternalLink size={16} />}
                variant="subtle"
                size="md"
                radius="md"
                style={{
                  fontWeight: 500,
                  background: "transparent",
                }}
              >
                Resume
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
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

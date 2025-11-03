import React from "react";
import {
  Paper,
  Title,
  Text,
  Group,
  Stack,
  Image,
  Anchor,
  Divider,
  SimpleGrid,
} from "@mantine/core";

const projects = require.context("../../pages/projects/docs/", true);
const timelineImages = require.context("/public/images/timeline", true);

interface ActivityContent {
  code?: string;
  name: string;
  description?: string;
}

interface Activity {
  name: string;
  bullet?: boolean;
  content: ActivityContent[];
}

interface SchoolProject {
  name: string;
  content?: string;
  thumbnail?: boolean;
  description?: string;
}

interface SchoolClass {
  code: string;
  name: string;
  dropped?: boolean;
  project?: SchoolProject[];
}

export interface Quarter {
  name: string;
  activities?: Activity[];
  classes?: SchoolClass[];
  images?: string[];
}

export interface QuarterProps {
  quarters: Quarter[];
}

function ClassComp(schoolClass: SchoolClass) {
  return (
    <Paper p="sm" mb="sm" radius="md" withBorder>
      <Stack gap={4}>
        {schoolClass.dropped ? (
          <Text c="red" span>
            <s>
              <b>{schoolClass.code}</b>: {schoolClass.name}
            </s>
          </Text>
        ) : (
          <Text span>
            <b>{schoolClass.code}</b>: {schoolClass.name}
          </Text>
        )}
        {schoolClass.project && (
          <Stack gap={2} style={{ marginTop: 4 }}>
            {schoolClass.project.map((project) => {
              const loadProject = (projectPath: string) => {
                if (projectPath.includes("https")) {
                  return projectPath;
                } else {
                  return projects(`./${projectPath}`);
                }
              };
              return (
                <Text size="sm" key={project.name}>
                  Project:{" "}
                  {project.content ? (
                    <Anchor
                      href={loadProject(project.content)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </Anchor>
                  ) : (
                    project.name
                  )}
                </Text>
              );
            })}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}

function ActivityComp(activity: Activity) {
  return (
    <Paper p="sm" mb="md" radius="md" withBorder>
      <Title order={3} mb={6} style={{ textDecoration: "underline" }}>
        {activity.name}
      </Title>
      <Stack gap={2}>
        {activity.content.map((cont, idx) => (
          <Text key={idx}>
            {cont.code && <b>{cont.code}: </b>}
            {cont.code ? cont.name : <b>{cont.name}</b>}
            {cont.description ? `: ${cont.description}` : null}
          </Text>
        ))}
      </Stack>
    </Paper>
  );
}

function TimelineImage(imagePath: string, idx: number) {
  return (
    <Group justify="center" key={imagePath + idx} my="md">
      <Image
        src={timelineImages(imagePath)}
        width={350}
        radius="md"
        alt="Timeline visual"
        fit="contain"
      />
    </Group>
  );
}

function TimelineImages({ images }: { images: string[] }) {
  return (
    <SimpleGrid
      cols={2}
      spacing="lg"
      verticalSpacing="lg"
      style={{ width: "100%", margin: "0 auto" }}
    >
      {images.map((imagePath, idx) => (
        <Image
          key={imagePath + idx}
          src={timelineImages(imagePath)}
          width="100%"
          height={320}
          radius="md"
          alt="Timeline visual"
          fit="cover"
          style={{
            objectFit: "cover",
            width: "100%",
            maxWidth: 600,
            margin: "0 auto",
          }}
        />
      ))}
    </SimpleGrid>
  );
}

export const QuarterGroup: React.FC<QuarterProps> = ({
  quarters,
}: QuarterProps) => {
  return (
    <Stack gap="xl" w="100%">
      {quarters.map((item, i) => (
        <Paper key={item.name + i} p="md" radius="lg" withBorder shadow="xs">
          <Title order={2} mb="sm">
            {item.name}
          </Title>
          <Divider mb="md" />
          <Stack gap="md">
            {item.activities?.map((activity, idx) => (
              <ActivityComp {...activity} key={activity.name + idx} />
            ))}
            {item.classes && (
              <>
                <Title
                  order={3}
                  mt="md"
                  mb="xs"
                  style={{ textDecoration: "underline" }}
                >
                  Classes
                </Title>
                <Stack gap={4}>
                  {item.classes.map((schoolClass, idx) => (
                    <ClassComp {...schoolClass} key={schoolClass.code + idx} />
                  ))}
                </Stack>
              </>
            )}
            {item.images && item.images.length > 0 && (
              <TimelineImages images={item.images} />
            )}
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

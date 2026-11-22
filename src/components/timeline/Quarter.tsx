import type { FC } from "react";
import {
  Title,
  Text,
  Stack,
  Image,
  Anchor,
  SimpleGrid,
} from "@mantine/core";

function projectHref(projectPath: string) {
  if (projectPath.includes("https")) {
    return projectPath;
  }
  return `/projects/docs/${encodeURIComponent(projectPath)}`;
}

function timelineImageSrc(imagePath: string) {
  const file = imagePath.replace(/^\.\//, "");
  return `/images/timeline/${encodeURIComponent(file)}`;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

function timelineImageAlt(imagePath: string, quarterName: string): string {
  const file = imagePath.replace(/^\.\//, "").replace(/\.[^.]+$/, "");
  const stamp = file.match(/^(\d{4})(\d{2})(\d{2})_/);
  if (stamp) {
    const year = Number(stamp[1]);
    const month = MONTH_NAMES[Number(stamp[2]) - 1];
    const day = Number(stamp[3]);
    return `Photo from ${quarterName}, ${month} ${day}, ${year}`;
  }
  const readable = file.replace(/[_-]+/g, " ");
  return `Photo from ${quarterName}: ${readable}`;
}

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
    <div className="timeline-class">
      {schoolClass.dropped ? (
        <Text c="red" span>
          <s>
            <b>{schoolClass.code}</b>: {schoolClass.name}
          </s>
        </Text>
      ) : (
        <Text>
          <b>{schoolClass.code}</b>: {schoolClass.name}
        </Text>
      )}
      {schoolClass.project?.map((project) => {
        const href = project.content
          ? project.content.includes("https")
            ? project.content
            : projectHref(project.content)
          : null;
        return (
          <Text size="sm" className="text-muted" key={project.name} pl="md">
            Project:{" "}
            {href ? (
              <Anchor
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                {project.name}
              </Anchor>
            ) : (
              project.name
            )}
          </Text>
        );
      })}
    </div>
  );
}

function ActivityComp(activity: Activity) {
  return (
    <article className="timeline-activity">
      <Title order={4} size="h5" mb="xs" fw={600}>
        {activity.name}
      </Title>
      <Stack gap={4}>
        {activity.content.map((cont, idx) => (
          <Text key={idx} size="sm">
            {cont.code && <b>{cont.code}: </b>}
            {cont.code ? cont.name : <b>{cont.name}</b>}
            {cont.description ? `: ${cont.description}` : null}
          </Text>
        ))}
      </Stack>
    </article>
  );
}

function TimelineImages({
  images,
  sectionLabel,
}: {
  images: string[];
  sectionLabel: string;
}) {
  return (
    <section className="timeline-photos">
      <Text size="sm" fw={600} mb="sm" component="div">
        {sectionLabel} ({images.length})
      </Text>
      <SimpleGrid
        cols={{ base: 1, xs: 2 }}
        spacing="sm"
        verticalSpacing="sm"
        className="timeline-images"
      >
        {images.map((imagePath, idx) => (
          <Image
            key={imagePath + idx}
            src={timelineImageSrc(imagePath)}
            width="100%"
            height={168}
            radius="md"
            alt={timelineImageAlt(imagePath, sectionLabel.replace(/^Photos · /, ""))}
            loading="lazy"
            fit="cover"
            className="timeline-images__thumb"
          />
        ))}
      </SimpleGrid>
    </section>
  );
}

export const QuarterGroup: FC<QuarterProps> = ({ quarters }) => {
  return (
    <Stack gap="xl" w="100%" className="timeline-quarter-group">
      {quarters.map((item, i) => (
        <article key={item.name + i} className="timeline-quarter">
          <Title order={3} size="h4" className="timeline-quarter__name">
            {item.name}
          </Title>
          <Stack gap="md" mt="md">
            {item.activities?.map((activity, idx) => (
              <ActivityComp {...activity} key={activity.name + idx} />
            ))}
            {item.classes && item.classes.length > 0 && (
              <div className="timeline-classes">
                <Text
                  size="sm"
                  fw={600}
                  className="home-section__title"
                  mb="sm"
                  component="div"
                >
                  Classes
                </Text>
                <Stack gap="xs">
                  {item.classes.map((schoolClass, idx) => (
                    <ClassComp {...schoolClass} key={schoolClass.code + idx} />
                  ))}
                </Stack>
              </div>
            )}
            {item.images && item.images.length > 0 && (
              <TimelineImages
                images={item.images}
                sectionLabel={`Photos · ${item.name}`}
              />
            )}
          </Stack>
        </article>
      ))}
    </Stack>
  );
};
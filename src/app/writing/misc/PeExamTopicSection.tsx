import { Anchor, Stack, Text, Title } from "@mantine/core";
import type { PeExamResource, PeExamTopic } from "./pe-exam-topics";

const SUBTOPIC_LABELS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function defaultLinkTitle(kind: PeExamResource["kind"]): string {
  if (kind === "book") {
    return "Book";
  }
  if (kind === "playlist") {
    return "Playlist";
  }
  if (kind === "video") {
    return "Video";
  }
  return "Link";
}

function PeExamResourceLine({ resource }: { resource: PeExamResource }) {
  const linkTitle = resource.linkTitle ?? defaultLinkTitle(resource.kind);

  return (
    <Text size="sm" className="pe-exam-resource">
      {resource.text}{" "}
      <Anchor
        href={resource.href}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
        className="pe-exam-resource__link"
      >
        {linkTitle}
      </Anchor>
    </Text>
  );
}

function PeExamResourceBlock({
  resources,
  idPrefix,
  className,
  label,
}: {
  resources: PeExamResource[];
  idPrefix: string;
  className: string;
  label?: string;
}) {
  if (resources.length === 0) {
    return null;
  }

  return (
    <Stack gap={4} className={className} mt="xs">
      {label ? (
        <Text size="xs" fw={600} className="pe-exam-resources__label">
          {label}
        </Text>
      ) : null}
      {resources.map((resource) => (
        <PeExamResourceLine
          key={`${idPrefix}-${resource.href}-${resource.text}`}
          resource={resource}
        />
      ))}
    </Stack>
  );
}

export function PeExamTopicSection({ topic }: { topic: PeExamTopic }) {
  return (
    <article className="pe-exam-topic" id={topic.id}>
      <Title order={3} size="h4" className="pe-exam-topic__title">
        {topic.index}. {topic.title}{" "}
        <Text component="span" className="text-muted" size="sm" fw={500}>
          ({topic.questions} questions)
        </Text>
      </Title>

      <PeExamResourceBlock
        resources={topic.resources}
        idPrefix={`${topic.id}-topic`}
        className="pe-exam-topic__resources"
        label="Section-wide resources"
      />

      <Stack gap="lg" className="pe-exam-topic__outline" mt="md">
        {topic.subtopics.map((subtopic, idx) => (
          <div key={`${topic.id}-${idx}`} className="pe-exam-subtopic">
            <div className="pe-exam-subtopic__heading">
              <Text span fw={600} className="pe-exam-subtopic__letter" size="md">
                {SUBTOPIC_LABELS[idx]}.
              </Text>
              <Text span size="md">
                {subtopic.label}
              </Text>
            </div>

            <PeExamResourceBlock
              resources={subtopic.resources}
              idPrefix={`${topic.id}-${idx}`}
              className="pe-exam-subtopic__resources"
            />
          </div>
        ))}
      </Stack>
    </article>
  );
}
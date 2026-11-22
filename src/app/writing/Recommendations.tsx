import { Title, Text, Divider, Stack } from "@mantine/core";
import { PageSection } from "../../components/layout/PageSection";
import { WritingDocLayout } from "./WritingDocLayout";

type RecGroup = {
  title: string;
  note?: string;
  items: string[];
};

const tvShows: RecGroup = {
  title: "TV shows",
  note: "TV shows are hard because most episodes are around 40 minutes and span multiple seasons.",
  items: [
    "Silicon Valley",
    "Love",
    "Stranger Things",
    "The Bear",
    "Ted Lasso",
    "The Marvelous Mrs. Maisel",
  ],
};

const cartoons: RecGroup = {
  title: "Cartoons",
  items: [
    "Bojack Horseman",
    "Futurama",
    "Rick & Morty",
    "Archer",
    "Arcane",
    "The Dragon Prince",
    "Avatar: The Last Airbender (not the blue people and not the live action)",
    "Tear Along the Dotted Line",
  ],
};

const musicGroups: RecGroup[] = [
  {
    title: "Artists I listen to while working",
    items: [
      "DJ Okawari",
      "Sigur Rós",
      "Yndi Halda",
      "RADWIMPS",
      "EVE",
      "Grieves",
      "Marshmello",
    ],
  },
  {
    title: "Artists I've put on repeat",
    items: [
      "City Girl",
      "Juniper Vale",
      "X Ambassadors",
      "Grieves",
      "Of Monsters and Men",
      "Bon Iver",
    ],
  },
  {
    title: "Songs I've put on repeat",
    items: [
      "Daylight — David Kushner",
      "Not Too Late — Lemaitre",
      "Take Me Out — Franz Ferdinand",
      "Valerian — Raujika",
      "A Little More — Hazzy",
      "Nuvole Bianche — Ludovico Einaudi, Alessia Tondo",
      "Welcome to the Black Parade — My Chemical Romance",
    ],
  },
  {
    title: "Sad songs",
    items: [
      "Fallen — Gert Taberner",
      "Not That Simple — Mike Posner",
      "It's Ok — Tom Rosenthal",
      "The Night We Met — Lord Huron",
    ],
  },
  {
    title: "Personal favorites",
    items: [
      "Mr. Brightside — The Killers",
      "Daylight — Matt and Kim",
      "Venice — The Lighthouse and The Whaler",
      "You're Beautiful — James Blunt",
    ],
  },
  {
    title: "Songs you probably haven't heard",
    items: [
      "Beautiful Things — Gungor",
      "Surgical Rewind — Will Champlin",
      "Sky High — SoulChef, Chima Anya",
      "Tied To Our Words — Late June",
      "Twenty Past Four — Kognitif",
    ],
  },
];

function RecommendationList({ group }: { group: RecGroup }) {
  return (
    <Stack gap="sm" className="recommendations-group">
      <Title order={3} size="h4" className="recommendations-group__title">
        {group.title}
      </Title>
      {group.note ? (
        <Text size="md" className="text-muted">
          {group.note}
        </Text>
      ) : null}
      <ul className="about-list recommendations-list">
        {group.items.map((item) => (
          <li key={item}>
            <Text size="md">{item}</Text>
          </li>
        ))}
      </ul>
    </Stack>
  );
}

function Recommendations() {
  return (
    <WritingDocLayout
      title="Recommendations"
      subtitle="Stuff I watch and listen to — not a complete list, just things I'd point people at."
    >
      <PageSection id="recommendations-watch" title="Watch">
        <Stack gap="xl" w="100%">
          <Text size="md">
            I watch a lot of stuff, but here&apos;s what I would recommend.
          </Text>
          <RecommendationList group={tvShows} />
          <RecommendationList group={cartoons} />
        </Stack>
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="recommendations-listen" title="Listen">
        <Stack gap="xl" w="100%">
          <Text size="md">
            I listen to pretty much anything, but lately I&apos;ve been more into
            instrumental, hip-hop, and music sung in languages I don&apos;t
            understand.
          </Text>
          {musicGroups.map((group) => (
            <RecommendationList key={group.title} group={group} />
          ))}
        </Stack>
      </PageSection>
    </WritingDocLayout>
  );
}

export default Recommendations;
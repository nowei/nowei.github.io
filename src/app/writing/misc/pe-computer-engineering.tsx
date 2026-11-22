"use client";

import { useCallback, useEffect, useState, type MouseEvent } from "react";
import {
  Title,
  Text,
  Divider,
  Stack,
  List,
  Anchor,
  Accordion,
} from "@mantine/core";
import { WritingDocLayout } from "../WritingDocLayout";
import { PE_COMPUTER_ENGINEERING_TOPICS } from "./pe-exam-topics";
import { PeExamTopicSection } from "./PeExamTopicSection";

type TocEntry = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

const TOC: TocEntry[] = [
  { id: "pe-journey", label: "Journey" },
  {
    id: "pe-study-material",
    label: "Study material",
    children: PE_COMPUTER_ENGINEERING_TOPICS.map((topic) => ({
      id: topic.id,
      label: `${topic.index}. ${topic.title}`,
    })),
  },
];

const EXAM_TOPIC_IDS = new Set(
  PE_COMPUTER_ENGINEERING_TOPICS.map((topic) => topic.id),
);

function scrollToSection(id: string) {
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function PeComputerEngineering() {
  const [journeyOpen, setJourneyOpen] = useState<string | null>(null);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) {
      return;
    }
    if (hash === "pe-journey") {
      setJourneyOpen("pe-journey");
      setScrollTarget(hash);
      return;
    }
    if (hash === "pe-study-material" || EXAM_TOPIC_IDS.has(hash)) {
      setScrollTarget(hash);
    }
  }, []);

  useEffect(() => {
    if (!scrollTarget) {
      return;
    }
    if (scrollTarget === "pe-journey" && journeyOpen !== "pe-journey") {
      return;
    }
    scrollToSection(scrollTarget);
    setScrollTarget(null);
  }, [journeyOpen, scrollTarget]);

  const onTocClick = useCallback(
    (id: string, event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      window.history.replaceState(null, "", `#${id}`);
      if (id === "pe-journey") {
        setJourneyOpen("pe-journey");
        setScrollTarget(id);
        return;
      }
      setScrollTarget(id);
    },
    [],
  );

  return (
    <WritingDocLayout
      title="Studying for the PE Electrical and Computer: Computer Engineering exam"
      wide
    >
        <nav aria-label="Table of contents">
          <Title order={2} size="h4" className="home-section__title">
            Contents
          </Title>
          <ul className="about-list writing-toc__list">
            {TOC.map((item) => (
              <li key={item.id}>
                <Anchor
                  href={`#${item.id}`}
                  size="md"
                  onClick={(event) => onTocClick(item.id, event)}
                >
                  {item.label}
                </Anchor>
                {item.children && item.children.length > 0 ? (
                  <ul className="about-list writing-toc__sublist">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Anchor
                          href={`#${child.id}`}
                          size="sm"
                          onClick={(event) => onTocClick(child.id, event)}
                        >
                          {child.label}
                        </Anchor>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <Divider my="sm" />

        <Accordion
          value={journeyOpen}
          onChange={setJourneyOpen}
          chevronPosition="right"
          classNames={{
            root: "timeline-accordion writing-accordion",
            item: "timeline-accordion__item",
            control: "timeline-accordion__control",
            panel: "timeline-accordion__panel",
            content: "timeline-accordion__content",
            chevron: "timeline-accordion__chevron",
          }}
        >
          <Accordion.Item value="pe-journey" id="pe-journey">
            <Accordion.Control aria-labelledby="pe-journey-title">
              <Title order={2} id="pe-journey-title" className="home-section__title">
                Journey
              </Title>
            </Accordion.Control>
            <Accordion.Panel>
              <Stack gap="md">
                <Text>
                  I graduated from undergrad back in 2019 with a degree in Computer
                  Engineering and then finished my master&apos;s degree in Computer
                  Science &amp; Engineering in 2021.
                </Text>
                <Text>
                  When I was in college, I was kind of curious about getting a
                  Professional Engineering License. I was studying engineering, so I
                  felt like I should get a license for it as a part of being able to
                  call myself an engineer.
                </Text>
                <Text>
                  Engineering licensing in America is usually regulated on a
                  state-by-state basis and the tests are administered by the National
                  Council of Examiners for Engineering and Surveying (NCEES), but
                  generally the steps are the following:
                </Text>
                <List withPadding>
                  <List.Item>Have an accredited engineering degree</List.Item>
                  <List.Item>
                    Pass the Fundamentals of Engineering exam (FE) to become an
                    Engineer-in-Training
                  </List.Item>
                  <List.Item>
                    Have at least four years of experience (grad school may count
                    toward some of this) under the supervision of a licensed PE
                  </List.Item>
                  <List.Item>
                    Pass the Principles and Practice of Engineering exam (PE)
                  </List.Item>
                  <List.Item>
                    Apply through your state for a license
                  </List.Item>
                </List>
                <Text>
                  In terms of timing, you can take the FE exam before you graduate
                  from college and in some states, they allow you to take the PE exam
                  before you finish your four years of experience.
                </Text>
                <Text>
                  When I graduated and became a software engineer, I didn&apos;t think
                  about this for a while, as I was focused on learning the ropes of
                  the trade. What I came to realize is that software is like the Wild
                  Wild West. There is no number of licenses or certifications you
                  actually need to do the work. You just need to be able to
                  show/communicate that you are able to do the work. Or have enough
                  experience on your resume to show a history of being able to do the
                  work. For specializations like IT or security, there might be some
                  certifications that show a basic level of understanding in a topic,
                  but at the end of the day, what I learned is that people just care
                  about the ability to do work.
                </Text>
                <Text>
                  So back when I was in college (~2017/2018), the NCEES had a Software
                  Engineering exam, which is what I was kind of looking into at that
                  point in my life. Unfortunately, they cancelled the exam in 2018
                  because only 81 people ever took it over the span of ~6 years.
                </Text>
                <Text>
                  Licensure and regulation didn&apos;t really jive in the realm of
                  Software Engineering, since the landscape changes every few years
                  and the idea of what we consider to be best practices evolve in
                  parallel or new standards are introduced because some smart cookie
                  figured out a slightly more optimal way to do something.
                </Text>
                <Text>
                  Will I need to use it in my career? Probably not, but maybe? But I
                  still wanted to get a license (maybe it was for the love of the
                  game).
                </Text>
                <Text>
                  So back in the Spring of 2025, I remembered that engineering
                  licensing was a thing, so I looked at the steps required to pass.
                  I&apos;d been working as a Software Engineer for approximately four
                  years at this point.
                </Text>
                <Text>
                  Would I have had a higher chance of passing the PE Software
                  Engineering exam after spending years as a software engineer? I
                  think so, yeah. But the test was decommissioned by the time I
                  graduated from university. Since they removed the PE Exam for
                  Software Engineering, I figured that I would have to take the PE
                  Computer Engineering Exam. But in order to do that, I had to first
                  take the FE exam.
                </Text>
                <Text>
                  So there is a FE Electrical and Computer exam, but I didn&apos;t
                  actually study Electrical Engineering much outside of what I learned
                  in my Computer Engineering classes. Back when I was in community
                  college, I was considering getting both a Computer Engineering and
                  Mechanical Engineering degree because those were topics that were
                  interesting to me back then. So I ended up taking a lot of the
                  pre-requisites for those majors and doing pretty well in those
                  classes. (Tangent: Unfortunately the ME department at UW told me
                  that they wouldn&apos;t let me double-major in two engineering majors
                  while the CompE department told me, &quot;yolo, do what you
                  want,&quot; so I ended up becoming a CompE major.) This information
                  is relevant because there was one FE exam option called &quot;FE:
                  Other Disciplines&quot; which had questions from basically all of the
                  classes I took back in community college including thermodynamics,
                  dynamics, mechanics of materials, statics, etc. I think I am more
                  like a jack-of-all-trades in terms of knowledge. Like I have enough
                  knowledge in many subjects to be stupid and acknowledge my own
                  ignorance in many domains, so this was actually the perfect FE exam
                  for me because I didn&apos;t really know much about electrical
                  engineering.
                </Text>
                <Text>
                  Would I have been able to pass the FE Exam for Other Disciplines back
                  in community college? I think so, yeah. At this point in time, I had
                  been out of college for a few years and had essentially forgotten
                  everything. Anyways, I registered for the FE: Other Disciplines exam
                  and started studying for it, trying to recall what I had learned back
                  when my brain had more plasticity.
                </Text>
                <Text>I took the exam in August 2025 and I passed.</Text>
                <Text>
                  Then I went to go apply for the PE exam, but then I learned that
                  Washington (the state I live in) required submitting a NCEES record
                  to show that I had at least 4 years of experience + 5 professional
                  references in order to register for the exam. Unfortunately, I worked
                  as a software engineer and there are generally no PEs that work
                  strictly as software engineers. It is kind of funny because there
                  might be at most 81 people licensed as a PE for Software Engineering
                  in the US. Thankfully, the Board of Registration for Professional
                  Engineers &amp; Land Surveyors were very understanding and said that I
                  would be fine with just my years of experience and my references. I
                  asked a few folks from previous jobs and a couple folks from my
                  current job for references and they asked NCEES to let me transmit
                  the record over to them and they approved my request to take the PE
                  exam.
                </Text>
                <Text>
                  There are technically 3 PE Electrical and Computer exams: one for
                  Power; one for Electronics, Controls, and Communications; and the last
                  for Computer Engineering. So I registered for the PE Electrical and
                  Computer: Computer Engineering exam. At this point I had to come to
                  terms with the fact that I needed to study more for the electrical
                  engineering parts and whatever related topics that would show up.
                  Fortunately, NCEES posts the exam topics and they have a practice test
                  you can purchase which gives you an idea of what the test will be
                  like.
                </Text>
                <Text>
                  Would I have had a higher chance of passing the PE Electrical and
                  Computer: Computer Engineering Exam right after college? I think so,
                  yeah. It&apos;d been many years since I graduated at this point and a
                  lot of the things I learned back in college were no longer fresh in my
                  mind, especially the electrical engineering portions from undergrad.
                </Text>
                <Text>
                  There was one more issue that had to be resolved and it&apos;s
                  actually part of why the study material section exists. There was not
                  actually much study material for the exam, since this wasn&apos;t a
                  common test. Between October 1st, 2024 to September 30th, 2025: 3951
                  people took the Power exam, 196 took the Controls one, and 26 took the
                  Computer Engineering exam. You could say that people who take the exam
                  are kind of like rare pokemons.
                </Text>
                <Text>
                  In any case, I looked at the topics from the NCEES website and
                  essentially read books/watched YouTube videos on the topics, and took
                  the NCEES practice exam.
                </Text>
                <Text>
                  After weeks of studying and getting stressed out about other things in
                  my life, I took the exam in October 2026. I found out that I passed on
                  November 4th, 2026 and finished my application to become a Professional
                  Engineer in the state of Washington and got my application approved on
                  the same day.
                </Text>
                <Text>
                  This is to say that I am now a Professional Engineer in the State of Washington
                  and will have to renew my license every couple of years.
                </Text>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Divider className="home-section-divider" my="lg" />

        <section id="pe-study-material" aria-labelledby="pe-study-material-title">
          <Title
            order={2}
            id="pe-study-material-title"
            className="home-section__title"
          >
            Study material (For those who come after)
          </Title>

          <Stack gap="md" mt="md">
            <Text>
              As I was cleaning my room, I came across the papers that I used for studying for
              the exam and decided that I should post the books, videos, and playlists that I
              read/watched while I was studying. This is mostly because the amount of resources 
              available for this specific PE exam is not very fleshed out when compared to the
              other PE Electrical and Computer Engineering exams.
            </Text>

            <Title order={3} size="h4" className="writing-pe-subsection-title">
              FE: Other Disciplines
            </Title>
            <List withPadding>
              <List.Item>
                <em>
                  FE Other Disciplines Practice Problems
                </em>{" "}
                by Michael R. Lindeburg, PE
              </List.Item>
            </List>

            <Title order={3} size="h4" className="writing-pe-subsection-title">
              PE Electrical and Computer: Computer Engineering
            </Title>
            <List withPadding>
              <List.Item>
                NCEES PE Electrical and Computer: Computer Engineering practice
                exam (the official one from the website).
              </List.Item>
            </List>
            <Title order={3} size="h4" className="writing-pe-subsection-title">
              Recommended textbooks (for those who are better at reading textbooks than watching videos (not me))
            </Title>
            <List withPadding>
              <List.Item>
                <a href="https://www.amazon.com/dp/0471362093">The Architecture of Computer Hardware and System Software</a> by Irv Englander
              </List.Item>
              <List.Item>
                <a href="https://www.amazon.com/Computer-Software-Hardware-Engineering-Applications/dp/1118037456">
                Computer, Network, Software, and Hardware Engineering with Applications</a> by Norman F. Schneidewind
              </List.Item>
              <List.Item>
                <a href="https://www.amazon.com/dp/0132128381">Digital Design Principles And Practices</a> by John F. Wakerly
              </List.Item>
              <List.Item>
                <a href="https://www.amazon.com/dp/0137053460">Software Engineering</a> by Ian Sommerville
              </List.Item>
              <List.Item>
                <a href="https://www.amazon.com/dp/B006ZMGCVS">Computer Organization and Design: The Hardware/Software Interface</a> by David A. Patterson and John L. Hennessy
              </List.Item>
              <List.Item>
                <a href="https://www.amazon.com/dp/0132126958">Computer Networks</a> by Andrew S. Tanenbaum and David J. Wetherall
              </List.Item>
            </List>

            <Text className="text-muted" size="sm">
              Exam outline from NCEES (question counts per section).
            </Text>

            <Stack gap="xl" className="pe-exam-topics">
              {PE_COMPUTER_ENGINEERING_TOPICS.map((topic) => (
                <PeExamTopicSection key={topic.id} topic={topic} />
              ))}
            </Stack>

            <Divider className="home-section-divider" my="lg" />

            <Stack gap="md" className="pe-study-afterword">
              <Text>
                If you took the exam and also had other resources that you liked
                looking at, please let me know and I can update the list. I also
                recognize that some of the links were to AI-generated content,
                which is unfortunate but I had a hard time finding resources that
                gave a broad overview of many topics.
              </Text>
              <Text>
                To evaluate whether you&apos;re ready, I recommend getting the
                practice exam from NCEES as that is the most similar to the actual
                exam.
              </Text>
              <Text>
                At some point it may be more beneficial to know what is on the PE
                Handbook that you&apos;ll use on the exam than to study the separate
                topics more—for example, which equations are in the handbook vs.
                not, or which software development paradigms are absent from it.
              </Text>
              <Text>
                Best of luck. It&apos;s better to have something down for every
                question and revisit the ones you&apos;re unsure about than to stay
                stuck on one problem.
              </Text>
            </Stack>
          </Stack>
        </section>
    </WritingDocLayout>
  );
}

export default PeComputerEngineering;
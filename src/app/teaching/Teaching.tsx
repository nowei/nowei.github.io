"use client";

import { useEffect } from "react";
import { Title, Text, Divider, Stack } from "@mantine/core";
import { PageSection } from "../../components/layout/PageSection";

function Teaching() {
  useEffect(() => {
    document.title = "Teaching · Andrew Wei";
    return () => {
      document.title = "Andrew Wei";
    };
  }, []);

  return (
    <div className="page-shell home-flat">
      <header className="home-section about-page__header">
        <Title order={1} id="teaching-page-title" className="about-page__title">
          Teaching
        </Title>
        <Text size="md" className="text-muted home-hero__summary" mt="sm">
          I spent a lot of college helping people learn.
        </Text>
        <Text>
          I still like, but I don&apos;t have a classroom of my own at the
          moment.
        </Text>
      </header>

      <Divider className="home-section-divider" />

      <PageSection id="teaching-uw" title="University of Washington">
        <Stack gap="md" w="100%">
          <Text>
            I was a teaching assistant in the Paul G. Allen School of Computer
            Science &amp; Engineering from 2018 to 2021, including as a graduate
            TA from 2019 to 2021.
          </Text>
          <Text>
            As a graduate TA I supported the Distributed Systems, Machine
            Learning, and Machine Learning for Big Data courses: held weekly
            office hours, graded projects, and held sections. My average section
            rating was 4.6 out of 5.
          </Text>
          <Text>
            Before that I was a TA for the Statistics for CS, Databases, and
            Intro to Data Science courses, and helped move undergraduate
            projects onto git so students practice could version control.
          </Text>
          <Text>In 2021, I received the Bob Bandes Teaching Award.</Text>
        </Stack>
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="teaching-teals" title="TEALS">
        <Stack gap="md" w="100%">
          <Text>
            From 2022 to 2025 I volunteered with TEALS as a teacher and TA,
            teaching high school students Python on the Carnegie Mellon
            University CS Academy platform (a graphics-based Python
            environment).
          </Text>
          <Text>
            That stretch ended in 2025 when the program shifted toward an
            AI-focused format, and I am not currently teaching with them.
          </Text>
        </Stack>
      </PageSection>

      <Divider className="home-section-divider" />

      <PageSection id="teaching-now" title="Now">
        <Text>
          I&apos;m not in a classroom this year. Most of the teaching-shaped
          time I have is talking with college students who reach out to me or
          helping college kids with some interview preparation or resume
          reviews. Pedagogy is still something I care about; so it'd be
          something I'd be interested in doing again if the opportunity arises.
        </Text>
      </PageSection>
    </div>
  );
}

export default Teaching;

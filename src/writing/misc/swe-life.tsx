import React from "react";
import { Paper, Title, Text, Divider, Stack, List } from "@mantine/core";

function SweLife() {
  return (
    <Paper
      p="xl"
      radius="lg"
      withBorder
      shadow="sm"
      mt="lg"
      mx="auto"
      maw={900}
    >
      <Stack gap="md">
        <Title order={1}>Things I learned as a Software Engineer</Title>
        <Divider />
        <Title order={2} ta="center">
          Stuff I learned as a Software Engineer (at a larger company in a
          start-up-ish team)
        </Title>
        <Title order={3}>Year 3</Title>
        <List withPadding>
          <List.Item>
            There's a tradeoff between best-practices and shipping things;
            ideally teams find the right balance so that they can ship things
            confidently and there are less techincal silos. Make things easier
            for other people to pick up in case other people need to work on
            things.
          </List.Item>
          <List.Item>
            Everyone has different experiences and different companies operate
            at different levels according to their culture
          </List.Item>
          <List.Item>
            Depending on the business, the technology serves the business vs.
            the technology is the business. When technology serves the business,
            try to focus on things that will make a business impact as fast as
            possible. A business starts to die when things are slow and business
            needs are not met.
          </List.Item>
          <List.Item>
            Jumping around and helping coworkers is fine, but remember to focus
            on your main tasks/projects.
          </List.Item>
          <List.Item>
            "Thou shalt get side-tracked by bullshit every time" - while
            watching Fallout
          </List.Item>
        </List>
        <Title order={2} ta="center">
          I've been working for a while. Stuff I learned as a Software Engineer
          (at a Startup)
        </Title>
        <Title order={3}>Year 3</Title>
        <List withPadding>
          <List.Item>
            Everyone eventually leaves, even if it's comfortable, even if the
            people you work with are great and cool, try to figure out why you
            would leave and what you're trying to accomplish
          </List.Item>
          <List.Item>
            You should try to avoid technical silos because it feels like the
            work is done in isolation and that makes it harder to see impact and
            is risky in terms of bus-factor
          </List.Item>
          <List.Item>
            You are generally contractually obligated to work 40 hours a week.
            If you work more than 40 hours in a week, you should let people know
            and try to avoid it. This is partly due to burnout reasons and the
            fact that working more than 40 hours diminishes your $/hour returns.
          </List.Item>
          <List.Item>
            When choosing what work to prioritize, generally prioritize the work
            that would unblock the most people in the least amount of time.
          </List.Item>
          <List.Item>
            Glue work is very important for keeping things running and it's
            usually not the coolest thing around, but it's generally appreciated
          </List.Item>
          <List.Item>
            Being flexible is nice, but if there's something that you want to
            work on, try to do that to see if you like it or not.
          </List.Item>
        </List>
        <Title order={3}>Year 2</Title>
        <List withPadding>
          <List.Item>
            People like people who help others and jump on things fast
          </List.Item>
          <List.Item>How do you work sustainably? Questionable</List.Item>
          <List.Item>
            To get good at asking questions, ask a lot of questions to figure
            out what are good questions and what are bad questions
          </List.Item>
          <List.Item>
            Do I even like what I'm working on? It's hard to say, it seems like
            necessary work (although arguably a lot of work in some views may be
            seen as unncessary)
          </List.Item>
        </List>
        <Title order={3}>Advice from Peter (v good, best senior)</Title>
        <List withPadding>
          <List.Item>
            "For things with no answers, try to develop muscles w/o necessarily
            knowing what the right answer is"
          </List.Item>
          <List.Item>
            "Don't spend too much time fixing bugs, start with the best solution
            you can think of at the moment and ask for feedback. Come up with
            something defensible and if it's too bad, people will say something.
            Be able to evaluate ideas without running everything down all the
            way. Increase scope and context, narrow down on details when
            necessary."
          </List.Item>
          <List.Item>Seek out fun problems</List.Item>
          <List.Item>
            What is the day-to-day? what do you enjoy? Are you happy with what
            you do and the things you work on? Sometimes analyzing whether you
            enjoyed this so far doesn't work because things can change,
            sometimes you have to take a chance.
          </List.Item>
          <List.Item>
            How can you pursue the things that bring you joy? Sometimes you
            don't always know what the right choice is and many things aren't
            reversible. Most of the time you can't be 100% sure about whether
            something is the right choice, so you kind of just need to convince
            yourself that it's the right choice. Many things can become unknown
            and if stuff changes, you kind of just have to handle it.
          </List.Item>
          <List.Item>
            Make MRs to at least start the discussion. Maybe there's a better
            way to do something?
          </List.Item>
          <List.Item>
            The only good thing high-level docs are for is discussion of API and
            should not be overtly designed around implementation constraints.
            What is the essence of what you're trying to do? Bad APIs are
            ambigous, try to make it less ambiguous and break down the problem
            into multiple steps, tasks.
          </List.Item>
        </List>
        <Title order={3}>Year 1</Title>
        <List withPadding>
          <List.Item>
            Testing is important, but don't bend over backwards to get 100% code
            coverage if the codebase isn't set up in a way that is easily
            testable
          </List.Item>
          <List.Item>
            If code isn't easily testable, maybe things can be improved so that
            things are more self-contained/testable? Can the parts be mocked out
            to test the different code paths?
          </List.Item>
          <List.Item>
            If broken things bug you or other people, attempt to fix things even
            though it's not your fault that something is broken. Prioritize work
            to prevent work for others.
          </List.Item>
          <List.Item>
            Determine what your priorities are. Sometimes some tickets are more
            important than others, especially if something unblocks another
            person.
          </List.Item>
          <List.Item>
            Make an effort to remember things that people say, otherwise it's
            rude if people have to keep bringing something up, since it seems
            like you weren't listening or something. You can write things down,
            but make an effort to keep what they said in mind. "If you want to
            forget something, write it down."
          </List.Item>
          <List.Item>
            Stand up for yourself on the work that you're doing - figure out
            what the highest-value contribution you can be making is and work
            towards that.
          </List.Item>
          <List.Item>
            Take some time to plan out what you're going to do the next day/next
            week
          </List.Item>
          <List.Item>
            Don't get stuck on naming things, but give it a little bit of
            thought and feel free to let others suggest things
          </List.Item>
          <List.Item>Check back in with people who ask for help</List.Item>
        </List>
        <Title order={2}>Misc, in-between notes</Title>
        <Text ta="center">
          I've learned a lot and there's still more things to learn and more
          things I need to improve on, but I guess that's life. Everyone is in a
          constant struggle in the cycle of self-improvement. To be better than
          they were the day before... But when does it end? Does it ever end?
          There is likely no limit, no peak for us to aim for, only a vague
          sense of direction. Maybe some people are content with where they are
          in life and they decide to stop? Who knows?
        </Text>
        <Divider />
        <Title order={2}>
          Stuff I learned as a Data Engineer Intern at Microsoft
        </Title>
        <List withPadding>
          <List.Item>
            Break down a problem as much as possible so that you can track work
            that is unstarted, is in progress, is blocked, or is done
          </List.Item>
          <List.Item>
            Try to avoid manual processes since human time is almost always more
            valuable than the time it takes to automate things
          </List.Item>
          <List.Item>
            Try to understand limitations to frameworks and technology
          </List.Item>
          <List.Item>
            Try to work around limitations or find alternatives when
            technologies are prohibitive, don't just throw your hands up and be
            like, "It's not my fault/problem"
          </List.Item>
          <List.Item>
            Emails are good documents, but kind of slow in terms of coordinating
            and communication
          </List.Item>
          <List.Item>
            It takes time to understand things, not everyone needs to know all
            the details, try to figure out what people need to know before
            communicating
          </List.Item>
        </List>
        <Title order={2}>
          Stuff I learned as a Software Development Engineer Intern at Amazon
        </Title>
        <List withPadding>
          <List.Item>
            Timebox things, figure out how much time things take, manage
            expectations
          </List.Item>
          <List.Item>
            It's better to get more things done than being stuck on a problem
            for a long time
          </List.Item>
          <List.Item>
            It might be a good idea to try to do multiple things at at time so
            that you can still make progress while being stuck and waiting for
            people to respond
          </List.Item>
          <List.Item>
            Even if people tell you that you're doing okay or well or are
            on-track, maybe determine that for yourself. They may be trying to
            make you feel better, but in reality you need to step up? Kind of an
            odd message o_o
          </List.Item>
          <List.Item>
            If you're stuck on something, ask for help; sometimes it's also good
            to just confirm with others, just to make sure that you're on the
            right track
          </List.Item>
          <List.Item>
            Spend time reading over code at the beginning of new jobs, ask
            questions about it -- No one expects you to know everything at the
            beginning. So the quicker you start on something, the expectation is
            that you understand enough of the system to make changes and
            updates. Take the time to get yourself set up and oriented.
          </List.Item>
          <List.Item>
            Have some confidence, but don't be full of yourself; there's a fine
            line between arrogance and confidence
          </List.Item>
        </List>
        <Title order={2}>
          Stuff I learned as a Software Engineering Intern in Taiwan
        </Title>
        <List withPadding>
          <List.Item>
            Language barriers are hard, it's good to know multiple languages
            (not talking about programming languages)
          </List.Item>
          <List.Item>
            When done with a task, communicate with key stakeholders before
            going off and doing other things
          </List.Item>
          <List.Item>Remember things</List.Item>
          <List.Item>
            If you don't know anything, that's okay. No one knows anything at
            the beginning.
          </List.Item>
        </List>
      </Stack>
    </Paper>
  );
}

export default SweLife;

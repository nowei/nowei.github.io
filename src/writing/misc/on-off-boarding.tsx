import React from "react";
import { Stack, List, Text, Title, Code, Anchor } from "@mantine/core";

function OnOffBoarding() {
  return (
    <Stack w="60%" style={{ fontSize: "24px" }}>
      <Text>
        I don't on-board or off-board often, but here's a list of action items
        you should do when you're off-boarding and on-boarding.
      </Text>

      <Title>Off-boarding</Title>
      <List>
        <List.Item>
          <b>Talking to people</b>: this is very important because you want to
          stay on good terms with people you've worked with. You should take the
          initiative to schedule these meetings instead of waiting for people to
          schedule them for you. Thank the people you've worked with and learned
          things from. People I would recommend talking to:
          <List>
            <List.Item>Managers</List.Item>
            <List.Item>Skips</List.Item>
            <List.Item>Co-workers you've worked with/like</List.Item>
          </List>
        </List.Item>
        <List.Item>
          <b>Give a notice</b>: two weeks is standard. Unless the work
          relationships are strained, try to give them time so that you can
          facilitate knowledge transfer so the people staying behind are more
          prepared to take over everything you've been working on.
        </List.Item>
        <List.Item>
          <b>Insurance and benefits</b>
          <List>
            <List.Item>
              Your benefits may end before your new job begins; so try to
              schedule covered events well in advance if you know that things
              will change.
            </List.Item>
            <List.Item>
              If you have (company) credits that you can use for something that
              you (remotely) want or your friends may want; consider spending
              them since they'll just go to waste once you leave.
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <b>Rolling over your 401k</b>: make sure you have access to the
          accounts or roll it over to your new company's new 401k company so you
          don't need to keep track of <Code>n</Code> many different financial
          platforms - be wary of overcontributing to the 401k if you switch
          mid-year.
        </List.Item>
        <List.Item>
          <b>Company stock</b> - make sure you have access to the accounts or
          roll it over to the same financial account
          <List>
            <List.Item>
              for RSUs (e.g. start-ups), determine if you want to buy it within
              3 months of leaving(90 days)
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          Save important non-work-related documents and send them to yourself
          <List>
            <List.Item>Awards/Certificates</List.Item>
            <List.Item>
              Payslips/Tax information like W2's (generally for at least 7
              years)
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          Take some time to write down what you've accomplished on the job, for
          future reference (or to look back on the times)
        </List.Item>
        <List.Item>
          Tie up any loose ends, write down any notes helpful for transition.
          Write down what you know.
        </List.Item>
        <List.Item>
          Return your gear, you might need to mail it in or get it wiped by IT.
        </List.Item>
        <List.Item>Log out of your work accounts on your phone.</List.Item>
        <List.Item>Exit paperwork</List.Item>
        <List.Item>
          <b>Do an exit interview!</b> You can leave candid feedback, but it
          depends on HR if they want to action any of it. Apparently you might
          also need to sign a slip of paper confirming that you didn't break the
          NDA + a non-solicitation clause.
        </List.Item>
        <List.Item>Say goodbye</List.Item>
        <List.Item>
          Figure out how to get home because maybe you depended on some
          work-sponsored transit card.
        </List.Item>
      </List>

      <Title>On-boarding</Title>
      <List>
        <List.Item>Take a deep breath! (You got this! 😀)</List.Item>
        <List.Item>
          Try to figure out what you want to do with your life and what you want
          to accomplish in this role.
        </List.Item>
        <List.Item>Sign an offer letter</List.Item>
        <List.Item>Sign a non-compete/NDA</List.Item>
        <List.Item>Talk to your new manager</List.Item>
        <List.Item>Submit an I-9 form</List.Item>
        <List.Item>Fill out information for a background check</List.Item>
        <List.Item>
          Figure out how to get to the office + create a routine for what you
          want to do before/after work
        </List.Item>
        <List.Item>
          Get your gear, we mainly only care about the laptop and access to
          things like repositories, documents, and accounts to manage cloud
          resources.
        </List.Item>
        <List.Item>
          Spend time getting a lay of the land, set up your device(s).
          <List>
            <List.Item>
              If your team doesn't have an on-boarding document, create it while
              you're setting your environment. This could include (personal)
              recommendations, repos to pull, important things to know
              about/pointers to parts of the codebase/architecture, etc.
            </List.Item>
            <List.Item>
              If the team is new/busy, there might not be an on-boarding
              document yet, so starting one would be good to help anyone that
              joins after you! (Assuming that the team is healthy/the team's
              positioning in the company is stable, the team will grow over
              time...)
            </List.Item>
            <List.Item>
              Generally, you'll want to set up VSCode, test that you can access
              your company's version control system (e.g. add an ssh key to your
              github account), make sure you can log into company accounts.
            </List.Item>
            <List.Item>
              If it's a Mac, install Homebrew, the terminal (e.g. oh my zsh or
              iterm2) and (most importantly) adjust the{" "}
              <Anchor href="https://stackoverflow.com/questions/4489885/how-can-i-increase-the-cursor-speed-in-terminal">
                keyboard cursor speed
              </Anchor>
            </List.Item>
            <List.Item>If you're on windows, good luck!</List.Item>
            <List.Item>
              Set up auth/okta/creds to access everything, passwords
            </List.Item>
            <List.Item>Slack/Terminal/IDE themes</List.Item>
            <List.Item>
              Tell yourself that you'll manage your tabs better so that you
              don't have 500 tabs open at once.
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          Read the documentation/watch architecture videos. If there are none,
          create documentation and ask people to review it.
        </List.Item>
        <List.Item>
          <Anchor href="https://www.fidelity.com/viewpoints/retirement/what-to-do-with-an-old-401k">
            Roll over a 401k
          </Anchor>{" "}
          (this requires getting some info from your previous 401k provider)
        </List.Item>
        <List.Item>
          Set your work boundaries, e.g. meeting times, eating times, gym times
        </List.Item>
        <List.Item>
          Put in your PTO early so that you can plan accordingly
        </List.Item>
        <List.Item>
          Read documents to figure out what's going on + ask people what's going
          on
        </List.Item>
        <List.Item>
          Schedule some time to meet with people on the team + Talk to people on
          your team to figure out what people are working on and figure out the
          team dynamics + where to ask for help.
        </List.Item>
        <List.Item>
          Set up calendar notifications so that you don't miss meetings
        </List.Item>
        <List.Item>
          Log into your benefits provider and make sure everything works
          properly. Look into company benefits more to figure out what you want
          to take advantage of.
        </List.Item>
        <List.Item>Start with some low-hanging fruit</List.Item>
        <List>
          <List.Item>Clean up the code: pre-commits/linting</List.Item>
          <List.Item>CI/monitoring/observability/alerting issues</List.Item>
          <List.Item>
            Bring up process improvements you can see; every place does things
            differently, sometimes it's easier to see problems with a fresh pair
            of eyes
          </List.Item>
        </List>
        <List.Item>
          Try to learn what you can about ongoing and future projects to figure
          out what you want to work on and where you can help.
        </List.Item>
        <List.Item>
          Use the first few months to ramp up so that you can learn how to
          meaningfully contribute to the team's efforts. Figure out what
          problems are the most important to solve and work with people on the
          team to solve them.
        </List.Item>
      </List>
    </Stack>
  );
}

export default OnOffBoarding;

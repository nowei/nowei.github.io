import React from "react";

function SweLife() {
  return (
    <div style={{ width: "80%" }}>
      <h1>Things I learned as a Software Engineer</h1>

      <h2 style={{ textAlign: "center" }}>
        Stuff I learned as a Software Engineer (at a larger company in a
        start-up-ish team)
      </h2>
      <h3>Year 3</h3>
      <ul>
        <li>
          There's a tradeoff between best-practices and shipping things; ideally
          teams find the right balance so that they can ship things confidently
          and there are less techincal silos. Make things easier for other
          people to pick up in case other people need to work on things.
        </li>
        <li>
          Everyone has different experiences and different companies operate at
          different levels according to their culture
        </li>
        <li>
          Depending on the business, the technology serves the business vs. the
          technology is the business. When technology serves the business, try
          to focus on things that will make a business impact as fast as
          possible. A business starts to die when things are slow and business
          needs are not met.
        </li>
        <li>
          Jumping around and helping coworkers is fine, but remember to focus on
          your main tasks/projects.
        </li>
        <li>
          "Thou shalt get side-tracked by bullshit every time" - while watching
          Fallout
        </li>
      </ul>

      <h2 style={{ textAlign: "center" }}>
        I've been working for a while. Stuff I learned as a Software Engineer
        (at a Startup)
      </h2>
      <h3>Year 3</h3>
      <ul>
        <li>
          Everyone eventually leaves, even if it's comfortable, even if the
          people you work with are great and cool, try to figure out why you
          would leave and what you're trying to accomplish
        </li>
        <li>
          You should try to avoid technical silos because it feels like the work
          is done in isolation and that makes it harder to see impact and is
          risky in terms of bus-factor
        </li>
        <li>
          You are generally contractually obligated to work 40 hours a week. If
          you work more than 40 hours in a week, you should let people know and
          try to avoid it. This is partly due to burnout reasons and the fact
          that working more than 40 hours diminishes your $/hour returns.
        </li>
        <li>
          When choosing what work to prioritize, generally prioritize the work
          that would unblock the most people in the least amount of time.
        </li>
        <li>
          Glue work is very important for keeping things running and it's
          usually not the coolest thing around, but it's generally appreciated
        </li>
        <li>
          Being flexible is nice, but if there's something that you want to work
          on, try to do that to see if you like it or not.
        </li>
      </ul>

      <h3>Year 2</h3>
      <ul>
        <li>People like people who help others and jump on things fast</li>
        <li>How do you work sustainably? Questionable</li>
        <li>
          To get good at asking questions, ask a lot of questions to figure out
          what are good questions and what are bad questions
        </li>
        <li>
          Do I even like what I'm working on? It's hard to say, it seems like
          necessary work (although arguably a lot of work in some views may be
          seen as unncessary)
        </li>
      </ul>

      <h3>Advice from Peter (v good, best senior)</h3>
      <ul>
        <li>
          "For things with no answers, try to develop muscles w/o necessarily
          knowing what the right answer is"
        </li>
        <li>
          "Don't spend too much time fixing bugs, start with the best solution
          you can think of at the moment and ask for feedback. Come up with
          something defensible and if it's too bad, people will say something.
          Be able to evaluate ideas without running everything down all the way.
          Increase scope and context, narrow down on details when necessary."
        </li>
        <li>Seek out fun problems</li>
        <li>
          What is the day-to-day? what do you enjoy? Are you happy with what you
          do and the things you work on? Sometimes analyzing whether you enjoyed
          this so far doesn't work because things can change, sometimes you have
          to take a chance.
        </li>
        <li>
          How can you pursue the things that bring you joy? Sometimes you don't
          always know what the right choice is and many things aren't
          reversible. Most of the time you can't be 100% sure about whether
          something is the right choice, so you kind of just need to convince
          yourself that it's the right choice. Many things can become unknown
          and if stuff changes, you kind of just have to handle it.
        </li>
        <li>
          Make MRs to at least start the discussion. Maybe there's a better way
          to do something?
        </li>
        <li>
          The only good thing high-level docs are for is discussion of API and
          should not be overtly designed around implementation constraints. What
          is the essence of what you're trying to do? Bad APIs are ambigous, try
          to make it less ambiguous and break down the problem into multiple
          steps, tasks.
        </li>
      </ul>

      <h3>Year 1</h3>
      <ul>
        <li>
          Testing is important, but don't bend over backwards to get 100% code
          coverage if the codebase isn't set up in a way that is easily testable
        </li>
        <li>
          If code isn't easily testable, maybe things can be improved so that
          things are more self-contained/testable? Can the parts be mocked out
          to test the different code paths?
        </li>
        <li>
          If broken things bug you or other people, attempt to fix things even
          though it's not your fault that something is broken. Prioritize work
          to prevent work for others.
        </li>
        <li>
          Determine what your priorities are. Sometimes some tickets are more
          important than others, especially if something unblocks another
          person.
        </li>
        <li>
          Make an effort to remember things that people say, otherwise it's rude
          if people have to keep bringing something up, since it seems like you
          weren't listening or something. You can write things down, but make an
          effort to keep what they said in mind. "If you want to forget
          something, write it down."
        </li>
        <li>
          Stand up for yourself on the work that you're doing - figure out what
          the highest-value contribution you can be making is and work towards
          that.
        </li>
        <li>
          Take some time to plan out what you're going to do the next day/next
          week
        </li>
        <li>
          Don't get stuck on naming things, but give it a little bit of thought
          and feel free to let others suggest things
        </li>
        <li>Check back in with people who ask for help</li>
      </ul>
      <h2>Misc, in-between notes</h2>
      <p style={{ textAlign: "center" }}>
        I've learned a lot and there's still more things to learn and more
        things I need to improve on, but I guess that's life. Everyone is in a
        constant struggle in the cycle of self-improvement. To be better than
        they were the day before... But when does it end? Does it ever end?
        There is likely no limit, no peak for us to aim for, only a vague sense
        of direction. Maybe some people are content with where they are in life
        and they decide to stop? Who knows?
      </p>

      <h2>Stuff I learned as a Data Engineer Intern at Microsoft</h2>
      <ul>
        <li>
          Break down a problem as much as possible so that you can track work
          that is unstarted, is in progress, is blocked, or is done
        </li>
        <li>
          Try to avoid manual processes since human time is almost always more
          valuable than the time it takes to automate things
        </li>
        <li>Try to understand limitations to frameworks and technology</li>
        <li>
          Try to work around limitations or find alternatives when technologies
          are prohibitive, don't just throw your hands up and be like, "It's not
          my fault/problem"
        </li>
        <li>
          Emails are good documents, but kind of slow in terms of coordinating
          and communication
        </li>
        <li>
          It takes time to understand things, not everyone needs to know all the
          details, try to figure out what people need to know before
          communicating
        </li>
      </ul>
      <h2>
        Stuff I learned as a Software Development Engineer Intern at Amazon
      </h2>
      <ul>
        <li>
          Timebox things, figure out how much time things take, manage
          expectations
        </li>
        <li>
          It's better to get more things done than being stuck on a problem for
          a long time
        </li>
        <li>
          It might be a good idea to try to do multiple things at at time so
          that you can still make progress while being stuck and waiting for
          people to respond
        </li>
        <li>
          Even if people tell you that you're doing okay or well or are
          on-track, maybe determine that for yourself. They may be trying to
          make you feel better, but in reality you need to step up? Kind of an
          odd message o_o
        </li>
        <li>
          If you're stuck on something, ask for help; sometimes it's also good
          to just confirm with others, just to make sure that you're on the
          right track
        </li>
        <li>
          Spend time reading over code at the beginning of new jobs, ask
          questions about it -- No one expects you to know everything at the
          beginning. So the quicker you start on something, the expectation is
          that you understand enough of the system to make changes and updates.
          Take the time to get yourself set up and oriented.
        </li>
        <li>
          Have some confidence, but don't be full of yourself; there's a fine
          line between arrogance and confidence
        </li>
      </ul>
      <h2>Stuff I learned as a Software Engineering Intern in Taiwan</h2>
      <ul>
        <li>
          Language barriers are hard, it's good to know multiple languages (not
          talking about programming languages)
        </li>
        <li>
          When done with a task, communicate with key stakeholders before going
          off and doing other things
        </li>
        <li>Remember things</li>
        <li>
          If you don't know anything, that's okay. No one knows anything at the
          beginning.
        </li>
      </ul>
    </div>
  );
}

export default SweLife;

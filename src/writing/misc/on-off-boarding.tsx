import React from "react";

function OnOffBoarding() {
  return (
    <div>
      <p>
        I don't on-board or off-board often, but here's a list of action items
        you should do when you're on-boarding and off-boarding.
      </p>

      <h2>Off-boarding</h2>
      <ul>
        <li>Talk to your managers</li>
        <li>Give a two-weeks' notice</li>
        <li>Insurance and benefits</li>
        <li>
          Rolling over 401k - make sure you have access to the accounts or roll
          it over
        </li>
        <li>
          Company stock - make sure you have access to the accounts or roll it
          over, determine if you want to buy it within 3 months (90 days).
        </li>
        <li>Save important non-work-related documents</li>
        <li>
          Write down what you've accomplished on the job, for future reference
          or to look back on the times
        </li>
        <li>Take the time to thank the people you worked with</li>
        <li>Talk to people</li>
        <li>
          Tie up any loose ends, write down any notes helpful for transition.
          Write down what you know.
        </li>
        <li>Return your gear</li>
        <li>Exit paperwork</li>
        <li>Say goodbye</li>
        <li>
          Apparently a confirmation that you didn't break the NDA and a
          non-solicitation clause.
        </li>
      </ul>

      <h2>On-boarding</h2>
      <ul>
        <li>Try to figure out what you want to do with your life</li>
        <li>Sign an offer letter</li>
        <li>Sign a non-compete/NDA</li>
        <li>Talk to your new manager</li>
        <li>Finish an I-9 form</li>
        <li>Fill out information for a background check</li>
        <li>Get your gear, mainly laptop</li>
        <li>Spend time getting a lay of the land, set up your things</li>
        <ul>
          <li>
            If it's a Mac, set up VSCode, Homebrew, the terminal (e.g. oh my zsh
            or iterm2) and the keyboard cursor speed
          </li>
          <li>Set up auth/okta/creds to access everything, passwords</li>
          <li>Slack themes</li>
          <li>
            Tell yourself that you'll manage your tabs better so that you don't
            have 500 tabs open at once.
          </li>
        </ul>
        <li>
          Follow documentation and if there is none, document things that are
          confusing
        </li>
        <li>Roll over a 401k or something</li>
        <li>
          Set your work boundaries, e.g. meeting times, eating times, gym times
        </li>
        <li>Put in your PTO early so that you can plan accordingly</li>
        <li>
          Read documents to figure out what's going on. Ask people what's going
          on
        </li>
        <li>
          Talk to people on your team to figure out what people are working on
        </li>
        <li>Set up calendar notifications so that you don't miss meetings</li>
        <li>
          Log into your benefits provider and make sure everything works
          properly. Look into company benefits more.
        </li>
        <li>Try to improve some processes that are low-hanging fruit</li>
        <ul>
          <li>pre-commits/linting cleanliness</li>
          <li>Flag any errors to people who know what they're doing</li>
        </ul>
        <li>
          Try to learn what you can about ongoing and future projects to figure
          out what you want to work on
        </li>
      </ul>
    </div>
  );
}

export default OnOffBoarding;

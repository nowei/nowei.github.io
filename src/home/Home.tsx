import React from "react";

function Hero() {
  // TODO: Use the right globe
  let globe = "🌎";
  return (
    <div
      className="page"
      style={{
        fontSize: "calc(10px + 2vmin)",
      }}
    >
      <p>👋 Hello World! {globe}</p>
      <p>🚀 My name is Andrew Wei 😎</p>
    </div>
  );
}

function AboutMe() {
  return (
    <div
      className="page"
      style={{
        fontSize: "calc(10px + 2vmin)",
      }}
    >
      <div>
        <p>
          I'm currently a Senior Software Engineer at OctoML and I'm located in
          the greater Seattle area.
        </p>
        <p>
          I received my MS in Computer Science & Engineering and BS in Computer
          Engineering from the Paul G. Allen School of Computer Science &
          Engineering at the University of Washington.
        </p>
        <p>
          I spent most of my time in college as a TA and learning about
          Distributed Systems and Machine Learning.
        </p>
        <p>All opinions are my own.</p>
      </div>
    </div>
  );
}

function Interests() {
  return (
    <div
      className="page"
      style={{
        fontSize: "calc(10px + 2vmin)",
      }}
    >
      <div>
        <h2>Interests</h2>
        <hr />
        <div>
          <h3>Technical</h3>
          <ul>
            <li>Machine/Deep Learning</li>
            <li>Distributed Systems</li>
            <li>Applied Algorithms</li>
          </ul>
          <h3>Social</h3>
          <ul>
            <li>Inclusion/Diversity</li>
            <li>Volunteering</li>
            <li>Accessibility</li>
          </ul>
          <h3>Hobbies</h3>
          <ul>
            <li>Food</li>
            <li>TV</li>
            <li>Games</li>
            <li>Memes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ContactInfo() {
  return (
    <div
      className="page"
      style={{
        fontSize: "calc(10px + 2vmin)",
      }}
    >
      <p>
        <u>Contact info</u>
        <br />
        email: a.nowei42[at]gmail.com
      </p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Interests />
      <ContactInfo />
    </div>
  );
}

export default Home;
import React, { useState, useEffect } from "react";

function parseTime(t: string): [number, number, string] {
  const timeHalfSplit = t.split(" ");
  const halfSplit = timeHalfSplit[1];
  const timeSplit = timeHalfSplit[0].split(":");
  const hour = parseInt(timeSplit[0]);
  const minute = parseInt(timeSplit[1]);
  let key: [number, number, string] = [hour, minute, halfSplit];
  return key;
}

function CurrTime() {
  const [time, setTime] = useState(new Date());

  const emojiMap = new Map<string, string>([
    [JSON.stringify([1, false]), "🕐"],
    [JSON.stringify([1, true]), "🕜"],
    [JSON.stringify([2, false]), "🕑"],
    [JSON.stringify([2, true]), "🕝"],
    [JSON.stringify([3, false]), "🕒"],
    [JSON.stringify([3, true]), "🕞"],
    [JSON.stringify([4, false]), "🕓"],
    [JSON.stringify([4, true]), "🕟"],
    [JSON.stringify([5, false]), "🕔"],
    [JSON.stringify([5, true]), "🕠"],
    [JSON.stringify([6, false]), "🕕"],
    [JSON.stringify([6, true]), "🕡"],
    [JSON.stringify([7, false]), "🕖"],
    [JSON.stringify([7, true]), "🕢"],
    [JSON.stringify([8, false]), "🕗"],
    [JSON.stringify([8, true]), "🕣"],
    [JSON.stringify([9, false]), "🕘"],
    [JSON.stringify([9, true]), "🕤"],
    [JSON.stringify([10, false]), "🕙"],
    [JSON.stringify([10, true]), "🕥"],
    [JSON.stringify([11, false]), "🕚"],
    [JSON.stringify([11, true]), "🕦"],
    [JSON.stringify([12, false]), "🕛"],
    [JSON.stringify([12, true]), "🕧"],
  ]);

  const initTimeKey = parseTime(time.toLocaleTimeString());
  let [timeKey, setTimeKey] = useState(initTimeKey);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());

      let timeKey = parseTime(time.toLocaleTimeString());
      setTimeKey(timeKey);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);
  let emoji =
    emojiMap.get(JSON.stringify([timeKey[0], timeKey[1] >= 30])) || "";
  return (
    <>
      <p>
        It is currently {time.toLocaleTimeString()} {emoji}
        {((timeKey[2] === "PM" && timeKey[0] >= 9 && timeKey[0] < 12) ||
          (timeKey[2] === "AM" && timeKey[0] <= 6)) && (
          <span style={{ color: "green" }}> // It's time to sleep! 😴</span>
        )}
        {((timeKey[2] === "AM" && timeKey[0] >= 11) ||
          (timeKey[2] === "PM" && (timeKey[0] === 12 || timeKey[0] <= 2))) && (
          <span style={{ color: "green" }}> // It's time for lunch! 🥪</span>
        )}
      </p>
    </>
  );
}

function Hero() {
  let globe = "🌎";
  return (
    <div
      className="landingpage"
      style={{
        fontSize: "calc(10px + 2vmin)",
        marginTop: "-85px",
      }}
    >
      <p>
        👋 Hello World! {globe}{" "}
        <span style={{ color: "green" }}>// 🚀 My name is Andrew Wei 😎</span>
      </p>
      <CurrTime />
    </div>
  );
}

function AboutMe() {
  return (
    <div
      className="landingpage"
      style={{
        fontSize: "calc(10px + 2vmin)",
      }}
    >
      <div>
        <p>
          I grew up in Washington and I like to spend my time volunteering,
          going to the gym, and eating food 😋
        </p>
        <p>
          I'm currently a Staff Software Engineer working remotely at Sunrun, a
          residential solar energy company and I'm located in the greater
          Seattle area.
        </p>
        <p>
          Before that, I worked at a start-up called OctoML (now called OctoAI!)
          where I was a senior software engineer.
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
      className="landingpage"
      style={{
        fontSize: "calc(10px + 2vmin)",
      }}
    >
      <div style={{ width: "50%" }}>
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
            <li>Public Transportation</li>
            <li>Sustainability</li>
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
      className="landingpage"
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

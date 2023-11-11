import React from "react";
import face from "./imgs/face.jpg";
import "./App.css";
import { text } from "stream/consumers";
// style={{
//   background: "linear-gradient(275deg, #52acff 25%, #ffe32c 100%)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent"
// }}
function App() {
  // TODO: Use the right globe
  let globe = "🌎";
  return (
    <div className="MainIndex">
      <div className="page">
        <p>👋 Hello World! {globe}</p>
        <p>🚀 My name is Andrew Wei 😎</p>
      </div>
      <div className="page">
        <div>
          <h2>About Me</h2>
          <p>
            I'm currently a Senior Software Engineer at OctoML and I'm located
            in the greater Seattle area.
          </p>
          <p>
            I got my MS in Computer Science & Engineering and BS in Computer
            Engineering from the Paul G. Allen School of Computer Science &
            Engineering at the University of Washington.
          </p>
          <p>
            I spent most of my time in college teaching as a TA and learning
            about Distributed Systems and Machine Learning.
          </p>
          <p>All opinions are my own.</p>
        </div>
      </div>
      <div className="page">
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

      <div className="page">
        <p>
          <u>Contact info</u>
          <br />
          email: a.nowei42[at]gmail.com
        </p>
      </div>
    </div>
  );
}

export default App;

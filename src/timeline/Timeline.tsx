import React from "react";
import { QuarterGroup, Quarter, QuarterProps } from "./Quarter";
import timelineJson from "./timeline.json";

function Timeline() {
  let y2023: QuarterProps = { quarters: [] };
  let data: { [id: string]: Quarter } = timelineJson;
  let quarters = [];
  let q_temp = [];
  console.log(data);
  console.log("hi");
  y2023.quarters.push(data["aut2022"]);
  y2023.quarters.push(data["win2023"]);
  y2023.quarters.push(data["spr2023"]);
  y2023.quarters.push(data["sum2023"]);
  console.log(data);

  return (
    <div>
      <header style={{ zIndex: "1000" }}>
        <h1>Timeline of activities</h1>
      </header>
      <div id="cover"></div>
      <div className="container">
        <header>
          <p style={{ padding: "12px" }}></p>
          <br />
          <h1>
            <u>Adulting/Real-Worlding</u>
          </h1>
          <br />
          <h2>2023 - Returning to Normal</h2>
        </header>
        <p style={{ padding: "12px" }}></p>
        <div className="content" style={{ maxHeight: "100%" }}>
          <div className="quarter-container">
            {/* <div id="2023" className="quarter-grid"></div> */}
            {QuarterGroup(y2023)}
          </div>
        </div>
      </div>
      <div className="container">
        <header>
          <p style={{ padding: "12px" }}></p>
          <br />
          <h1>
            <u>Adulting/Real-Worlding</u>
          </h1>
          <br />
          <h2>2021 - 2022 Pandemic Blues 2: Electric Boogaloo</h2>
        </header>

        <p style={{ padding: "12px" }}></p>
        <div className="content" style={{ maxHeight: "100%" }}>
          <div className="quarter-container">
            <div id="2022" className="quarter-grid"></div>
            <div id="2021" className="quarter-grid"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <header>
          <p style={{ padding: "12px" }}></p>
          <br />
          <h1>
            <u>University of Washington</u>
          </h1>
          <br />
          <h2 id="masters">
            Master of Science in Computer Science and Engineering
          </h2>
        </header>
        <section className="two">
          <div className="content">
            <div className="quarter-container">
              <div id="masters2" className="quarter-grid"></div>
            </div>
          </div>
        </section>
        <section className="two">
          <div className="content">
            <div className="quarter-container">
              <div id="masters1" className="quarter-grid"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <header>
          <p style={{ padding: "12px" }}></p>
          <br />
          <h1>
            <u>University of Washington</u>
          </h1>
          <br />
          <h2>Bachelor of Science in Computer Engineering</h2>
        </header>
        <section className="three">
          <div className="content">
            <div className="quarter-container">
              <div id="ugrad4" className="quarter-grid"></div>
            </div>
          </div>
        </section>
        <section className="three">
          <div className="content">
            <div className="quarter-container">
              <div id="ugrad3" className="quarter-grid"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <header>
          <p style={{ padding: "12px" }}></p>
          <br />
          <h1>
            <u>Edmonds Community College</u>
          </h1>
          <br />
          <h2>
            Associate of Science in Mechanical Engineering and Computer
            Engineering
          </h2>
        </header>
        <section className="four">
          <div className="content">
            <p style={{ textAlign: "center", width: "80%", margin: "auto" }}>
              Before UW, I did Running Start (taking Community College classes
              while in high school) at Edmonds Community College and took AP
              classes on top of that.
            </p>
            <div className="quarter-container">
              <div id="ugrad2" className="quarter-grid"></div>
            </div>
            <p style={{ textAlign: "center", width: "80%", margin: "auto" }}>
              At the time I was also taking AP Euro and a physics class. I
              volunteered at Alderwood Middle School's TSA club.
            </p>
          </div>
        </section>
        <section className="four">
          <div className="content">
            <div className="quarter-container">
              <div id="ugrad1" className="quarter-grid"></div>
            </div>
            <p style={{ textAlign: "center", width: "80%", margin: "auto" }}>
              At the time I was also taking AP Calculus BC, AP Chemistry, and AP
              Statistics.
            </p>
            <p style={{ textAlign: "center", width: "80%", margin: "auto" }}>
              Before that I took AP Calculus AB and AP World History and some
              CAD classes.
            </p>
            <p style={{ textAlign: "center", width: "80%", margin: "auto" }}>
              Volunteered at Achievement4Edmonds, Move60, and the Edmonds Demo
              Garden.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Timeline;

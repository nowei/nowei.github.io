import React from "react";
import { QuarterGroup, Quarter, QuarterProps } from "./Quarter";
import timelineJson from "./timeline.json";

function Timeline() {
  let data: { [id: string]: Quarter } = timelineJson;
  let y2024_2025: QuarterProps = {
    quarters: [data["aut2024"]],
  };
  let y2023_2024: QuarterProps = {
    quarters: [
      data["sum2024"],
      data["spr2024"],
      data["win2024"],
      data["aut2023"],
    ],
  };
  let y2022_2023: QuarterProps = {
    quarters: [
      data["sum2023"],
      data["spr2023"],
      data["win2023"],
      data["aut2022"],
    ],
  };
  let y2021_2022: QuarterProps = {
    quarters: [
      data["sum2022"],
      data["spr2022"],
      data["win2022"],
      data["aut2021"],
    ],
  };
  let y2020_2021: QuarterProps = {
    quarters: [
      data["sum2021"],
      data["spr2021"],
      data["win2021"],
      data["aut2020"],
    ],
  };
  let y2019_2020: QuarterProps = {
    quarters: [
      data["sum2020"],
      data["spr2020"],
      data["win2020"],
      data["aut2019"],
    ],
  };
  let y2018_2019: QuarterProps = {
    quarters: [
      data["sum2019"],
      data["spr2019"],
      data["win2019"],
      data["aut2018"],
    ],
  };
  let y2017_2018: QuarterProps = {
    quarters: [
      data["sum2018"],
      data["spr2018"],
      data["win2018"],
      data["aut2017"],
    ],
  };
  let y2016_2017: QuarterProps = {
    quarters: [
      data["sum2017"],
      data["spr2017"],
      data["win2017"],
      data["aut2016"],
    ],
  };
  let y2015_2016: QuarterProps = {
    quarters: [
      data["sum2016"],
      data["spr2016"],
      data["win2016"],
      data["aut2015"],
    ],
  };

  return (
    <div style={{ width: "60%" }}>
      <header style={{ zIndex: "1000" }}>
        <h1>Timeline of activities</h1>
      </header>
      <div id="cover"></div>
      <div className="container">
        <header>
          <h1>
            <u>Adulting/Real-Worlding</u>
          </h1>
          <h2>2023 - 2024; Returning to Normal, Nature is Healing</h2>
        </header>
        <p style={{ padding: "12px" }}></p>
        <div className="content" style={{ maxHeight: "100%" }}>
          <div className="quarter-container">{QuarterGroup(y2024_2025)}</div>
          <div className="quarter-container">
            {/* <div id="2023" className="quarter-grid"></div> */}
            {QuarterGroup(y2023_2024)}
          </div>
        </div>
      </div>
      <div className="container">
        <header>
          <h1>
            <u>Adulting/Real-Worlding</u>
          </h1>
          <h2>2021 - 2022; Pandemic Blues 2: Electric Boogaloo</h2>
        </header>

        <p style={{ padding: "12px" }}></p>
        <div className="content" style={{ maxHeight: "100%" }}>
          <div className="quarter-container">{QuarterGroup(y2022_2023)}</div>
          <div className="quarter-container">{QuarterGroup(y2021_2022)}</div>
        </div>
      </div>
      <div className="container">
        <header>
          <h1>
            <u>University of Washington</u>
          </h1>
          <h2 id="masters">
            Master of Science in Computer Science and Engineering
          </h2>
        </header>
        <p style={{ padding: "12px" }}></p>
        <section className="two">
          <div className="content">
            <div className="quarter-container">{QuarterGroup(y2020_2021)}</div>
          </div>
        </section>
        <section className="two">
          <div className="content">
            <div className="quarter-container">{QuarterGroup(y2019_2020)}</div>
          </div>
        </section>
      </div>
      <div className="container">
        <header>
          <h1>
            <u>University of Washington</u>
          </h1>
          <h2>Bachelor of Science in Computer Engineering</h2>
        </header>
        <p style={{ padding: "12px" }}></p>
        <section className="three">
          <div className="content">
            <div className="quarter-container">{QuarterGroup(y2018_2019)}</div>
          </div>
        </section>
        <section className="three">
          <div className="content">
            <div className="quarter-container">{QuarterGroup(y2017_2018)}</div>
          </div>
        </section>
      </div>
      <div className="container">
        <header>
          <h1>
            <u>Edmonds Community College</u>
          </h1>
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
            <p style={{ padding: "12px" }}></p>
            <div className="quarter-container">{QuarterGroup(y2016_2017)}</div>
            <p style={{ textAlign: "center", width: "80%", margin: "auto" }}>
              At the time I was also taking AP Euro and a physics class. I
              volunteered at Alderwood Middle School's TSA club.
            </p>
          </div>
        </section>
        <p style={{ padding: "12px" }}></p>
        <section className="four">
          <div className="content">
            <div className="quarter-container">{QuarterGroup(y2015_2016)}</div>
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
        <p style={{ padding: "36px" }}></p>
      </div>
    </div>
  );
}

export default Timeline;

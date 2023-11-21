import React from "react";

const projects = require.context("../projects/docs/", true);

interface ActivityContent {
  code?: string;
  name: string;
  description?: string;
}

interface Activity {
  name: string;
  bullet?: boolean;
  content: ActivityContent[];
}

interface SchoolProject {
  name: string;
  content?: string;
  thumbnail?: boolean;
  description?: string;
}

interface SchoolClass {
  code: string;
  name: string;
  dropped?: boolean;
  project?: SchoolProject[];
}

export interface Quarter {
  name: string;
  activities?: Activity[];
  classes?: SchoolClass[];
  images?: string[];
}

export interface QuarterProps {
  quarters: Quarter[];
}

function ClassComp(schoolClass: SchoolClass) {
  return (
    <div>
      <div>
        {schoolClass.dropped ? (
          <s>
            <b>{schoolClass.code}</b>: {schoolClass.name}
          </s>
        ) : (
          <text>
            <b>{schoolClass.code}</b>: {schoolClass.name}
          </text>
        )}
      </div>
      {schoolClass.project ? (
        <div>
          {schoolClass.project?.map((project) => {
            const loadProject = (projectPath: string) => {
              if (projectPath.includes("https")) {
                return projectPath;
              } else {
                return projects(`./${projectPath}`);
              }
            };
            return (
              <div>
                <ul style={{ margin: 0 }}>
                  Project:{" "}
                  {project.content ? (
                    <a
                      href={
                        project.content ? loadProject(project.content) : null
                      }
                    >
                      {project.name}
                    </a>
                  ) : (
                    <text>{project.name}</text>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function ActivityComp(activity: Activity) {
  return (
    <div style={{ marginTop: "12px", marginBottom: "24px" }}>
      <h3 style={{ marginBottom: "12px" }}>
        <u>
          <b>{activity.name}</b>
        </u>
      </h3>
      {activity.content.map((cont) => {
        return (
          <div>
            <div>
              <b>{cont.code ? <text>{cont.code}: </text> : null}</b>
              {cont.code ? <text>{cont.name}</text> : <b>{cont.name}</b>}
              {cont.description ? ": " + cont.description : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const QuarterGroup: React.FC<QuarterProps> = ({
  quarters,
}: QuarterProps) => {
  return (
    <div>
      {quarters.map((item) => {
        return (
          <div style={{ marginBottom: "60px" }}>
            <h2>{item.name}</h2>
            {item.activities?.map((activity) => {
              return ActivityComp(activity);
            })}
            {item.classes ? (
              <div>
                <h3>
                  <u>Classes</u>
                </h3>
                {item.classes?.map((schoolClass) => {
                  return ClassComp(schoolClass);
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

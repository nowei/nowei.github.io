import React from "react";

const projects = require.context("../projects/docs/", true);

interface ActivityContent {
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
  name: string;
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

export const QuarterGroup: React.FC<QuarterProps> = ({
  quarters,
}: QuarterProps) => {
  return (
    <div>
      {quarters.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            {item.activities?.map((activity) => {
              return (
                <div>
                  <div>{activity.name}</div>
                </div>
              );
            })}
            {item.classes ? (
              <div>
                <div>classes</div>
                {item.classes?.map((schoolClass) => {
                  return (
                    <div>
                      <div>{schoolClass.name}</div>
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
                                <ul>
                                  Project:{" "}
                                  {project.content ? (
                                    <a
                                      href={
                                        project.content
                                          ? loadProject(project.content)
                                          : null
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
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

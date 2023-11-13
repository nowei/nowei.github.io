import React from "react";

interface ActivityContent {
  name: string;
  description?: string;
}

interface Activity {
  name: string;
  bullet?: boolean;
  content: ActivityContent[] | ActivityContent;
}

interface SchoolProject {
  name: string;
  content?: string;
  thumbnail?: boolean;
  description?: string;
}

interface SchoolClass {
  name: string;
  project?: SchoolProject | string | SchoolProject[];
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
          </div>
        );
      })}
    </div>
  );
};

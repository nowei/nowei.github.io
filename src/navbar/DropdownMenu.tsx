import React from "react";
import Resume1C from "../resume/WeiAndrew1C.pdf";
import Resume1CPlain from "../resume/WeiAndrew1CPlain.pdf";
import CVDoc from "../resume/WeiAndrewCV.pdf";
import { NavLink } from "./NavbarElements";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownMenu = () => {
  return (
    <div
      className="dropdown-menu"
      style={{
        position: "absolute",
        borderLeft: "solid white",
        zIndex: 55,
      }}
    >
      <NavLink
        to={Resume1C}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "auto" }}
      >
        <p>
          1-C Resume <FontAwesomeIcon icon={faExternalLink} size="2xs" />
        </p>
      </NavLink>
      <NavLink
        to={Resume1CPlain}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "auto" }}
      >
        <p>
          Plain 1-C Resume <FontAwesomeIcon icon={faExternalLink} size="2xs" />
        </p>
      </NavLink>
      <NavLink
        to={CVDoc}
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: "auto" }}
      >
        <p>
          CV-ish <FontAwesomeIcon icon={faExternalLink} size="2xs" />
        </p>
      </NavLink>
    </div>
  );
};

export default DropdownMenu;

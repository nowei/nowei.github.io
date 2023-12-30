import React from "react";
import { useState } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Resume from "../resume/WeiAndrew.pdf";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <>
      <Nav style={{ padding: "auto" }}>
        <NavMenu>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/about">
            <p>About</p>
          </NavLink>
          <NavLink to="/timeline">
            <p>Timeline</p>
          </NavLink>
          <NavLink to="/writing">
            <p>Writing</p>
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink
            to="https://github.com/nowei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <FontAwesomeIcon icon={faGithub} /> GitHub{" "}
              <FontAwesomeIcon icon={faExternalLink} size="2xs" />
            </p>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/nowei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" "}
              <FontAwesomeIcon icon={faExternalLink} size="2xs" />
            </p>
          </NavLink>
          <div
            className="menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to={Resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "auto" }}
            >
              <p>
                <FontAwesomeIcon icon={faBriefcase} /> Resume{" "}
                <FontAwesomeIcon icon={faExternalLink} size="2xs" />
              </p>
            </NavLink>
            {isDropdownVisible && <DropdownMenu />}
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

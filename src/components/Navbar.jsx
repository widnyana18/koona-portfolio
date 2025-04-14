/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

// Node Modules
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {    
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Education",
      link: "#education",
      className: "nav-link",
    },
    {
      label: "Skill",
      link: "#skill",
      className: "nav-link",
    },
    {
      label: "Experience",
      link: "#experience",
      className: "nav-link",
    },
    {
      label: "Service",
      link: "#service",
      className: "nav-link",
    },
    {
      label: "Project",
      link: "#project",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:!hidden",
    },
  ];

  return (
    <nav className={"navbar reveal-up " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          key={key}
          href={link}
          className={className}
          ref={ref}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;

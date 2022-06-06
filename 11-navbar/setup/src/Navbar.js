import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const linksContainer = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    console.log(linksContainer.current.getBoundingClientRect())
    let navHeight = linksRef.current.getBoundingClientRect().height;
    if (showNav) {
      linksContainer.current.style.height = `${navHeight}px`;
    } else {
      linksContainer.current.style.height = `0px`;
    }
  }, [showNav])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} />
          <button className="nav-toggle" onClick={() => setShowNav(!showNav)}>
            <FaBars/>
          </button>
        </div>
        <div className="links-container" ref={linksContainer}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

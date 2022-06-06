import React, {useContext} from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { AppContext } from "./context";

const Sidebar = () => {
  const {isShowSide, closeSidebar} = useContext(AppContext)
  return (
    <aside className={`sidebar ${isShowSide ? 'show-sidebar' : ""}`}>
      <div className="sidebar-header">
        <img
          src="/static/media/logo.2bb7da65.svg"
          className="logo"
          alt="coding addict"
        />
        <button className="close-btn" onClick={closeSidebar}>
          x
        </button>
      </div>
      <ul className="links">
        {links.map(link => {
          let {id, url, text, icon} = link
          return (
            <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
          )
        })}
      </ul>
      <ul className="social-icons">

        {social.map(link => {
          let {id, url, icon} = link
          return (
            <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
          )
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

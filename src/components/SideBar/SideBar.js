import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import LogOut from "../login/LogOut";
const sideBar = props => {
    let sidebarClass="side-bar";
    if(props.show){
        sidebarClass="side-bar open"
    }
  return (
    <nav className={sidebarClass}>
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <LogOut />
        </li>
      </ul>
    </nav>
  );
};

export default sideBar;

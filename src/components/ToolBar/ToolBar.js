import React from "react";
import { Link } from "react-router-dom";
import "./ToolBar.css";
import LogOut from "../login/LogOut";
import ToggleButton from "../SideBar/ToggleButton";
const toolBar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle-button">
          <ToggleButton click={props.sideBarClickHandler} />
        </div>
        <div className="toolbar_banner">Codigo</div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul className="sidebar-ul">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <LogOut />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolBar;

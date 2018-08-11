import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-header">
      <div className="home-link-div">
        <Link to="/import">Home</Link>
      </div>
      <div className="usercode-link-div">
        <Link to="/userScript">UserCode</Link>
      </div>
      <div className="prettify-link-div">
        <Link to="/prettify">PrettifiedCode</Link>
      </div>
    </nav>
  );
};

export default Header;

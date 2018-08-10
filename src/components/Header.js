import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-header">
    <Link to="/import">Home</Link>
      <div>
      <Link to="/userScript">User script</Link>
      <Link to="/prettify">prettify code</Link>
      </div>
    </nav>
  );
};

export default Header;

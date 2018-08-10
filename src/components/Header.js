import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav-header">
      <div>
        <Link to="/import">Home</Link>
      </div>
      <div>
        <Link to="/userScript">User script</Link>
      </div>
      <div>
        <Link to="/prettify">prettify code</Link>
      </div>
    </nav>
  );
};

export default Header;

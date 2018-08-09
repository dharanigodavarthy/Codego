import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/userScript">User script</Link>
      <Link to="/prettify">prettify code</Link>
      <Link to="/lint">Linter</Link>
      {/* <Link to="/blogs">blogs</Link> */}
    </nav>
  );
};

export default Header;

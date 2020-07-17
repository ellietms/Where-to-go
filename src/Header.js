import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <nav className="navbar navbar-head navbar-light ">
      <a className="navbar-brand" href="#justForDebugging">
        Where in the world?
      </a>
      <a className="navbar-text" href="#justForDebugging">
        <i className="far fa-moon pr-1">
          <span className="text-dark">Dark Mode</span>
        </i>
      </a>
    </nav>
  );
};

export default Header;

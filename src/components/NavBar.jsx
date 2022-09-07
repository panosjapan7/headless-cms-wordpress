import React from "react";
import "../styles/Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <a className="anchor" href="/">
            <i className="fa fa-angellist"></i>WEBB21
          </a>
        </div>
        <div id="menu">
          <a className="anchor" href="/">
            Home
          </a>
          <a className="anchor" href="/about">
            About
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

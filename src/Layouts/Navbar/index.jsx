import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">home</li>
        <li className="nav-item">about</li>
        <li className="nav-item">projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;

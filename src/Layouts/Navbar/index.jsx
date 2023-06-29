import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Navbar(props) {
  return (
    <nav className={`nav ${props.navMode}-nav`}>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <Typography variant="button" className="nav-link-text">
              home
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/About" className="nav-link">
            <Typography variant="button" className="nav-link-text">
              about
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Projects" className="nav-link">
            <Typography variant="button" className="nav-link-text">
              projects
            </Typography>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Blogs" className="nav-link">
            <Typography variant="button" className="nav-link-text">
              blogs
            </Typography>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

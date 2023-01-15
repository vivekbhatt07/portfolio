import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <Typography variant="button" className="nav-link-text">
              home
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link">
            <Typography variant="button" className="nav-link-text">
              about
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className="nav-link">
            <Typography variant="button" className="nav-link-text">
              projects
            </Typography>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Projects" className="nav-link">
            <Typography variant="button" className="nav-link-text">
              blogs
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

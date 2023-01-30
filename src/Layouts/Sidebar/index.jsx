import React from "react";
import "./Sidebar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";

function Sidebar() {
  const [sidebarState, setSidebarState] = useState(false);

  function sidebarStateHandler() {
    return setSidebarState((prevSidebarState) => {
      return !prevSidebarState;
    });
  }
  return (
    <div className="sidebar">
      <button className="hamburger-btn" onClick={sidebarStateHandler}>
        <MenuIcon />
      </button>
      {createPortal(
        <div
          className={
            sidebarState ? "sidebar-content active" : "sidebar-content"
          }
        >
          <nav className="sidebar-nav">
            <button className="sidebar-close-btn">
              <CloseIcon onClick={sidebarStateHandler} />
            </button>
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <Link to="/" className="sidebar-link">
                  <Typography variant="button" className="sidebar-link-text">
                    home
                  </Typography>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/About" className="sidebar-link">
                  <Typography variant="button" className="sidebar-link-text">
                    about
                  </Typography>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/Projects" className="sidebar-link">
                  <Typography variant="button" className="sidebar-link-text">
                    projects
                  </Typography>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/Blogs" className="sidebar-link">
                  <Typography variant="button" className="sidebar-link-text">
                    blogs
                  </Typography>
                </Link>
              </li>
            </ul>
          </nav>
        </div>,
        document.body
      )}
    </div>
  );
}

export default Sidebar;

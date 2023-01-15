import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { LayoutContainer } from "../../Component";
import Typography from "@mui/material/Typography";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer">
      <LayoutContainer className="footer-container">
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <Link to="/" className="footer-nav-link">
                <Typography variant="button" className="nav-link-text">
                  home
                </Typography>
              </Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/About" className="footer-nav-link">
                <Typography variant="button" className="nav-link-text">
                  about
                </Typography>
              </Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/Projects" className="footer-nav-link">
                <Typography variant="button" className="nav-link-text">
                  projects
                </Typography>
              </Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/Projects" className="footer-nav-link">
                <Typography variant="button" className="nav-link-text">
                  blogs
                </Typography>
              </Link>
            </li>
          </ul>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <Link to="/" className="footer-nav-link">
                <Twitter />
              </Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/About" className="footer-nav-link">
                <LinkedIn />
              </Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/Projects" className="footer-nav-link">
                <GitHub />
              </Link>
            </li>
          </ul>
        </nav>
      </LayoutContainer>
    </footer>
  );
}

export default Footer;

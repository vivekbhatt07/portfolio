import React from "react";
import "./Footer.scss";
import { LayoutContainer } from "../../Component";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="footer">
      <LayoutContainer className="footer-container">
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a
                href="https://twitter.com/vivekbhatt07"
                className="footer-nav-link"
              >
                <Twitter />
              </a>
            </li>
            <li className="footer-nav-item">
              <a
                href="https://www.linkedin.com/in/vivekbhatt07/"
                className="footer-nav-link"
              >
                <LinkedIn />
              </a>
            </li>
            <li className="footer-nav-item">
              <a
                href="https://github.com/vivekbhatt07"
                className="footer-nav-link"
              >
                <GitHub />
              </a>
            </li>
          </ul>
        </nav>
      </LayoutContainer>
    </footer>
  );
}

export default Footer;

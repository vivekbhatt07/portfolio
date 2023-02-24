import React from "react";
import "./Header.scss";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { LayoutContainer, ThemeContextConsumer } from "../../Component";
import { Button } from "@mui/material";

function Header() {
  return (
    <ThemeContextConsumer>
      {({ mode, modeToggle }) => (
        <header className={`header ${mode}-header`}>
          <LayoutContainer className="header-container">
            <h1 className="header-title">
              <Link to="/">vb</Link>
            </h1>
            <Navbar navMode={mode} />
            <Sidebar />
            <Button variant="contained" onClick={modeToggle}>
              Mode
            </Button>
          </LayoutContainer>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;

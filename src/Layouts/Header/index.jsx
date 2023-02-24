import React from "react";
import "./Header.scss";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { LayoutContainer, ThemeContextConsumer } from "../../Component";
import { Button } from "@mui/material";

function Header(props) {
  return (
    <header className={`header ${props.headerMode}-header`}>
      <LayoutContainer className="header-container">
        <h1 className="header-title">
          <Link to="/">vb</Link>
        </h1>
        <Navbar navMode={props.headerMode} />
        <Sidebar />
        <Button variant="contained" onClick={props.headerModeToggle}>
          Mode
        </Button>
      </LayoutContainer>
    </header>
  );
}

export default Header;

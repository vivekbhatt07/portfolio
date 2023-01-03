import React from "react";
import "./Header.scss";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { LayoutContainer, ModeToggle, Switch } from "../../Component";
import { Button } from "@mui/material";

function Header() {
  return (
    <ModeToggle>
      {function (mode, changeModeHandler) {
        return (
          <header
            className="header"
            style={{ backgroundColor: mode ? "#000" : "#fff" }}
          >
            <LayoutContainer className="header-container">
              <h1 className="header-title">
                <Link to="/">vb</Link>
              </h1>
              <Navbar />
              <Switch />
            </LayoutContainer>
          </header>
        );
      }}
    </ModeToggle>
  );
}

export default Header;

import React from "react";
import "./Header.scss";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { LayoutContainer } from "../../Component";

function Header() {
  return (
    <header className="header">
      <LayoutContainer className="header-container">
        <h1 className="header-title">
          <Link to="/">vb</Link>
        </h1>
        <Navbar />
      </LayoutContainer>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import "./Header.scss";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { LayoutContainer } from "../../Component";

function Header(props) {
  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    return window.scrollY >= 82 ? setHeader(true) : setHeader(false);
  };

  window.addEventListener("scroll", changeHeader);
  return (
    <header
      className={`${props.headerMode}-header ${
        header ? "header scrolled-header" : "header"
      }`}
    >
      <LayoutContainer className="header-container">
        <h1 className="header-title">
          <Link to="/">vb</Link>
        </h1>
        <Navbar navMode={props.headerMode} />
        <Sidebar />
        <button
          className={`mode ${props.headerMode}-mode`}
          variant="contained"
          onClick={props.headerModeToggle}
        >
          <span class={`circle ${props.headerMode}-circle`}></span>
        </button>
      </LayoutContainer>
    </header>
  );
}

export default Header;

import React from "react";
import "./Main.scss";
import { LayoutContainer } from "../../Component";
function Main(props) {
  return (
    <main className="main">
      <LayoutContainer className="main-container">
        {props.pageContent}
      </LayoutContainer>
    </main>
  );
}

export default Main;

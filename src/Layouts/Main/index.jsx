import React from "react";
import "./Main.scss";
import { LayoutContainer } from "../../Component";
function Main(props) {
  return (
    <main>
      <LayoutContainer>{props.pageContent}</LayoutContainer>
    </main>
  );
}

export default Main;

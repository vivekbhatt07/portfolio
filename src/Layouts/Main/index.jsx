import React from "react";
import "./Main.scss";
import { LayoutContainer, ThemeContextConsumer } from "../../Component";
function Main(props) {
  return (
    <main className={`main ${props.mainMode}-main`}>
      <LayoutContainer className="main-container">
        {props.pageContent}
      </LayoutContainer>
    </main>
  );
}

export default Main;

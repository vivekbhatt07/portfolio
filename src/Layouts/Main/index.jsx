import React from "react";
import "./Main.scss";
import { LayoutContainer, ThemeContextConsumer } from "../../Component";
function Main(props) {
  return (
    <ThemeContextConsumer>
      {({ mode }) => (
        <main className={`main ${mode}-main`}>
          <LayoutContainer className="main-container">
            {props.pageContent}
          </LayoutContainer>
        </main>
      )}
    </ThemeContextConsumer>
  );
}

export default Main;

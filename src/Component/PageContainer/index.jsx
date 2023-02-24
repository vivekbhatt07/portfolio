import React from "react";
import "./PageContainer.scss";
import { Header, Main, Footer } from "../../Layouts";
import { ThemeContextConsumer } from "../../Component";

function PageContainer(props) {
  return (
    <ThemeContextConsumer>
      {({ mode, modeToggle }) => (
        <div className="page-container">
          <Header headerMode={mode} headerModeToggle={modeToggle} />
          <Main pageContent={props.children} mainMode={mode} />
          <Footer footerMode={mode} />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

export default PageContainer;

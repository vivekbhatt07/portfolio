import React, { useContext } from "react";
import "./PageContainer.scss";
import { Header, Main, Footer } from "../../Layouts";
import { ThemeContext } from "../../Component";

function PageContainer(props) {
  const { mode, modeToggle } = useContext(ThemeContext);
  return (
    <div className="page-container">
      <Header headerMode={mode} headerModeToggle={modeToggle} />
      <Main pageContent={props.children} mainMode={mode} />
      <Footer footerMode={mode} />
    </div>
  );
}

export default PageContainer;

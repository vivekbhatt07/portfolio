import React from "react";
import "./PageContainer.scss";
import { Header, Main, Footer } from "../../Layouts";

function PageContainer(props) {
  return (
    <div className="page-container">
      <Header />
      <Main pageContent={props.children} />
      <Footer />
    </div>
  );
}

export default PageContainer;

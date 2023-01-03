import React from "react";
import "./PageContainer.scss";
import { Header, Main, Footer } from "../../Layouts";

function PageContainer(props) {
  return (
    <div>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  );
}

export default PageContainer;

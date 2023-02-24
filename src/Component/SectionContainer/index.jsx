import React from "react";
import "./SectionContainer.scss";
import { ThemeContextConsumer } from "../ThemeContext";
function SectionContainer(props) {
  const { children, className } = props;
  const classes = `section ${className}`;
  return (
    <ThemeContextConsumer>
      {({ mode }) => (
        <section className={`${mode}-section ${classes}`}>{children}</section>
      )}
    </ThemeContextConsumer>
  );
}

export default SectionContainer;

import React, { useContext } from "react";
import "./SectionContainer.scss";
import { ThemeContext } from "../ThemeContext";
function SectionContainer(props) {
  const { children, className } = props;
  const classes = `section ${className}`;
  const { mode } = useContext(ThemeContext);
  return <section className={`${mode}-section ${classes}`}>{children}</section>;
}

export default SectionContainer;

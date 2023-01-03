import React from "react";
import "./LayoutContainer.scss";
function LayoutContainer(props) {
  const classes = props.className + " layout-container";

  return <div className={classes}>{props.children}</div>;
}

export default LayoutContainer;

import React from "react";
import "./GroupCard.scss";
function GroupCard(props) {
  const { children, className } = props;
  const classes = "group-card " + className;

  return <article className={classes}>{children}</article>;
}

export default GroupCard;

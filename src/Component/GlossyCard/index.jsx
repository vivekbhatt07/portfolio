import React from "react";
import "./GlossyCard.scss";

function GlossyCard(props) {
  const { children, className } = props;
  const classes = "glossy-card " + className;
  return <article className={classes}>{children}</article>;
}

export default GlossyCard;

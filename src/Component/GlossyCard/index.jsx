import React from "react";
import "./GlossyCard.scss";
import { ThemeContextConsumer } from "../ThemeContext";

function GlossyCard(props) {
  const { children, className } = props;
  return (
    <ThemeContextConsumer>
      {({ mode }) => (
        <article className={`glossy-card ${className} ${mode}-glossy-card`}>
          {children}
        </article>
      )}
    </ThemeContextConsumer>
  );
}

export default GlossyCard;

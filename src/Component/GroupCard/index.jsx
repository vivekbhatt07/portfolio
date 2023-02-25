import React from "react";
import "./GroupCard.scss";
import { ThemeContextConsumer } from "../../Component";
function GroupCard(props) {
  const { children, className } = props;

  return (
    <ThemeContextConsumer>
      {({ mode }) => (
        <article className={`group-card ${className} ${mode}-group-card`}>
          {children}
        </article>
      )}
    </ThemeContextConsumer>
  );
}

export default GroupCard;

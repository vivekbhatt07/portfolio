import React, { useContext } from "react";
import "./GroupCard.scss";
import { ThemeContext } from "../../Component";
function GroupCard(props) {
  const { children, className } = props;
  const { mode } = useContext(ThemeContext);
  return (
    <article className={`group-card ${className} ${mode}-group-card`}>
      {children}
    </article>
  );
}

export default GroupCard;

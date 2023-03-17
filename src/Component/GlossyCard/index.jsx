import React, { useContext } from "react";
import "./GlossyCard.scss";
import { ThemeContext } from "../ThemeContext";

function GlossyCard(props) {
  const { children, className } = props;
  const { mode } = useContext(ThemeContext);
  return (
    <article className={`glossy-card ${className} ${mode}-glossy-card`}>
      {children}
    </article>
  );
}

export default GlossyCard;

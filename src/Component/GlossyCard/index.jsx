import React from "react";

const GlossyCardStyles = {
  maxWidth: "500px",
  padding: "1em 1.5em",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  marginBottom: "32px",
  backgroundColor: "transparent",
  alignItems: "flex-start",
};

function GlossyCard(props) {
  console.log(props);
  const { children, className } = props;
  return (
    <article className={className} style={{ ...GlossyCardStyles }}>
      {children}
    </article>
  );
}

export default GlossyCard;

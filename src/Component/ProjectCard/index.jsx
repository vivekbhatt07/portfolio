import React from "react";
import "./ProjectCard.scss";
import { Typography, Button, Chip } from "@mui/material";

function ProjectCard(props) {
  const { className } = props;
  const {
    title,
    subtitle,
    technology: { primary, secondary, tertiary },
    img,
    liveLink,
    codeLink,
  } = props.items;

  const classes = "project-card " + className;
  return (
    <div className={classes}>
      <img src={img} alt="advice app" className="project-card-img" />
      <div className="project-card-content">
        <Typography variant="h6" className="project-card-title">
          {title}
        </Typography>
        <Typography variant="caption" className="project-card-subtitle">
          {subtitle}
        </Typography>
        <div className="project-card-tech">
          {primary === "HTML" && (
            <Chip label={primary} color="success" variant="outlined" />
          )}

          {secondary === "CSS" && (
            <Chip label={secondary} color="success" variant="outlined" />
          )}

          {tertiary === "Javascript" && (
            <Chip label={tertiary} color="success" variant="outlined" />
          )}
        </div>
        <div className="project-card-actions">
          <a href={liveLink} target="_blank">
            <Button variant="contained">live link</Button>
          </a>
          <a href={codeLink} target="_blank">
            <Button variant="contained">code link</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

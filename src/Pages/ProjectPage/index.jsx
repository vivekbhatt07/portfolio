import React from "react";
import { PageContainer, GroupCard, SectionContainer } from "../../Component";
import { Typography, Button } from "@mui/material";
import "./ProjectPage.scss";
import { Link } from "react-router-dom";
function ProjectPage() {
  const projectGroupList = [
    {
      id: "1",
      groupHead: "Front End Mentor",
      groupBody:
        "FEM is a platform that provides access to designed templates through which anyone with the knowledge of HTML, CSS and JS can replicate the design.",
      toLocation: "/Projects/FrontEndMentor",
    },
    {
      id: "2",
      groupHead: "Neog Camp (Level Zero)",
      groupBody:
        "It is a FREE lecture series to get you started with web development. If you want to test whether you enjoy coding or not, levelZero is the place for you!",
      toLocation: "/Projects/NeogCamp",
    },
    {
      id: "3",
      groupHead: "Extra",
      groupBody:
        "Contains projects created through various courses in Scrimba like React Free Course, Responsive Css and Advance React.",
      toLocation: "/Projects/Extra",
    },
  ];
  return (
    <PageContainer>
      <SectionContainer className="project-section">
        <Typography className="project-head" variant="h3">
          Project Categories
        </Typography>
        <div className="project-body">
          {projectGroupList.map((projectGroup) => {
            return (
              <GroupCard className="project-group" key={projectGroup.id}>
                <div className="project-group-content">
                  <Typography className="project-group-head" variant="h6">
                    {projectGroup.groupHead}
                  </Typography>
                  <Typography className="project-group-body" variant="body2">
                    {projectGroup.groupBody}
                  </Typography>
                </div>
                <Link to={projectGroup.toLocation}>
                  <Button className="project-group-btn" variant="contained">
                    Open
                  </Button>
                </Link>
              </GroupCard>
            );
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ProjectPage;

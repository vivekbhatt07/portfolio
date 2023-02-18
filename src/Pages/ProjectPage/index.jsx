import React from "react";
import { PageContainer, GroupCard } from "../../Component";
import { Typography, Button } from "@mui/material";
import "./ProjectPage.scss";
import { Link } from "react-router-dom";
function ProjectPage() {
  const projectGroupList = [
    {
      id: "1",
      groupHead: "Front End Mentor",
      groupBody:
        "Front End Mentor is platform that provides access to various designed templates. Using these templates, anyone with the knowlege of HTML, CSS and Javascript can replicate the design.",
      toLocation: "/Projects/FrontEndMentor",
    },
    {
      id: "2",
      groupHead: "Neog Camp",
      groupBody:
        "Front End Mentor is platform that provides access to various designed templates. Using these templates, anyone with the knowlege of HTML, CSS and Javascript can replicate the design.",
      toLocation: "/Projects/NeogCamp",
    },
    {
      id: "3",
      groupHead: "Extra",
      groupBody:
        "Front End Mentor is platform that provides access to various designed templates. Using these templates, anyone with the knowlege of HTML, CSS and Javascript can replicate the design.",
      toLocation: "/Projects/Extra",
    },
  ];
  return (
    <PageContainer>
      <section className="project-section">
        <Typography className="project-head" variant="h3">
          Project Categories
        </Typography>
        <div className="project-body">
          {projectGroupList.map((projectGroup) => {
            return (
              <GroupCard className="project-group" key={projectGroup.id}>
                <Typography className="project-group-head" variant="h6">
                  {projectGroup.groupHead}
                </Typography>
                <Typography className="project-group-body" variant="body2">
                  {projectGroup.groupBody}
                </Typography>
                <Link to={projectGroup.toLocation}>
                  <Button className="project-group-btn" variant="contained">
                    Open
                  </Button>
                </Link>
              </GroupCard>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}

export default ProjectPage;

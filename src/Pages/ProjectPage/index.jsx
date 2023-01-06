import React from "react";
import { PageContainer } from "../../Component";
import { Typography, Button } from "@mui/material";
import "./ProjectPage.scss";
import FrontEndMentor from "../../Assets/Images/front-end-mentor.svg";
import Neog from "../../Assets/Images/neog.svg";
import ExtraProjects from "../../Assets/Images/extra-projects.svg";
import { Link } from "react-router-dom";

function ProjectPage() {
  const projectGroupList = [
    {
      id: "1",
      groupHead: "Front End Mentor",
      groupBody:
        "Front End Mentor is platform that provides access to various designed templates. Using these templates, anyone with the knowlege of HTML, CSS and Javascript can replicate the design.",
      bgColor: "#A9C9FF",
      img: FrontEndMentor,
      toLocation: "/Projects/FrontEndMentor",
    },
    {
      id: "2",
      groupHead: "Neog Camp",
      groupBody:
        "Front End Mentor is platform that provides access to various designed templates. Using these templates, anyone with the knowlege of HTML, CSS and Javascript can replicate the design.",
      bgColor: "#74ebd5",
      img: Neog,
      toLocation: "/Projects/NeogCamp",
    },
    {
      id: "3",
      groupHead: "Extra",
      groupBody:
        "Front End Mentor is platform that provides access to various designed templates. Using these templates, anyone with the knowlege of HTML, CSS and Javascript can replicate the design.",
      bgColor: "#FAACA8",
      img: ExtraProjects,
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
              <div className="project-group" key={projectGroup.id}>
                <div
                  className="project-group-container"
                  style={{ backgroundColor: projectGroup.bgColor }}
                >
                  <div className="project-group-img">
                    <img src={projectGroup.img} alt="card-img" />
                  </div>
                  <div className="project-group-content">
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}

export default ProjectPage;

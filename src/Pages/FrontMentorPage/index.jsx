import { Typography, Button, Chip } from "@mui/material";
import React from "react";
import { PageContainer } from "../../Component";
import "./FrontMentor.scss";
import AdviceApp from "../../Assets/Images/advice-app.svg";

function FrontMentorPage() {
  const frontEndMentorList = [
    {
      id: "1",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
    },
    {
      id: "2",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
    },
    {
      id: "3",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
    },
    {
      id: "4",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
    },
    {
      id: "5",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
    },
    {
      id: "6",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
    },
    {
      id: "7",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
    },
    {
      id: "8",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
    },
  ];
  return (
    <PageContainer>
      <section className="frontend-section">
        <Typography variant="h3" className="frontend-head">
          Projects
        </Typography>
        <div className="frontend-body">
          {frontEndMentorList.map((frontEndMentorItem) => {
            return (
              <div className="project-card" key={frontEndMentorItem.id}>
                <div className="project-card-wrap">
                  <img
                    src={frontEndMentorItem.img}
                    alt="advice app"
                    className="project-card-img"
                  />
                  <div className="project-card-content">
                    <Typography variant="h6" className="project-card-title">
                      {frontEndMentorItem.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      className="project-card-subtitle"
                    >
                      {frontEndMentorItem.subtitle}
                    </Typography>
                    <div className="project-card-tech">
                      <Chip label="HTML" color="success" variant="outlined" />
                      <Chip label="CSS" color="success" variant="outlined" />
                      <Chip label="JS" color="success" variant="outlined" />
                    </div>
                    <div className="project-card-actions">
                      <a href="https://life-advice.netlify.app/">
                        <Button variant="contained">live link</Button>
                      </a>
                      <a href="https://github.com/vivekbhatt07/Advice-Generator">
                        <Button variant="contained">code link</Button>
                      </a>
                    </div>
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

export default FrontMentorPage;

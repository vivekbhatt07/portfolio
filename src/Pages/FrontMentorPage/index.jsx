import { Typography, Button, Chip } from "@mui/material";
import React from "react";
import { PageContainer } from "../../Component";
import "./FrontMentor.scss";
import AdviceApp from "../../Assets/Images/advice-app.svg";

function FrontMentorPage() {
  const frontEndMentorList = [
    {
      id: "1",
      title: "Product preview card component",
      subtitle:
        "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: AdviceApp,
      liveLink: "https://brand-card-preview.netlify.app/",
      codeLink:
        "https://github.com/vivekbhatt07/Product-Preview-Card-Component",
    },
    {
      id: "2",
      title: "Article preview component",
      subtitle:
        "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
      liveLink: "https://article-cards-component.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Article-Preview-Component",
    },
    {
      id: "3",
      title: "Testimonials grid section",
      subtitle:
        "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: AdviceApp,
      liveLink: "https://grids-testimonial.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Testimonial-Grid-Section",
    },
    {
      id: "4",
      title: "Order summary component",
      subtitle:
        "A perfect project for newbies who are starting to build confidence with layouts!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: AdviceApp,
      liveLink: "https://orders-component.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Order-Summary-Component",
    },
    {
      id: "5",
      title: "3-column preview card component",
      subtitle:
        "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: AdviceApp,
      liveLink: "https://tri-column-cards.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/FE-Mentor-Challenge-1",
    },

    {
      id: "6",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
      liveLink: "https://life-advice.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Advice-Generator",
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
                      <a href={frontEndMentorItem.liveLink}>
                        <Button variant="contained">live link</Button>
                      </a>
                      <a href={frontEndMentorItem.codeLink}>
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

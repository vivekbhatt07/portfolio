import React from "react";
import { PageContainer, ProjectCard } from "../../Component";

import BananaTranslatorApp from "../../Assets/Images/Neog/BananaTranslatorApp.svg";
import {
  AdviceApp,
  ArticlePreviewApp,
  OrderSummaryApp,
  TestimonialGridApp,
  ThreeColumnApp,
} from "../../Assets/Images/FrontEndMentor";
import { Typography, Button, Chip } from "@mui/material";

function ExtraPage() {
  const frontEndMentorList = [
    {
      id: "1",
      title: "Banana Translator App",
      subtitle:
        "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: BananaTranslatorApp,
      liveLink: "https://banana-mini-translate.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Minion-Banana-speak",
    },
    {
      id: "2",
      title: "Article preview component",
      subtitle:
        "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: ArticlePreviewApp,
      liveLink: "https://article-cards-component.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Article-Preview-Component",
    },
    {
      id: "3",
      title: "Testimonials grid section",
      subtitle:
        "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: TestimonialGridApp,
      liveLink: "https://grids-testimonial.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Testimonial-Grid-Section",
    },
    {
      id: "4",
      title: "Order summary component",
      subtitle:
        "A perfect project for newbies who are starting to build confidence with layouts!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: OrderSummaryApp,
      liveLink: "https://orders-component.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Order-Summary-Component",
    },
    {
      id: "5",
      title: "3-column preview card component",
      subtitle:
        "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: ThreeColumnApp,
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
              <ProjectCard
                items={frontEndMentorItem}
                key={frontEndMentorItem.id}
              />
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}

export default ExtraPage;

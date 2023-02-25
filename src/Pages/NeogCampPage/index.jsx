import React from "react";
import { PageContainer, ProjectCard, SectionContainer } from "../../Component";
import "./NeogCampPage.scss";
import {
  CLIOneApp,
  CLITwoApp,
  BananaTranslatorApp,
  FerbTranslatorApp,
  FlagIdentifierApp,
  RecommendationApp,
  CashApp,
  LuckyBirthdayApp,
  TriangleApp,
  StockApp,
} from "../../Assets/Images/Neog";
import { Typography, Button, Chip } from "@mui/material";

function NeogCampPage() {
  const neogList = [
    {
      id: "1",
      title: "CLI quiz app (Do you know me?)",
      subtitle:
        "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: CLIOneApp,
      liveLink:
        "https://replit.com/@VivekBhatt2/Do-You-Know-Me?embed=1&output=1",
      codeLink: "https://github.com/vivekbhatt07/Do-You-Know-Me-",
    },
    {
      id: "2",
      title: "CLI quiz app (Do you Marvel?)",
      subtitle:
        "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: CLITwoApp,
      liveLink: "https://replit.com/@VivekBhatt2/Marvel-Quiz?embed=1&output=1",
      codeLink: "https://github.com/vivekbhatt07/Marvel-Quiz",
    },
    {
      id: "3",
      title: "Banana Translator App",
      subtitle:
        "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: BananaTranslatorApp,
      liveLink: "https://banana-mini-translate.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Minion-Banana-speak",
    },
    {
      id: "4",
      title: "Ferb Translator App",
      subtitle:
        "A perfect project for newbies who are starting to build confidence with layouts!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: FerbTranslatorApp,
      liveLink: "https://phineas.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/PHINEAS-AND-FERB",
    },
    {
      id: "5",
      title: "3-column preview card component",
      subtitle:
        "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: FlagIdentifierApp,
      liveLink: "https://tri-column-cards.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/FE-Mentor-Challenge-1",
    },

    {
      id: "6",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: RecommendationApp,
      liveLink: "https://life-advice.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Advice-Generator",
    },
    {
      id: "7",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: CashApp,
      liveLink: "https://life-advice.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Advice-Generator",
    },
    {
      id: "8",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: LuckyBirthdayApp,
      liveLink: "https://life-advice.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Advice-Generator",
    },
    {
      id: "9",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: TriangleApp,
      liveLink: "https://life-advice.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Advice-Generator",
    },
    {
      id: "10",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: StockApp,
      liveLink: "https://life-advice.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Advice-Generator",
    },
  ];
  return (
    <PageContainer>
      <SectionContainer className="frontend-section">
        <Typography variant="h3" className="frontend-head">
          Neog Projects
        </Typography>
        <div className="frontend-body">
          {neogList.map((neogItem) => {
            return <ProjectCard items={neogItem} key={neogItem.id} />;
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default NeogCampPage;

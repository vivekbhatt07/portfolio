import React from "react";
import { PageContainer, ProjectCard, SectionContainer } from "../../Component";

import BananaTranslatorApp from "../../Assets/Images/Neog/BananaTranslatorApp.svg";
import {
  AdviceApp,
  ArticlePreviewApp,
  OrderSummaryApp,
  TestimonialGridApp,
  ThreeColumnApp,
} from "../../Assets/Images/FrontEndMentor";
import { Typography, Button, Chip } from "@mui/material";
import JakeAndElwood from "../../Assets/Images/ExtraPage/JakeAndElwood.png";
import LivingSimple from "../../Assets/Images/ExtraPage/LivingSimple.png";
import BBQ from "../../Assets/Images/ExtraPage/BBQ.png";
import DrinkWater from "../../Assets/Images/ExtraPage/DrinkWater.png";
import Tenzie from "../../Assets/Images/ExtraPage/Tenzie.png";
import "./ExtraPage.scss";

function ExtraPage() {
  const frontEndMentorList = [
    {
      id: "1",
      title: "Jake-And-Elwood",
      subtitle:
        "A complete responsive website made to practice responsiveness using flex and grid.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: JakeAndElwood,
      liveLink: "https://jake-elwood.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Jake-And-Elwood",
    },
    {
      id: "2",
      title: "living the simple life",
      subtitle: "This is a simple webpage for learning responsiveness.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: LivingSimple,
      liveLink: "https://living-simple.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Living-the-Simple-Life",
    },
    {
      id: "3",
      title: "BBQ",
      subtitle: "This is a simple webpage for learning responsiveness.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: BBQ,
      liveLink: "https://bbqs.netlify.app",
      codeLink: "https://github.com/vivekbhatt07/BBQ",
    },
    {
      id: "4",
      title: "water game",
      subtitle: "Just a water game ",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: DrinkWater,
      liveLink: "https://water-game.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/water-game",
    },
    {
      id: "5",
      title: "Tenzie Game",
      subtitle: "Tenzi is a game in which we Roll until all dice are the same.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: Tenzie,
      liveLink: "https://play-tenzie.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Tenzie",
    },
  ];
  return (
    <PageContainer>
      <SectionContainer className="extra-section">
        <Typography variant="h3" className="extra-head">
          Projects
        </Typography>
        <div className="extra-body">
          {frontEndMentorList.map((frontEndMentorItem) => {
            return (
              <ProjectCard
                items={frontEndMentorItem}
                key={frontEndMentorItem.id}
              />
            );
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ExtraPage;

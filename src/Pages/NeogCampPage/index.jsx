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
      subtitle: "This is a quiz created to help me know who knows me better.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: CLIOneApp,
      liveLink:
        "https://replit.com/@VivekBhatt2/Do-You-Know-Me?embed=1&output=1",
      codeLink: "https://github.com/vivekbhatt07/Do-You-Know-Me-",
    },
    {
      id: "2",
      title: "CLI quiz app (Do you Marvel?)",
      subtitle:
        "This is quiz created to check if you are a marvel fan or not ? Check it out by playing...",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: CLITwoApp,
      liveLink: "https://replit.com/@VivekBhatt2/Marvel-Quiz?embed=1&output=1",
      codeLink: "https://github.com/vivekbhatt07/Marvel-Quiz",
    },
    {
      id: "3",
      title: "Banana Translator App",
      subtitle: "This app converts english to minions language",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: BananaTranslatorApp,
      liveLink: "https://banana-mini-translate.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Minion-Banana-speak",
    },
    {
      id: "4",
      title: "Ferb Translator App",
      subtitle: "This app converts text from English to Ferb Latin.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: FerbTranslatorApp,
      liveLink: "https://phineas.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/PHINEAS-AND-FERB",
    },
    {
      id: "5",
      title: "flag identifier",
      subtitle: "This app provides you an insight about the flags.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: FlagIdentifierApp,
      liveLink: "https://flag-identify.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/FLAG-IDENTIFIER",
    },

    {
      id: "6",
      title: "Recommendation App",
      subtitle:
        "This app provides you a list of movies in various genere as a recommendation.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: RecommendationApp,
      liveLink: "https://csb-jkzldu.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Movies",
    },
    {
      id: "7",
      title: "Cash Register Manager",
      subtitle:
        "This helps the user to return the amount in the minimum number of notes.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: CashApp,
      liveLink: "https://cash-manage-register.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Cash-Register-Manager",
    },
    {
      id: "8",
      title: "Lucky Birthday",
      subtitle:
        "This app tells the user whether their birthday is lucky or not, based on their lucky number.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: LuckyBirthdayApp,
      liveLink: "https://birthdays-lucky.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Birthday-Lucky",
    },
    {
      id: "9",
      title: "fun with triangles",
      subtitle: "This app contains series of exercises related to triangles.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: TriangleApp,
      liveLink: "https://tri-angle-fun.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Fun-With-Triangles",
    },
    {
      id: "10",
      title: "profit & loss app",
      subtitle:
        "This app calculates the profit and loss based on current and initial stock price.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: StockApp,
      liveLink: "https://profits-loss.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Profit-And-Loss",
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

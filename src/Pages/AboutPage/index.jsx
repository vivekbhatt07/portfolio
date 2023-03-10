import React from "react";
import "./AboutPage.scss";
import { PageContainer, GlossyCard, SectionContainer } from "../../Component";
import { Button, Typography, Chip } from "@mui/material";
import GitCardLogo from "../../Assets/Images/git-card-logo.svg";
import LinkedinCardLogo from "../../Assets/Images/linked-card-logo.svg";
import TwitterCardLogo from "../../Assets/Images/twitter-card-logo.svg";
import AboutMe from "../../Assets/Images/AboutPage/AboutMe.png";

function AboutPage() {
  const socialCardList = [
    {
      id: "1",
      userName: "vivekbhatt07",
      textContent:
        "This is where I read news and network with different social groups.",
      socialName: "github",
      image: TwitterCardLogo,
      link: "https://twitter.com/vivekbhatt07",
    },
    {
      id: "2",
      userName: "vivekbhatt07",
      textContent:
        "This is where I network and build my professional portfolio.",
      socialName: "github",
      image: LinkedinCardLogo,
      link: "https://www.linkedin.com/in/vivekbhatt07/",
    },
    {
      id: "3",
      userName: "vivekbhatt07",
      textContent: "This is where I share code and work on projects",
      socialName: "github",
      image: GitCardLogo,
      link: "https://github.com/vivekbhatt07",
    },
  ];

  return (
    <PageContainer>
      <SectionContainer className="about-section">
        <Typography className="about-head" variant="h2">
          about me
        </Typography>
        <div className="about-body">
          <img src={AboutMe} />
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default AboutPage;

import { Typography, Button, Chip } from "@mui/material";
import React from "react";
import { PageContainer, SectionContainer, GlossyCard } from "../../Component";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import {
  HeroImg,
  HtmlLogo,
  CssLogo,
  JavascriptLogo,
  ReactLogo,
  FigmaLogo,
  WebflowLogo,
} from "../../Assets/Images/HomePage";
import "./HomePage.scss";

function Tool(props) {
  return (
    <div className="tools-item">
      <img src={props.img} alt="tools" />
    </div>
  );
}

function HomePage() {
  return (
    <PageContainer>
      <SectionContainer className="hero-section">
        <div className="hero-container">
          <div className="hero-intro">
            <Typography className="hero-head" variant="h2">
              Hi, I Am <br></br>
              <span>Vivek Bhatt</span>
            </Typography>
            <Typography className="hero-description" variant="body1">
              I am a web developer. <br></br>Currenly, learning technologies
              like HTML, CSS, JS and React.
            </Typography>
            <div className="hero-actions">
              <Button variant="contained" className="contact-btn">
                contact me
              </Button>
              <div className="hero-social">
                <a href="https://twitter.com/vivekbhatt07" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://www.linkedin.com/in/vivekbhatt07/"
                  target="_blank"
                >
                  <LinkedIn />
                </a>
                <a href="https://github.com/vivekbhatt07" target="_blank">
                  <GitHub />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img src={HeroImg} alt="hero-img" />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="aboutMe-section">
        <GlossyCard className="about-me">
          <Typography className="about-me-head" variant="h3">
            Hi! I'm Vivek
          </Typography>
          <ul className="about-me-list">
            <li className="about-me-item">
              <Typography className="about-me-description" variant="subtitle1">
                ⭐ Front-end developer from non-CS background.
              </Typography>
            </li>
            <li className="about-me-item">
              <Typography className="about-me-description" variant="subtitle1">
                ⭐ Completed graduation in B.Com in 2021.
              </Typography>
            </li>
            <li className="about-me-item">
              <Typography className="about-me-description" variant="subtitle1">
                ⭐ Discord moderator at Team Tanay.
              </Typography>
            </li>
            <li className="about-me-item">
              <Typography className="about-me-description" variant="subtitle1">
                ⭐ My first project on webflow{" "}
                <a href="https://www.tealbox.digital/" target="_blank">
                  tealbox.digital
                </a>
              </Typography>
            </li>
          </ul>

          <Button className="about-me-btn">my story</Button>
        </GlossyCard>
        <GlossyCard className="about-me">
          <Typography className="about-me-head" variant="h5">
            Technologies
          </Typography>
          <ul className="about-me-chips">
            <li className="about-me-chip">
              <img src={ReactLogo} />
            </li>
            <li className="about-me-chip">
              <img src={HtmlLogo} />
            </li>
            <li className="about-me-chip">
              <img src={CssLogo} />
            </li>
            <li className="about-me-chip">
              <img src={JavascriptLogo} />
            </li>
            <li className="about-me-chip">
              <img src={WebflowLogo} />
            </li>
            <li className="about-me-chip">
              <img src={FigmaLogo} />
            </li>
          </ul>

          <Button className="about-me-btn">View Projects</Button>
        </GlossyCard>
      </SectionContainer>
    </PageContainer>
  );
}

export default HomePage;

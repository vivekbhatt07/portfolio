import { Typography, Button } from "@mui/material";
import React from "react";
import { PageContainer, SectionContainer } from "../../Component";
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
                <a href="https://twitter.com/vivekbhatt07">
                  <Twitter />
                </a>
                <a href="https://www.linkedin.com/in/vivekbhatt07/">
                  <LinkedIn />
                </a>
                <a href="https://github.com/vivekbhatt07">
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
      <SectionContainer className="tools-section">
        <Typography className="tools-head" variant="h3">
          Tools
        </Typography>
        <div className="tools-body">
          <Tool img={HtmlLogo} />
          <Tool img={CssLogo} />
          <Tool img={JavascriptLogo} />
          <Tool img={ReactLogo} />
          <Tool img={FigmaLogo} />
          <Tool img={WebflowLogo} />
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default HomePage;

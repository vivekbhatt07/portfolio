import { Typography, Button } from "@mui/material";
import React from "react";
import { PageContainer } from "../../Component";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import HeroImg from "../../Assets/Images/hero-img.svg";
import JavascriptTool from "../../Assets/Images/javascript-tool.svg";
import ReactTool from "../../Assets/Images/react-tool.svg";
import CssTool from "../../Assets/Images/css-tool.svg";
import HtmlTool from "../../Assets/Images/html-tool.svg";
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
      <section className="hero-section">
        <div className="hero-intro">
          <Typography className="hero-head" variant="h2">
            Hi, I Am <br></br>Vivek Bhatt
          </Typography>
          <Typography className="hero-description" variant="body1">
            I am a web developer. <br></br>Currenly, learning technologies like
            HTML, CSS, JS and React.
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
      </section>
      <section className="tools-section">
        <Typography className="tools-head" variant="h3">
          Tools
        </Typography>
        <div className="tools-body">
          <Tool img={HtmlTool} />
          <Tool img={CssTool} />
          <Tool img={JavascriptTool} />
          <Tool img={ReactTool} />
        </div>
      </section>
    </PageContainer>
  );
}

export default HomePage;

import { Typography, Button } from "@mui/material";
import React from "react";
import { PageContainer } from "../../Component";
import { Twitter, LinkedIn } from "@mui/icons-material";
import HeroImg from "../../Assets/Images/hero-img.svg";
import "./HomePage.scss";

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
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="hero-img" />
        </div>
      </section>
    </PageContainer>
  );
}

export default HomePage;

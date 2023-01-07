import { Typography, Button, Chip } from "@mui/material";
import React from "react";
import { PageContainer } from "../../Component";
import "./FrontMentor.scss";
import AdviceApp from "../../Assets/Images/advice-app.svg";

function FrontMentorPage() {
  return (
    <PageContainer>
      <section className="frontend-section">
        <Typography variant="h3" className="frontend-head">
          Projects
        </Typography>
        <div className="frontend-body">
          <div className="project-card">
            <div className="project-card-wrap">
              <img
                src={AdviceApp}
                alt="advice app"
                className="project-card-img"
              />
              <div className="project-card-content">
                <Typography variant="h6" className="project-card-title">
                  advice generator
                </Typography>
                <Typography variant="caption" className="project-card-subtitle">
                  The perfect project if you're learning how to interact with
                  3rd-party APIs. This challenge uses the Advice Slip API to
                  generate random quotes of advice.
                </Typography>
                <div className="project-card-tech">
                  <Chip label="HTML" color="success" variant="outlined" />
                  <Chip label="CSS" color="success" variant="outlined" />
                  <Chip label="JS" color="success" variant="outlined" />
                </div>
                <div className="project-card-actions">
                  <a href="https://life-advice.netlify.app/">
                    <Button variant="contained">live link</Button>
                  </a>
                  <a href="https://github.com/vivekbhatt07/Advice-Generator">
                    <Button variant="contained">code link</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default FrontMentorPage;

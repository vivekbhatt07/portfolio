import React from "react";
import "./AboutPage.scss";
import { PageContainer } from "../../Component";
import { Button, Typography } from "@mui/material";
import GitCardLogo from "../../Assets/Images/git-card-logo.svg";
import LinkedinCardLogo from "../../Assets/Images/linked-card-logo.svg";
import TwitterCardLogo from "../../Assets/Images/twitter-card-logo.svg";

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
      <section class="social-section">
        <Typography className="social-head" variant="h2">
          follow me
        </Typography>
        <div className="social-body">
          {socialCardList.map((socialCard) => {
            return (
              <article class="social-card" key={socialCard.id}>
                <div class="social-card-container">
                  <div class="social-card-img">
                    <img src={socialCard.image} alt={socialCard.socialName} />
                  </div>
                  <div class="social-card-content">
                    <Typography className="social-card-title" variant="h6">
                      {socialCard.userName}
                    </Typography>
                    <Typography
                      className="social-card-subtitle"
                      variant="body2"
                    >
                      {socialCard.textContent}
                    </Typography>
                    <a className="social-card-link" href={socialCard.link}>
                      <Button variant="contained" className="social-card-btn">
                        Follow
                      </Button>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}

export default AboutPage;

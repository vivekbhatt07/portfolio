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
      <section className="about-section">
        <Typography className="about-head" variant="h2">
          about me
        </Typography>
        <div className="about-body">
          <article className="about-me">
            <Typography className="about-me-head" variant="h3">
              Hi! I'm Vivek
            </Typography>
            <ul className="about-me-list">
              <li className="about-me-item">
                <Typography
                  className="about-me-description"
                  variant="subtitle1"
                >
                  ⭐ I'm a front-end developer from non-CS background.
                </Typography>
              </li>
              <li className="about-me-item">
                <Typography
                  className="about-me-description"
                  variant="subtitle1"
                >
                  ⭐ I have completed my graduation in B.Com in 2021.
                </Typography>
              </li>
              <li className="about-me-item">
                <Typography
                  className="about-me-description"
                  variant="subtitle1"
                >
                  ⭐ Discord moderator at Neog.
                </Typography>
              </li>
              <li className="about-me-item">
                <Typography
                  className="about-me-description"
                  variant="subtitle1"
                >
                  ⭐ My first project on webflow{" "}
                  <a
                    href="https://www.tealbox.digital/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    tealbox.digital
                  </a>
                </Typography>
              </li>
            </ul>

            <Button className="about-me-btn">my story</Button>
          </article>
        </div>
      </section>
      <section className="social-section">
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
                      variant="caption"
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

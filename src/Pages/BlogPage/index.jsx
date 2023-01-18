import React from "react";
import { Button, Typography } from "@mui/material";
import { PageContainer } from "../../Component";
import "./BlogPage.scss";

function BlogPage() {
  return (
    <PageContainer>
      <section className="blog-section">
        <Typography className="blog-head" variant="h2">
          my coding journey
        </Typography>
        <div className="blog-body">
          <p className="blog-para">
            Since my B.com graduation, I had been in a dilemma about what to do
            after graduation as there were many options to pursue to decide my
            career journey. So, I was on the track of my life where I needed to
            choose the best among the available alternatives to my career path.
            Firstly, I made up my mind to pursue a government job as it seems
            secure. But the cost of getting it is to start from zero and study
            consistently. I don't mind doing hard work in anything but the
            problem with me is that I am a slow learner and takes time to grasp
            things.
          </p>
          <article className="blog-block">
            <Typography className="blog-subhead" variant="h6">
              Indore
            </Typography>
            <p className="blog-para">
              While there was no vacancy for any government jobs, my parents
              send me to Indore city, where my brother works at a startup
              company as a Front End Developer. So he also got me there just to
              learn not on internship. As he told me that Internships will not
              be beneficial for me as I don't know the basics of programming
              languages. So firstly, I had to learn the basics by myself and if
              I face any difficulties then I can seek help from anybody in the
              office. The people in the office were very supportive, they helped
              me in every aspect possible.
            </p>
          </article>
          <article className="blog-block">
            <Typography className="blog-subhead" variant="h6">
              getting into level one
            </Typography>
            <p className="blog-para">
              So, I started learning the basics of HTML, CSS, and Javascript
              from the Tanay Pratap Level 0. The sole reason for me to choose
              this course was to enter into Level 1. Starting parts of the
              course were understandable but as soon as I reached further on my
              journey, learning became a lot more difficult as Tanay introduced
              a few intermediate-level concepts (promise) of Javascript which
              were hard for someone who doesn't know the basics. I stopped the
              course sometime as I don't want to learn things without
              understanding due to which that year I cannot apply for Level 1.
            </p>
          </article>
          <article className="blog-block">
            <Typography className="blog-subhead" variant="h6">
              journey of basics
            </Typography>
            <p className="blog-para">
              For learning the basics I reached the youtube platform instead of
              some Udemy course as I only wanted to learn the basics at that
              time. There I started watching the video of Vikram Thapa who had
              taught the basics so well that I feel building some confidence in
              writing basic-level javascript. In my free time, aside from
              Javascript, I used to practice CSS as I was very fond of CSS back
              then.
            </p>
          </article>
          <article className="blog-block">
            <Typography className="blog-subhead" variant="h6">
              vacancy available
            </Typography>
            <p className="blog-para">
              While I was busy learning new technology. I heard from my aunt
              that vacancy for Police is available and that I should apply for
              that as soon as possible. I was excited to hear about that but
              felt a little confused about how to manage time for the
              preparation for both programming and police preparation. So, I
              used to leave the office at 6:00 PM early to go to the nearby
              ground for running and at night to study for the police written
              exam.
            </p>
          </article>
        </div>
      </section>
    </PageContainer>
  );
}

export default BlogPage;

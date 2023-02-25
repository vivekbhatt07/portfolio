import { Typography } from "@mui/material";
import React from "react";
import { PageContainer, ProjectCard, SectionContainer } from "../../Component";
import "./FrontMentor.scss";
import {
  AdviceApp,
  ArticlePreviewApp,
  OrderSummaryApp,
  ProductPreviewCardApp,
  TestimonialGridApp,
  ThreeColumnApp,
  SinglePriceGridApp,
  QRCardApp,
  NewsHomePageApp,
  StatsPreviewCardApp,
  TipApp,
} from "../../Assets/Images/FrontEndMentor";

function FrontMentorPage() {
  const frontEndMentorList = [
    {
      id: "1",
      title: "Product preview card component",
      subtitle:
        "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: ProductPreviewCardApp,
      liveLink: "https://brand-card-preview.netlify.app/",
      codeLink:
        "https://github.com/vivekbhatt07/Product-Preview-Card-Component",
    },
    {
      id: "2",
      title: "Article preview component",
      subtitle:
        "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: ArticlePreviewApp,
      liveLink: "https://article-cards-component.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Article-Preview-Component",
    },
    {
      id: "3",
      title: "Testimonials grid section",
      subtitle:
        "This challenge will be perfect practice for anyone wanting to test their CSS Grid skills. Grid is such a powerful addition to CSS, so it's worth getting to grips with it!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: TestimonialGridApp,
      liveLink: "https://grids-testimonial.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Testimonial-Grid-Section",
    },
    {
      id: "4",
      title: "Order summary component",
      subtitle:
        "A perfect project for newbies who are starting to build confidence with layouts!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: OrderSummaryApp,
      liveLink: "https://orders-component.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Order-Summary-Component",
    },
    {
      id: "5",
      title: "3-column preview card component",
      subtitle:
        "This challenge is perfect if you're just getting started. The shift between the layouts will be a nice test if you're new to building responsive projects.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: ThreeColumnApp,
      liveLink: "https://tri-column-cards.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/FE-Mentor-Challenge-1",
    },

    {
      id: "6",
      title: "advice generator",
      subtitle:
        "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: AdviceApp,
      liveLink: "https://life-advice.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Advice-Generator",
    },
    {
      id: "7",
      title: "Single price grid component",
      subtitle:
        "In this challenge, you will build out the pricing component to the designs provided. This is perfect for beginners and people who want to complete a smaller challenge.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: SinglePriceGridApp,
      liveLink: "https://single-price-grid-layout.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/single-price-grid-component",
    },
    {
      id: "8",
      title: "QR code component",
      subtitle:
        "A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: QRCardApp,
      liveLink: "https://qr-scan-card.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/QR-code-component",
    },
    {
      id: "9",
      title: "News homepage",
      subtitle:
        "This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: NewsHomePageApp,
      liveLink: "https://news-main.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/news-homepage",
    },
    {
      id: "10",
      title: "Stats preview card component",
      subtitle:
        "This is a great small challenge to help get you used to building to a design. There's no JS in this project, so you'll be able to focus on your HTML & CSS skills.",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "" },
      img: StatsPreviewCardApp,
      liveLink: "https://stats-card-view.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Stats-preview-card-component",
    },
    {
      id: "11",
      title: "Tip calculator app",
      subtitle:
        "This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!",
      technology: { primary: "HTML", secondary: "CSS", tertiary: "Javascript" },
      img: TipApp,
      liveLink: "https://tip-divide.netlify.app/",
      codeLink: "https://github.com/vivekbhatt07/Tip-Calculator-App",
    },
  ];
  return (
    <PageContainer>
      <SectionContainer className="frontend-section">
        <Typography variant="h3" className="frontend-head">
          FEM Projects
        </Typography>
        <div className="frontend-body">
          {frontEndMentorList.map((frontEndMentorItem) => {
            return (
              <ProjectCard
                items={frontEndMentorItem}
                key={frontEndMentorItem.id}
              />
            );
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default FrontMentorPage;

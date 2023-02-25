import React from "react";
import { Typography } from "@mui/material";
import { PageContainer, BlogCard, SectionContainer } from "../../Component";

import "./BlogsListPage.scss";
import CodingJourney from "../../Assets/Images/coding-journey.svg";

function BlogsListPage() {
  const blogList = [
    {
      id: "1",
      blogTitle: "Coding Journey",
      blogDescription:
        "This is a blog about how I started my coding journey...",
      img: CodingJourney,
    },
    {
      id: "2",
      blogTitle: "Things I Wish I Knew Earlier",
      blogDescription:
        "Everybody has their way of living life but not always the right way...",
      img: CodingJourney,
    },
    {
      id: "3",
      blogTitle: "Game Experience",
      blogDescription:
        "In my childhood, I generally play games on my computer that time mobile games were not that ...",
      img: CodingJourney,
    },
  ];

  return (
    <PageContainer>
      <SectionContainer className="blogsList-section">
        <Typography variant="h2" className="blogsList-head">
          Blogs
        </Typography>
        <div className="blogsList-body">
          {blogList.map((blog) => {
            return <BlogCard items={{ ...blog }} key={blog.id} />;
          })}
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default BlogsListPage;

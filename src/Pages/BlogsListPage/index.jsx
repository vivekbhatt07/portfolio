import React from "react";
import { Typography } from "@mui/material";
import { PageContainer, BlogCard, SectionContainer } from "../../Component";
import "./BlogsListPage.scss";
import BlogOne from "../../Assets/Images/Blog/BlogOne.png";
import BlogTwo from "../../Assets/Images/Blog/BlogTwo.png";

function BlogsListPage() {
  const blogList = [
    {
      id: "1",
      blogTitle: "== VS ===",
      blogDescription:
        "In this blog, I will explain strict and loose equality operators in-depth...",
      img: BlogOne,
      link: "https://insightblog.hashnode.dev/difference-between",
    },
    {
      id: "2",
      blogTitle: "em VS rem",
      blogDescription: "In this blog, I will explain em and rem units...",
      img: BlogTwo,
      link: "https://insightblog.hashnode.dev/rem-vs-em",
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

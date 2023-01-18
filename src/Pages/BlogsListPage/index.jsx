import React from "react";
import { Button, Typography } from "@mui/material";
import { PageContainer } from "../../Component";
import { Link } from "react-router-dom";
import "./BlogsListPage.scss";
import CodingJourney from "../../Assets/Images/coding-journey.svg";

function BlogsListPage() {
  const blogList = [
    {
      id: "1",
      blogTitle: "Coding Journey",
      blogDescription:
        "This is a blog about how I started my coding journey...",
    },
    {
      id: "2",
      blogTitle: "Things I Wish I Knew Earlier",
      blogDescription:
        "Everybody has their way of living life but not always the right way...",
    },
    {
      id: "3",
      blogTitle: "Game Experience",
      blogDescription:
        "In my childhood, I generally play games on my computer that time mobile games were not that ...",
    },
  ];

  return (
    <PageContainer>
      <section className="blogsList-section">
        <Typography variant="h2" className="blogsList-head">
          Blogs
        </Typography>
        <div className="blogsList-body">
          {blogList.map((blog) => {
            return (
              <article className="blogsList-card" key={blog.id}>
                <img
                  className="blogList-card-img"
                  src={CodingJourney}
                  alt="man with bag"
                />
                <div className="blogList-card-body">
                  <Typography className="blogList-card-body-head" variant="h6">
                    {blog.blogTitle}
                  </Typography>
                  <Typography
                    className="blogList-card-body-description"
                    variant="caption"
                  >
                    {blog.blogDescription}
                  </Typography>
                  <Link to="/Blogs/Blog">
                    <Button
                      className="blogList-card-body-btn"
                      variant="contained"
                    >
                      read
                    </Button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageContainer>
  );
}

export default BlogsListPage;

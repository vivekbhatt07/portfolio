import { Button, Typography } from "@mui/material";
import React from "react";
import { PageContainer } from "../../Component";
import "./BlogsListPage.scss";
import CodingJourney from "../../Assets/Images/coding-journey.svg";

function BlogsListPage() {
  return (
    <PageContainer>
      <section className="blogsList-section">
        <Typography variant="h2" className="blogsList-head">
          Blogs Category
        </Typography>
        <div className="blogsList-body">
          <article className="blogsList-card">
            <img
              className="blogList-card-img"
              src={CodingJourney}
              alt="man with bag"
            />
            <div className="blogList-card-body">
              <Typography className="blogList-card-body-head" variant="h6">
                Coding Journey
              </Typography>
              <Typography
                className="blogList-card-body-description"
                variant="caption"
              >
                This is a blog about how I started my coding journey...
              </Typography>
              <Button className="blogList-card-body-btn" variant="contained">
                read
              </Button>
            </div>
          </article>
        </div>
      </section>
    </PageContainer>
  );
}

export default BlogsListPage;

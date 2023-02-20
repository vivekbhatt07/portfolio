import React from "react";
import "./BlogCard.scss";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

function BlogCard(props) {
  const { blogTitle, blogDescription, img } = props.items;
  return (
    <article className="blogsList-card">
      <div className="blogsList-card-container">
        <div className="blogList-card-img-wrap">
          <img className="blogList-card-img" src={img} alt="man with bag" />
        </div>
        <div className="blogList-card-body">
          <Typography className="blogList-card-body-head" variant="h6">
            {blogTitle}
          </Typography>
          <Typography
            className="blogList-card-body-description"
            variant="caption"
          >
            {blogDescription}
          </Typography>
          <Link to="/Blogs/Blog">
            <Button className="blogList-card-body-btn" variant="contained">
              read
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;

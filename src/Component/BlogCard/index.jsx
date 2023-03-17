import React, { useContext } from "react";
import "./BlogCard.scss";
import { Button, Typography } from "@mui/material";
import { ThemeContext } from "../../Component";

function BlogCard(props) {
  const { blogTitle, blogDescription, img, link } = props.items;

  const { mode } = useContext(ThemeContext);
  return (
    <article className={`blogsList-card ${mode}-blogsList-card`}>
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
          <a href={link} target="_blank">
            <Button className="blogList-card-body-btn" variant="contained">
              read
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;

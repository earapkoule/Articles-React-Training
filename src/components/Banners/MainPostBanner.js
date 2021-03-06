import React from "react";
import "./Banners.module.css";

const MainPostBanner = ({ post }) => {
  return (
    post && (
      <div className="root">
        <img
          style={{ width: "100%", minWidth: "100%", maxHeight: "519px" }}
          src={post.social_image}
          alt={post.title}
          height="519"
        />
      </div>
    )
  );
};

export default MainPostBanner;

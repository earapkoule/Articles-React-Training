import React from "react";

const CategoryBanner = ({ post }) => {
  return (
    post && (
      <img
        style={{ width: "100%", maxHeight: "604px" }}
        src={post.social_image}
        alt={post.tag}
      />
    )
  );
};

export default CategoryBanner;

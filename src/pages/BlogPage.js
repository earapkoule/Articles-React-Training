import React, { Fragment } from "react";
import { useLocation } from "react-router";
import PopularPosts from "../components/PopularPosts/PopularPosts";

const BlogPage = () => {
  const location = useLocation();
  const category = location.pathname.substring(1);
  return (
    <Fragment>
      <h1>BlogPage</h1>
      <PopularPosts tag={category} />
    </Fragment>
  );
};

export default BlogPage;

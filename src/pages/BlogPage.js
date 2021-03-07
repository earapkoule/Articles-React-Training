import React, { Fragment } from "react";
import { useLocation } from "react-router";
import PopularPosts from "../components/PopularPosts/PopularPosts";
import RandomPost from "../components/RandomPost/RandomPost";
 import MainArticles from "../components/MainArticles/MainArticles";
import Grid from "@material-ui/core/Grid";
const BlogPage = () => {
  const location = useLocation();
  const category = location.pathname.substring(1);
  return (
   
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <MainArticles tag={category} />
        </Grid>
        <Grid item xs={4}>
          <PopularPosts tag={category} />
          <RandomPost />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Fragment>
  );
};

export default BlogPage;

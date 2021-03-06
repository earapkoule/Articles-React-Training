import React, { Fragment } from "react";
import RandomPost from "../components/RandomPost/RandomPost";
import PopularPosts from "../components/PopularPosts/PopularPosts";
import Banner from "../components/Banners/Banners"
import MainArticles from "../components/MainArticles/MainArticles"
import Grid from '@material-ui/core/Grid';


const HomePage = () => {
  return (
    <Fragment>
      <Banner/>
      <Grid container spacing={2}>
        <Grid item xs={8} >
          <MainArticles />
        </Grid>
        <Grid item xs={2} >
          <PopularPosts />
          <RandomPost />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;

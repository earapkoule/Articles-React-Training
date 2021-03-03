import React, { Fragment } from "react";
import RandomPost from "../components/RandomPost/RandomPost";
import PopularPosts from "../components/PopularPosts/PopularPosts";
import Banner from "../components/Banners/Banners"
import Grid from '@material-ui/core/Grid';

const HomePage = () => {
  return (
    <Fragment>
      
      <Banner/>
      <Grid container spacing={24}>
        <Grid item xs={8} >
            <h1>Main topics</h1>
          </Grid>
          <Grid item xs={4} >
            <PopularPosts />
            <RandomPost />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;

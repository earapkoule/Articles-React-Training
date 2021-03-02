import React, { Fragment } from "react";
import RandomPost from "../components/RandomPost/RandomPost";
import PopularPosts from "../components/PopularPosts/PopularPosts";
import Banner from "../components/Banners/Banners"

const HomePage = () => {
  return (
    <Fragment>
      <h1>Homepage</h1>
      <Banner/>
      <PopularPosts />
      <RandomPost />
    </Fragment>
  );
};

export default HomePage;

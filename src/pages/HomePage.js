import React, { Fragment } from "react";
import RandomPost from "../components/RandomPost/RandomPost";
import PopularPosts from "../components/PopularPosts/PopularPosts";

const HomePage = () => {
  return (
    <Fragment>
      <h1>Homepage</h1>
      <PopularPosts />
      <RandomPost />
    </Fragment>
  );
};

export default HomePage;

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./GalleryPage.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "white",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
}));

const GalleryPage = () => {
  const classes = useStyles();

  const posts = useSelector((state) => state.posts.allPosts);

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={6}>
        {posts.map((post) => (
          <GridListTile key={post.id} cols={2}>
            <Link key={post.social_image} to={`/posts/${post.id}`}>
              <img
                src={post.social_image}
                alt={post.title}
                height="250"
                width="340"
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default GalleryPage;

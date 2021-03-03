import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { GET_ALL_POSTS } from "../../utils/apiRoutes";
import { useFetch } from "../../utils/fetchHook";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  randomPostHeader: { color: theme.palette.header.primary },
  randomPost: {
    marginTop: "38px",
    maxWidth: 443,
    maxHeight: 307,
    image: {
      maxHeight: 248,
    },
    content: {
      color: theme.palette.text.primary,
      height: 60,
      maxHeight: 60,
      textSize: "19px",
    },
  },
  chipCustom: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.header,
    minWidth: 63,
    maxHeight: 23,
    borderRadius: 3,
    position: "absolute",
    top: "5%",
    left: "3.5%",
  },
}));

const randomizer = (minimum, maximum, allPosts) => {
  const randomNumber =
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  //console.log(allPosts);
  return allPosts[randomNumber];
};

const RandomPost = () => {
  const classes = useStyles();
  const [data, loading] = useFetch(GET_ALL_POSTS);
  const [randomPost, setRandomPost] = useState({});
  const minimum = 0;
  const maximum = 29;

  useEffect(() => {
    setRandomPost(randomizer(minimum, maximum, data));
  }, [loading]);
  return (
    <React.Fragment>
      <h1 className={classes.randomPostHeader}>Random post</h1>
      <hr className={classes.randomPostHeader}></hr>
      {randomPost && randomPost.url ? (
        <Card className={classes.randomPost}>
          <Link underline="none" component={RouterLink} to={randomPost.url}>
            <CardActionArea>
              <Chip
                className={classes.chipCustom}
                label={randomPost.tag_list ? randomPost.tag_list[0] : ""}
              />
              <CardMedia
                className={classes.randomPost.image}
                component="img"
                alt="Contemplative Reptile"
                height="248"
                image={randomPost.cover_image}
                title={randomPost.slug}
              />
              <CardContent>
                <Typography
                  className={classes.randomPost.content}
                  variant="body2"
                  component="p"
                >
                  {randomPost.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default RandomPost;

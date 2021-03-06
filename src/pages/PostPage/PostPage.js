import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../store/posts/actions";
import CategoryBanner from "../../components/Banners/CategoryBanner";
import MainPostBanner from "../../components/Banners/MainPostBanner";
import RandomPost from "../../components/RandomPost/RandomPost";
import PopularPosts from "../../components/PopularPosts/PopularPosts";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CalendarIcon, CommentsIcon, EyeIcon } from "../../utils/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: theme.typography.h3.fontSize,
    color: theme.palette.header.mainPost,
  },
  mainParsedPost: {
    color: theme.palette.text.primary,
    fontSize: "18px",
  },
  chipCustom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.header,
    minWidth: 63,
    maxWidth: 150,
    maxHeight: 32,
    borderRadius: 3,
    marginTop: "35px",
    marginBottom: "25px",
  },
  mainPost: {
    marginTop: "38px",
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
}));

const PostPage = () => {
  const classes = useStyles();
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getPostById(id).then((response) => setPost(response));
  }, []);
  return (
    post && (
      <React.Fragment>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <CategoryBanner post={post} />
          </Grid>
          <Grid item xs={10}>
            <MainPostBanner post={post} />
            <Grid item xs={12} className={classes.root}>
              <Chip
                className={classes.chipCustom}
                label={post.tag_list ? post.tag_list[0] : ""}
              />
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <Typography
                className={classes.headerTitle}
                variant="h4"
                component="h4"
              >
                {post.title}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              <Typography
                className={classes.mainPost.content}
                variant="body2"
                component="p"
                style={{ marginLeft: "18px" }}
              >
                {" "}
                {post && post.user ? post.user.name : ""}
              </Typography>
              <Typography
                className={classes.mainPost.content}
                variant="body2"
                component="p"
                style={{ marginLeft: "18px" }}
              >
                {CalendarIcon}
                {post.published_at}
              </Typography>
              <Typography
                className={classes.mainPost.content}
                variant="body2"
                component="p"
                style={{ marginLeft: "18px" }}
              >
                {CommentsIcon}
                {post.comments_count}
              </Typography>
              <Typography
                className={classes.mainPost.content}
                variant="body2"
                component="p"
                style={{ marginLeft: "18px" }}
              >
                {EyeIcon}
                {post.public_reactions_count}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.root}>
              {" "}
              <div
                className={classes.mainParsedPost}
                dangerouslySetInnerHTML={{
                  __html: post.body_html,
                }}
              ></div>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <PopularPosts />
            <RandomPost />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  );
};

export default PostPage;

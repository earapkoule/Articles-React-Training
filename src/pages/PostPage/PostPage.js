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
    flexGrow: 1,
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
    width: "100%",
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
    marginRight: "10px"
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
  }, [post]);

  return (
    post && (
      <React.Fragment>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <MainPostBanner post={post} />
            <Grid item xs={12} className={classes.root}>
              {post.tag_list ? 
                post.tag_list.split(",").map((tile) =>
                <Chip
                  className={classes.chipCustom}
                  label={tile}
                />)
                :
                <Chip
                  className={classes.chipCustom}
                  label=""
                />
              }
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
                {new Date(post.published_at).toLocaleDateString()}
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
            <Grid item xs={12}>
              {" "}
              <div
                className={classes.mainParsedPost}
                dangerouslySetInnerHTML={{
                  __html: post.body_html,
                }}
              ></div>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <PopularPosts />
            <RandomPost />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  );
};

export default PostPage;

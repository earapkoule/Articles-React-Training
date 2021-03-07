import React, { useEffect } from "react";
import { getPopularPosts } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {
  CalendarIconSmall,
  CommentsIconSmall,
  EyeIconSmall,
} from "../../utils/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  randomPostHeader: { color: theme.palette.header.primary },
  randomPost: {
    marginTop: "38px",
    content: {
      color: theme.palette.text.primary,
      textSize: "19px",
    },
  },
}));

const PopularPosts = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const popularPosts = useSelector((state) => state.posts.popularPosts);

  useEffect(() => {
    dispatch(getPopularPosts(props.tag));
  }, [props.tag]);

  return (
    <div>
      <h1 className={classes.randomPostHeader}>POPULAR POSTS</h1>
      <hr className={classes.randomPostHeader}></hr>
      <List className={classes.root}>
        {popularPosts.slice(0, 4).map((post) => (
          <Link to={`/posts/${post.id}`} style={{ textDecoration: "none" }}>
            {" "}
            <ListItem
              alignItems="flex-start"
              key={post.id}
              className={classes.randomPost}
            >
              <ListItemAvatar className={classes.randomPost.image}>
                <img
                  width="121"
                  height="90.21"
                  src={post.social_image}
                  alt={post.title}
                />
              </ListItemAvatar>{" "}
              <ListItemText
                style={{ marginLeft: "8px" }}
                primary={post.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className={(classes.inline, classes.randomPost.content)}
                      color="textPrimary"
                      style={{
                        marginRight: "4px",
                        fontSize: "9px",
                        fontWeight: "bold",
                      }}
                    >
                      {post && post.user ? post.user.name : ""}
                    </Typography>
                    <Typography
                      component="span"
                      className={(classes.inline, classes.randomPost.content)}
                      color="textPrimary"
                      style={{ marginLeft: "4px", fontSize: "9px" }}
                    >
                      {CalendarIconSmall}
                      {new Date(post.published_at).toLocaleDateString()}
                    </Typography>
                    <Typography
                      component="span"
                      className={(classes.inline, classes.randomPost.content)}
                      color="textPrimary"
                      style={{ marginLeft: "4px", fontSize: "9px" }}
                    >
                      {CommentsIconSmall}
                      {post.comments_count}
                    </Typography>
                    <Typography
                      component="span"
                      className={(classes.inline, classes.randomPost.content)}
                      color="textPrimary"
                      style={{ marginLeft: "4px", fontSize: "9px" }}
                    >
                      {EyeIconSmall}
                      {post.public_reactions_count}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default PopularPosts;

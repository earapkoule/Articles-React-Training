import React, { useState, useCallback } from "react";
import { createPost } from "../../store/posts/actions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
    },
  },
}));

const NewPostPage = () => {
  const classes = useStyles();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const createNewPost = useCallback((title, body) => {
    const newPost = {
      article: {
        title,
        published: true,
        body_markdown: body,
        tags: ["discuss", "help"],
        series: "Hello series",
      },
    };
    setLoading(true);
    createPost(newPost)
      .then((response) => {
        setPost(response);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setPost({});
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Create your own post!</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-secondary"
          label="Post Title"
          variant="outlined"
          color="secondary"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-secondary"
          label="Post Body"
          variant="outlined"
          color="secondary"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {error && (
          <h1>Your article has NOT been created. :( - Propably a CORS error</h1>
        )}
        {post.title && (
          <h5>Your article with title "{post.title}" has been created.</h5>
        )}

        <Button
          variant="outlined"
          disabled={loading}
          onClick={() => createNewPost(title, body)}
        >
          Submit Post
        </Button>
      </form>
    </div>
  );
};

export default NewPostPage;

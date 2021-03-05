import React, { useState, useCallback } from "react";
import { createPost } from "../../store/posts/actions";

const NewPostPage = () => {
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
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button disabled={loading} onClick={() => createNewPost(title, body)}>
        Submit
      </button>
      {error && <h1>Your article has NOT been created. :(</h1>}
      {post.title && (
        <h5>Your article with title "{post.title}" has been created.</h5>
      )}
    </div>
  );
};

export default NewPostPage;

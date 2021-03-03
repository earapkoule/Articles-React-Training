import React, { useEffect, useState } from "react";
import { createPost } from "../../store/posts/actions";

const newPost = {
  article: {
    title: "Hello, World!",
    published: true,
    body_markdown: "Hello DEV, this is my first post ever",
    tags: ["discuss", "help"],
    series: "Hello series",
  },
};

const NewPostPage = () => {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    createPost(newPost).then((response) => {
      setPost(response);
    });
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {title}
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      {body}
    </div>
  );
};

export default NewPostPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../store/posts/actions";

const PostPage = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => getPostById(id).then((response) => setPost(response)), []);

  return <div>{post.title}</div>;
};

export default PostPage;

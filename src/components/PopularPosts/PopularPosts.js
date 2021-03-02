import React, { useEffect } from "react";
import { getPopularPosts } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";

const PopularPosts = (props) => {
  const dispatch = useDispatch();
  const popularPosts = useSelector((state) => state.posts.popularPosts);

  useEffect(() => {
    dispatch(getPopularPosts(props.tag));
  }, [props.tag]);

  return (
    <div>
      {popularPosts.slice(0, 4).map((post) => (
        <div key={post.id}>
          <img src={post.social_image} />
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PopularPosts;

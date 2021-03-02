import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./GalleryPage.module.css";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const posts = useSelector((state) => state.posts.allPosts);

  return (
    <Fragment>
      <div>This is GalleryPage!</div>
      <div>
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <img src={post.social_image} className={styles.image} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default GalleryPage;

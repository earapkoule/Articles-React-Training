import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { GET_ALL_POSTS } from "../../utils/apiRoutes";
import { useFetch } from "../../utils/fetchHook";
import { makeStyles } from "@material-ui/core/styles";
import calendar from "../../images/calendar.png";
import comment from "../../images/comment.png";
import eye from "../../images/eye.png";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(() => ({
  icon: {
    maxWidth: 10,
    marginLeft: "1em",
  },
}));

const MainArticles = () => {
  const [data, loading] = useFetch(GET_ALL_POSTS);
  const [mainArticle, setMainArticle] = useState([]);
  const tileData = data.slice(3, 6);
  console.log(tileData);

  useEffect(() => {
    setMainArticle(tileData);
  }, [loading]);

  const classes = useStyles();

  return (
    <div>
      {tileData.map((tile) => (
        <div style={{ margin: "3em" }}>
          <div>
            <img
              width="100%"
              margin="1em"
              src={tile.social_image}
              alt={tile.title}
            />
          </div>
          <div>
            <h1 text-align="center">{tile.title}</h1>
          </div>
          <div style={{ textAlign: "center" }}>
            {tile.user.name}
            <img
              src={calendar}
              alt="Date published"
              className={classes.icon}
            />{" "}
            {new Date(tile.published_at).toLocaleDateString()}
            <img src={comment} alt="Comments" className={classes.icon} />
            {tile.comments_count}
            <img src={eye} alt="Views" className={classes.icon} />
            {tile.public_reactions_count}
          </div>
          <div>
            <h2 style={{ textAlign: "center" }}>{tile.description}</h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <Link
              underline="none"
              component={RouterLink}
              to={`/posts/${tile.id}`}
            >
              READ MORE
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainArticles;

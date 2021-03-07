import React, { useEffect } from "react";
import { getPopularPosts } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
import GridList from "@material-ui/core/GridList";
import { Link } from "react-router-dom";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  bannerWrapper: {
    display: "flex",
    flexWrap: "no-wrap",
    padding: 0,
    margin: 0,
    height: "471px",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: 471,
  },
  gridTitle: {
    color: theme.palette.text.header,
  },
  tileBar: { wordWrap: "break-word", height: 471 },
  tileBarLabel: {
    fontSize: "24px",
    marginTop: "290px",
  },
  chipCustom: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.header,
    minWidth: 80,
    maxHeight: 32,
    borderRadius: 3,
    position: "absolute",
    top: "65%",
    left: "50%",
    zIndex: 99999,
  },
}));

const Banner = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const popularPosts = useSelector((state) => state.posts.popularPosts);

  useEffect(() => {
    dispatch(getPopularPosts(props.tag));
  }, [props.tag]);

  return (
    <div className={classes.bannerWrapper}>
      <GridList className={classes.gridList} cols={3}>
        {popularPosts.slice(0, 3).map((tile) => (
          <GridListTile
            key={tile.social_image}
            style={{ height: "471px", padding: 0 }}
          >
            <Link to={`/posts/${tile.id}`}>
              <img
                src={tile.social_image}
                alt={tile.title}
                style={{ filter: "sepia(100%)" }}
                height="471"
              />
              <Chip
                className={classes.chipCustom}
                label={tile.tag_list ? tile.tag_list[0] : ""}
              />
              <GridListTileBar
                title={tile.title}
                classes={{ root: classes.tileBar, title: classes.tileBarLabel }}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Banner;

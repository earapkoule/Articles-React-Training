import React, { useState, useEffect } from "react";
import { GET_ALL_POSTS } from "../../utils/apiRoutes";
import { useFetch } from "../../utils/fetchHook";
import "./Banners.module.css";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const Banner = () => {
  const [data, loading] = useFetch(GET_ALL_POSTS);
  const tileData = data.slice(0, 3);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    setBanner(tileData);
  }, [loading]);

  return (
    <div>
      <GridList className="gridList" cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.social_image}>
            <img src={tile.social_image} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: "titleBar",
                title: "title",
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Banner;

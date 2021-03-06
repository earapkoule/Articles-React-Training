import React, {useState, useEffect} from 'react';
import { GET_ALL_POSTS } from '../../utils/apiRoutes';
import { useFetch } from '../../utils/fetchHook';
import { Link } from "react-router-dom";
import "./Banners.module.css";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const Banner = () => {
    const [data, loading] = useFetch(GET_ALL_POSTS);
    const tileData = data.slice(0, 3);
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        setBanner(tileData)
    }, [loading]);

  return (
    <div className="root">
      <GridList className="gridList" cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.social_image}>
            <Link to={`/posts/${tile.id}`}>
              <img style={{width: '100%', height: '100%'}} src={tile.social_image} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: "titleBar",
                  title: "title",
                }}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Banner;
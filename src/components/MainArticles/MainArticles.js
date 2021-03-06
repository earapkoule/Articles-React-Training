import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { GET_ALL_POSTS } from '../../utils/apiRoutes';
import { useFetch } from '../../utils/fetchHook';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import calendar from "../../images/calendar.png";
import comment from "../../images/comment.png";
import eye from "../../images/eye.png";

const useStyles = makeStyles(() => ({
    icon: {
        maxWidth: 13,
        marginLeft: "2em",
        marginRight: "0.5em"
    }
}));

const MainArticles = () => {
    const [data, loading] = useFetch(GET_ALL_POSTS);
    const [mainArticle, setMainArticle] = useState([]);
    const tileData = data.slice(3, 6);
    console.log(tileData);

    useEffect(() => {
        setMainArticle(tileData)
    }, [loading]);

    const classes = useStyles();

  return (
    <div >
        {tileData.map((tile) => (
            <React.Fragment>
                <div style={{margin: '3em'}}>
                    <div>
                        <img width="100%" margin="1em" src={tile.social_image} alt={tile.title} />
                    </div>
                    <Typography
                      variant="h5"
                      align="center"
                      color="textPrimary"
                    >
                        {tile.title}
                    </Typography>
                    <div style={{textAlign: 'center'}}>
                        {tile.user.name} 
                        <img src={calendar} alt="Date published" className={classes.icon} /> {new Date(tile.published_at).toLocaleDateString()} 
                        <img src={comment} alt="Comments" className={classes.icon} />{tile.comments_count} 
                        <img src={eye} alt="Views" className={classes.icon} />{tile.public_reactions_count}
                    </div>
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                    >
                        {tile.description}
                    </Typography>
                    <div style={{textAlign: 'right'}}>
                        <Link to={`/posts/${tile.id}`}>READ MORE</Link>
                    </div>
                </div>
            </React.Fragment>
        ))}
    </div>
  );
}

export default MainArticles;
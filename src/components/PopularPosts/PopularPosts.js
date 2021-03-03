import React, { useEffect } from "react";
import { getPopularPosts } from "../../store/posts/actions";
import { useDispatch, useSelector } from "react-redux";
  import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
 
  const useStyles = makeStyles((theme)=>({
    root:{width:445},
    randomPostHeader: {color:theme.palette.header.primary},
    randomPost: {
        marginTop: '38px',
        maxWidth: 443,
        maxHeight: 307,
        image: {
            maxHeight: 248,
        },
        content: {
            color: theme.palette.text.primary,
            height: 60,
            maxHeight: 60,
            textSize: '19px'
        }
    },
    chipCustom: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.header,
        minWidth: 63,
        maxHeight: 23,
        borderRadius: 3,
        position: 'absolute',
        top: '5%',
        left: '3.5%'
    }
}));

const PopularPosts = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const popularPosts = useSelector((state) => state.posts.popularPosts);

  useEffect(() => {
    dispatch(getPopularPosts(props.tag));
  }, [props.tag]);
console.log('posts', popularPosts);
  return (
    <div className={classes.root}>
            <h1 className={classes.randomPostHeader}>POPULAR POSTS</h1>
            <hr className={classes.randomPostHeader}></hr>
    <List >
     {popularPosts.slice(0, 4).map((post) => ( <ListItem alignItems="flex-start" key={post.id}>
        <ListItemAvatar>
          <img width="141" height="90.21" src={post.social_image} alt={'nothing'} />
        </ListItemAvatar>
        <ListItemText
          primary={post.title}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
               {post.user.name}
              </Typography>
              pub {post.published_at}
              reply {post.comments_count}
              reactions {post.public_reactions_count}
            </React.Fragment>
          }
        />
        </ListItem>))}
    </List>
 
     </div>
  );
};

export default PopularPosts;

import React, {useState, useEffect} from 'react';
import { GET_ALL_POSTS } from '../../utils/apiRoutes';
import { useFetch } from '../../utils/fetchHook';

const RandomPost = () => {
    console.log('random post');
    const [data, loading] = useFetch(GET_ALL_POSTS);
const [randomPost, setRandomPost] = useState([]);

useEffect(() => {
     setRandomPost(data)
}, [loading]);

    return (
         
        (<React.Fragment>
            <h1>Random post</h1>
            <ul>
            {randomPost.map((article) => {
                console.log(article)
                return <li key={article.id}>{article.title}</li>
            })}
            </ul>
        </React.Fragment>)
    );
}

export default RandomPost
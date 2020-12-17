import React from 'react';
import classes from './Posts.css';
import Post from '../Post/Post';

const posts = props => {
    return (
        <div className={classes.Posts}>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default posts;
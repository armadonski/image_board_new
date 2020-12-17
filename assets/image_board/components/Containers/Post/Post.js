import React from 'react';
import classes from './Post.css';

const post = props => {
    return (
        <div className={classes.Post}>
            <div>Title</div>
            <div>Post</div>
            <div>Comments</div>
        </div>
    );
}

export default post;
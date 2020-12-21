import React from 'react';
import classes from './PostPage.css';

const postPage = props => {
    console.log(props.post)
    return (
        <div className={classes.PostPage}>
            <div>{props.post.caption}</div>
            <div>
                <img className={classes.PostImage} alt={props.post.caption} src={props.post.image}/>
            </div>
            <div>
                Comments
            </div>
        </div>
    );
};

export default postPage;
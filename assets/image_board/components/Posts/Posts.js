import React from 'react';
import classes from './Posts.css';
import Post from './Post/Post';

const posts = props => {
    const posts = props.posts.rows ? props.posts.rows
        .map((item, key) => {
                return <Post
                    key={item.uuid}
                    post={item.image}
                    title={item.caption}
                    postIndex={key}
                />
            }
        ) : [];

    return (
        <div className={classes.Posts}>
            {
                posts
            }
        </div>
    );
}

export default posts;
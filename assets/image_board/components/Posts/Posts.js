import React from 'react';
import classes from './Posts.css';
import Post from './Post/Post';

const posts = props => {
    const posts = props.posts.rows ? props.posts.rows
        .map((item, key) => {
                return <Post
                    key={item.uuid}
                    post={item.image}
                    clicked={props.selectPost}
                    title={item.caption}
                    postIndex={key}
                    selectedPost={props.selectedPost}
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
import React from 'react';
import classes from './Posts.css';
import Post from './Post/Post';
import Masonry from 'react-masonry-component';

const posts = props => {
    const posts = props.posts.rows ? props.posts.rows
        .map((item, key) => {
                return <Post
                    key={item.uuid}
                    uuid={item.uuid}
                    post={item.image}
                    title={item.caption}
                    postIndex={key}
                />
            }
        ) : [];

    return (
        <Masonry
            className={classes.Masonry}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
        >
            {posts}
        </Masonry>
    );
}

export default posts;
import React from 'react';
import classes from './Posts.css';
import Post from './Post/Post';
import Masonry from 'react-masonry-component';

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
        <Masonry
            className={classes.Masonry} // default ''
            elementType={'ul'} // default 'div'
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
            {posts}
        </Masonry>
    );
}

export default posts;
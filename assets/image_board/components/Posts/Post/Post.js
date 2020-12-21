import React from 'react';
import classes from './Post.css';

const post = props => {
    return (
        <div>
            <div
                className={[classes.Post, props.postIndex === props.selectedPost ? classes.Active : classes.Inactive].join(' ')}>
                <div className={classes.Header}>{props.title}</div>
                <div className={classes.Post}
                     onClick={() => props.clicked(props.postIndex)}>
                    <img alt={props.title}
                         src={props.post}/></div>
            </div>
        </div>
    );
}

export default post;
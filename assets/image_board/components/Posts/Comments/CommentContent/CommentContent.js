import React from 'react';
import Moment from "moment";
import classes from './CommentContent.css';

const commentContent = props => {
    const comments = props.commentContent.map((comment, key) => {
        return <div className={classes.CommentWidget} key={key}>
            {comment.nickname}
            {comment.content}
            {comment.created ? Moment(comment.created.date).format('y-m-d') : null}
        </div>;
    });

    return (
        <div className={classes.CommentContent}>
            {comments}
        </div>
    );
}

export default commentContent;
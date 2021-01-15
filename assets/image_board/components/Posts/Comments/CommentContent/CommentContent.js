import React from 'react';
import Moment from "moment";
import classes from './CommentContent.css';
import Avatar from '../../../UI/Avatar/Avatar'

const commentContent = props => {
    const comments = props.commentContent.map((comment, key) => {
        let date = new Date(comment.created.date);
        let offset = date.getTimezoneOffset() * 60000;
        let currentDate = date.getTime() - offset;
        return <div className={classes.CommentWidget} key={key}>
            <div className={classes.AvatarWidget}>
                <Avatar small/>
                <div
                    className={classes.AvatarMeta}>
                    {
                        comment.nickname
                    } • {
                    comment.created ?
                        Moment(currentDate).fromNow() :
                        null
                }
                </div>
            </div>
            <div className={classes.CommentText}>
                {comment.content}
            </div>
        </div>;
    });

    return (
        <div className={classes.CommentContent}>
            {comments}
        </div>
    );
}

export default commentContent;
import React, {Component} from 'react';
import classes from "./PostComment.css";
import {MdChat} from "react-icons/md";
import Comments from "../../Posts/Comments/Comments";
import Backdrop from '../../hoc/Backdrop/Backdrop';
import Modal from '../../UI/Modal/Modal';

class PostComment extends Component {
    state = {
        comments: null,
        showComment: false
    }

    postCommentHandler = () => {
        const commentWidget = <Comments loadOnInit uuid={this.props.uuid}/>;
        this.setState(
            {
                comments: commentWidget,
                showComment: true
            }
        );
    }

    modalCloseHandler = () => {
        this.setState(
            {
                showComment: false,
                comments: null
            }
        );
    }

    render() {
        const comments = this.state.comments;

        return (
            <>
                <Modal show={this.state.showComment} modalClosed={this.modalCloseHandler}>
                    <div className={classes.CommentContent}>
                        {comments}
                    </div>
                </Modal>
                <span
                    className={classes.SpanStyle}
                    onClick={this.postCommentHandler}
                >
                    <MdChat/>
                </span>
            </>
        );
    }
}

export default PostComment;
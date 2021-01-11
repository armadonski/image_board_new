import React, {Component} from 'react';
import classes from './PostPage.css';
import PostToolbar from '../../Navigation/Toolbar/PostToolbar/PostToolbar';
import BackToIndex from '../../Navigation/BackToIndex';

class PostPage extends Component {
    render() {
        return (
            <div className={classes.PostPage}>
                <BackToIndex/>
            </div>
        );
    }
}


export default PostPage;
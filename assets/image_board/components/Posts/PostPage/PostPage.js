import React, {Component} from 'react';
import classes from './PostPage.css';
import PostToolbar from '../../Navigation/Toolbar/PostToolbar/PostToolbar';

class PostPage extends Component {
    render() {
        return (
            <div className={classes.PostPage}>
                <div>
                    <img className={classes.PostImage} alt={this.props.post.caption} src={this.props.post.image}/>
                </div>
                <div>
                    <PostToolbar/>
                </div>
                <div>
                    Comments
                </div>
            </div>
        );
    }
}


export default PostPage;
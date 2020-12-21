import React, {Component} from 'react';
import classes from './PostPage.css';
import PostToolbar from '../../Navigation/Toolbar/PostToolbar/PostToolbar';

class PostPage extends Component {
    render() {
        return (
            <div className={classes.PostPage}>
                <div>
                    {this.props.post.caption}
                   <PostToolbar clicked={this.props.navigation}/>
                </div>
                <div>
                    <img className={classes.PostImage} alt={this.props.post.caption} src={this.props.post.image}/>
                </div>
                <div>
                </div>
                <div>
                    Description
                </div>
                <div>
                    Comments
                </div>
            </div>
        );
    }
}


export default PostPage;
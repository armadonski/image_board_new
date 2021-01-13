import React, {Component} from 'react';
import classes from './PostPage.css';
import BackToIndex from '../../Navigation/BackToIndex/BackToIndex';
import Axios from "axios";
import Post from '../Post/Post';
import CommentForm from "../../Form/CommentForm/CommentForm";
import Card from '../../UI/Card/Card';
import Comments from '../Comments/Comments';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class PostPage extends Component {
    state = {
        post: {},
        postElement: null,
        updateComments: false
    };

    getPost(uuid) {
        const data = {
            uuid: uuid
        };
        Axios.post(Routing.generate('get_post'), data)
            .then(response => {
                const postElement = <Card><Post post={response.data}/></Card>;
                this.setState({
                    post: response.data,
                    postElement: postElement
                })
            })
            .catch(error => {
            })
    }

    componentDidMount() {
        this.getPost(this.props.post);
    }

    updateCommentsHandler = () => {
        this.setState({
            updateComments: !this.state.updateComments
        })
    }

    render() {
        const post = this.state.postElement;

        return (
            <div className={classes.PostPage}>
                <BackToIndex/>
                {post}
                <CommentForm posted={this.updateCommentsHandler} uuid={this.props.post}/>
                <Comments posted={this.updateCommentsHandler} update={this.state.updateComments} uuid={this.props.post}/>
            </div>
        );
    }
}


export default PostPage;
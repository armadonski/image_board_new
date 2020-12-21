import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import Posts from '../../Posts/Posts';
import PostPage from '../../Posts/PostPage/PostPage';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import Axios from "axios";

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);


class ImageBoard extends Component {
    state = {
        postData: [],
        activePost: 0,
        prevActivePost: 0,
        page: 1,
        postPage: null
    }

    posts() {
        Axios.get(Routing.generate('get_all_posts'))
            .catch(error => {
                console.log(error)
            })
            .then(response => {
                const posts = {
                    postData: response.data
                };
                this.setState(posts)
            })
    }

    activePostHandler = index => {
        const prevActivePost = this.state.activePost;
        const activePostData = this.state.postData.rows[index];
        this.setState({
            activePost: index,
            prevActivePost: prevActivePost,
            postPage: activePostData
        });
    };

    componentDidMount() {
        this.posts();
    }

    render() {
        const posts = this.state.postData;

        return (
            <Layout>
                {
                    !this.state.postPage ?
                        <Posts posts={posts} selectPost={this.activePostHandler}
                               selectedPost={this.state.activePost}/> : <PostPage post={this.state.postPage}/>
                }
            </Layout>
        );
    }
}

export default ImageBoard;
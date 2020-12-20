import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import Posts from '../Posts/Posts';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import Axios from "axios";

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);


class ImageBoard extends Component {
    state = {
        postData: [],
        activePost: 0,
        prevActivePost: 0,
        page: 1
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
        this.setState({
            activePost: index,
            prevActivePost: prevActivePost
        });
    };

    componentDidMount() {
        this.posts();
    }

    render() {
        const posts = this.state.postData;

        return (
            <Layout>
                <div>
                    Stuff
                </div>
                <Posts posts={posts} selectPost={this.activePostHandler} selectedPost={this.state.activePost}/>
                <div>
                    Stuff
                </div>
            </Layout>
        );
    }
}

export default ImageBoard;
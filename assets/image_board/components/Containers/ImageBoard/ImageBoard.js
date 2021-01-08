import React, {Component} from 'react';
import Posts from '../../Posts/Posts';
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
        postPage: null,
        pageNumber: 1
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

    navigationHandler = direction => {
        const prevPost = this.state.activePost;
        let activePost = direction === 'next' ? prevPost + 1 : direction === 'back' ? prevPost - 1 : 0;
        this.setState({
            activePost: activePost,
            postPage: this.state.postData.rows[activePost],
            prevPost: prevPost
        })
    }

    componentDidMount() {
        this.posts();
    }

    render() {
        const posts = this.state.postData;

        return (
            <>
                <Posts posts={posts}/>
            </>
        );
    }
}

export default ImageBoard;
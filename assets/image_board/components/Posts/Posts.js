import React, {Component} from 'react';
import classes from './Posts.css';
import Post from './Post/Post';
import Masonry from 'react-masonry-component';
import Axios from "axios";
import Routing from '../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import TrackVisibility from "../hoc/TrackVisibility/TrackVisibility";
import Card from '../UI/Card/Card';

const routes = require('../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class Posts extends Component {
    state = {
        postData: [],
        postElements: [],
        currentPage: 1,
        rowsReturned: false
    }

    posts(page) {
        Axios.get(Routing.generate('get_all_posts',
            {
                page: page
            }
        ))
            .catch(error => {
            })
            .then(response => {
                    const responseData = response.data.rows;
                    let prevData = this.state.postData;
                    let prevElements = this.state.postElements;
                    const rowsReturned = !!responseData.length;

                    const elements = responseData.map(item => {
                        return <TrackVisibility
                            uuid={item.uuid}
                            visible={this.visibilityHandler}
                            key={item.uuid}>
                            <Card>
                                <Post
                                    post={item}
                                />
                            </Card>
                        </TrackVisibility>;
                    });

                    this.setState({
                        postData: [...prevData, responseData],
                        postElements: [...prevElements, elements],
                        rowsReturned: rowsReturned
                    });
                }
            )
    }

    componentDidMount() {
        if (this.state.currentPage === 1) {
            this.posts(this.state.currentPage);
        }
    }

    componentDidUpdate(preProps, prevState, snapshot) {
        if (prevState.currentPage !== this.state.currentPage && this.state.rowsReturned) {
            this.posts(this.state.currentPage);
        }
    }

    visibilityHandler = (uuid) => {
        const postData = this.state.postData;
        postData.map(item => {
            if (item.length && uuid === item[item.length - 1].uuid) {
                const prevPage = this.state.currentPage;
                this.setState({
                    currentPage: prevPage + 1
                })
            }
        })
    }

    render() {

        return (
            <Masonry
                ref={this.rootRef}
                className={classes.Masonry}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                {this.state.postElements}
            </Masonry>
        );
    }
}

export default Posts;
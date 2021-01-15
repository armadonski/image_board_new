import React, {Component} from 'react';
import classes from './Comments.css';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import Card from '../../UI/Card/Card';
import Axios from 'axios';
import Button from '../../UI/Button/Button';
import CommentContent from "./CommentContent/CommentContent";

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class Comments extends Component {
    state = {
        comments: []
    }

    getComments() {
        const uuid = {
            postUuid: this.props.uuid
        }
        Axios.get(Routing.generate('get_comments', uuid))
            .then(response => {
                const noOfComments = this.state.noOfComments;
                this.setState({
                    comments: response.data
                })
            })
            .catch(error => {
            })
    }

    loadCommentsHandler = () => {
        this.getComments();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.update) {
            this.getComments();
            this.props.posted();
        }
    }

    componentDidMount() {
        this.getComments();
    }

    render() {

        return (
            <div className={classes.Comments}>
                <Card>
                    <div className={classes.CommentWidget}>
                        {
                            this.props.noOfComments !== "0" ?
                                this.state.comments.length ?
                                    <CommentContent commentContent={this.state.comments}/> :
                                    <div>
                                        <Button clicked={this.loadCommentsHandler}>Click to load comments
                                        </Button>
                                    </div> :
                                'No comments yet'
                        }
                    </div>
                </Card>
            </div>
        );
    }
}

export default Comments;
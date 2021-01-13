import React, {Component} from 'react';
import classes from './Comments.css';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import Card from '../../UI/Card/Card';
import Axios from 'axios';
import Moment from 'moment';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class Comments extends Component {
    state = {
        comments: [],
        commentElements: []
    }

    getComments() {
        const uuid = {
            postUuid: this.props.uuid
        }
        Axios.get(Routing.generate('get_comments', uuid))
            .then(response => {
                const comments = response.data.map((comment, key) => {
                    return <div key={key}>
                        {comment.nickname} :
                        {comment.content} :
                        {Moment(comment.created.date).format('y-m-d')}
                    </div>;
                });
                this.setState({
                    comments: response.data,
                    commentElements: comments
                })
            })
            .catch(error => {
            })
    }

    componentDidMount() {
        this.getComments();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.update){
            this.getComments();
            this.props.posted();
        }
    }

    render() {

        return (
            <div className={classes.Comments}>
                <Card>
                    {this.state.commentElements}
                </Card>
            </div>
        );
    }
}

export default Comments;
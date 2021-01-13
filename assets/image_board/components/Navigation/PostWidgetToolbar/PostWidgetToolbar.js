import React, {Component} from 'react';
import Label from "../../UI/Label/Label";
import classes from './PostWidgetToolbar.css';
import Axios from "axios";
import {MdRemoveRedEye, MdThumbUp, MdThumbDown, MdChat} from 'react-icons/md';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class PostWidgetToolbar extends Component {

    state = {
        voted: this.props.post.voted,
        points: this.props.post.points
    }

    likeHandler(uuid) {
        const data = {
            uuid: uuid
        }
        Axios.post(Routing.generate('vote_like'), data)
            .then(response => {
                this.setState({
                    voted: '1',
                    points: response.data.points
                })
            })
            .catch(errors => {
            })
    }

    dislikeHandler(uuid) {
        const data = {
            uuid: uuid
        }
        Axios.post(Routing.generate('vote_dislike'), data)
            .then(response => {
                this.setState({
                    voted: '-1',
                    points: response.data.points
                })
            })
            .catch(errors => {
            })
    }

    unlikeHandler(uuid) {
        const data = {
            uuid: uuid
        }
        Axios.post(Routing.generate('vote_unlike'), data)
            .then(response => {
                this.setState({
                    voted: null,
                    points: response.data.points
                })
            })
            .catch(errors => {
            })
    }

    render() {
        const uuid = this.props.post.uuid;
        let voted = this.state.voted;

        console.log(this.props)
        return (
            <div className={classes.PostWidgetToolbar}>
                <Label class='Label_widget'>
                    {this.state.points ? this.state.points : 0}
                    <span className={[classes.SpanStyle, voted === "1" ? classes.UpVote : null].join(' ')}>
                    <MdThumbUp onClick={voted ? () => this.unlikeHandler(uuid) : () => this.likeHandler(uuid)}/>
                </span>
                    <span
                        className={[classes.SpanStyle, voted === "-1" ? classes.DownVote : null].join(' ')}>
                    <MdThumbDown onClick={voted ? () => this.unlikeHandler(uuid) : () => this.dislikeHandler(uuid)}/>
                </span>
                </Label>
                <Label class='Label_widget'>
                    {this.props.post.comments}
                    <span className={classes.SpanStyle}>
                    <MdChat/>
                </span>
                </Label>
                <Label class='Label_widget'>
                    Views
                    <span className={classes.SpanStyle}>
                    <MdRemoveRedEye/>
                </span>
                </Label>
            </div>
        );
    }
}

export default PostWidgetToolbar;
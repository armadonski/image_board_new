import React, {Component} from 'react';
import Textarea from '../../UI/Input/Textarea';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './CommentForm.css';
import Axios from 'axios';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import Label from "../../UI/Label/Label";
import Tooltip from '../../UI/Tooltip/Tooltip';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class CommentForm extends Component {
    state = {
        comment: null,
        errors: [],
    }

    commentHandler = () => {
        const comment = this.state.comment;
        const data = {content: comment};
        const uuid = {postUuid: this.props.uuid};

        Axios.post(Routing.generate('add_comment', uuid), data)
            .then(response => {
                this.props.posted();
            })
            .catch(error => {
                const errors = error.response.data;
                this.setState(typeof errors !== 'object' ? {errors: [...errors]} : {
                    errors: [...this.mapObjectsToArray(errors)]
                })
            })
    }

    mapObjectsToArray = object => {
        return Object.keys(object).map(objectKey => {
            return object[objectKey];
        })
    };

    commentTextHandler = e => {
        const comment = e.target.value;
        this.setState(
            {
                comment: comment
            }
        )
    }

    redirectToLogin = () => {
        window.location.href = Routing.generate('authentication');
    }

    blurTooltip = () => {
        this.setState(
            {
                errors: []
            }
        )
    }

    render() {
        return (
            <Card>
                <div className={classes.CommentForm}>
                    <Textarea placeholder='Write a comment' onChange={this.commentTextHandler} cols={3} rows={3}/>
                    <div className={classes.PostButton}>
                        <Tooltip error blur={this.blurTooltip} show={this.state.errors.length} tooltipContent={this.state.errors}>
                            <Button clicked={
                                this.props.user ?
                                    this.commentHandler : this.redirectToLogin
                            } background='NoBackground'>
                                Post
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </Card>
        );
    }
}

export default CommentForm;
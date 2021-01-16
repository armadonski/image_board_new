import React, {Component} from 'react';
import Textarea from '../../UI/Input/Textarea';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './CommentForm.css';
import Axios from 'axios';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import Label from "../../UI/Label/Label";
import Tooltip from '../../UI/Tooltip/Tooltip';
import NavButtons from '../../Navigation/Toolbar/NavButtons/NavButtons';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class CommentForm extends Component {
    state = {
        comment: null,
        errors: [],
        showLogin: false
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

    showLoginHandler = () => {
        const currentShowLogin = this.state.showLogin;
        this.setState({
            showLogin: !currentShowLogin
        });
    };

    displayErrors = () => {
        return this.state.errors ? this.state.errors.map((error, key) =>
            (
                <Label class={'Label_error'} key={key}>
                    {error}
                </Label>
            )
        ) : null;
    }

    render() {
        const errors = this.displayErrors();

        return (
            <Card>
                <div className={classes.CommentForm}>
                    <Textarea placeholder='Write a comment' onChange={this.commentTextHandler} cols={3} rows={3}/>
                    <div className={classes.Errors}>{errors}</div>
                    <Tooltip blur={this.showLoginHandler} tooltipContent={<div>Please Login if you want to post a comment!</div>}
                             show={this.state.showLogin}>
                        <Button clicked={
                            this.props.user ?
                                this.commentHandler : this.showLoginHandler
                        } background='NoBackground'>
                            Post
                        </Button>
                    </Tooltip>
                </div>
            </Card>
        );
    }
}

export default CommentForm;
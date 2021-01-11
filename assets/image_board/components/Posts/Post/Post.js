import React from 'react';
import Card from '../../UI/Card/Card';
import Label from '../../UI/Label/Label';
import classes from './Post.css';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

const post = props => {
    return (
        <div className={classes.Post}>
            <Card>
                <a className={classes.PostImage} href={Routing.generate('get_post_page', {uuid: props.uuid})}>
                    <img alt={props.title}
                         src={props.post}/>
                </a>
                <div className={classes.Title}>
                    {props.title}
                </div>
                <div className={classes.PostWidgetToolbar}>
                    <Label class='Label_grey'>Votes</Label>
                    <Label class='Label_grey'>Comments</Label>
                    <Label class='Label_grey'>Views</Label>
                </div>
            </Card>
        </div>
    );
}

export default post;
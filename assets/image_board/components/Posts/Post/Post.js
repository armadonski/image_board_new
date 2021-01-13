import React from 'react';
import Card from '../../UI/Card/Card';
import PostWidgetToolbar from '../../Navigation/PostWidgetToolbar/PostWidgetToolbar'
import classes from './Post.css';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

const post = props => {
    return (
        <div className={classes.Post}>
            <Card>
                <a className={classes.PostImage} href={Routing.generate('get_post_page', {uuid: props.post.uuid})}>
                    <img alt={props.post.caption}
                         src={props.post.image}/>
                </a>
                <div className={classes.Title}>
                    {props.post.caption}
                </div>
                    <PostWidgetToolbar post={props.post}/>
            </Card>
        </div>
    );
}

export default post;
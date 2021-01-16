import React from 'react';
import PostWidgetToolbar from '../../Navigation/PostWidgetToolbar/PostWidgetToolbar'
import classes from './Post.css';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

const post = props => {
    return (
        <div className={classes.Post}>
                <a className={classes.PostImage} href={Routing.generate('get_post_page', {uuid: props.post.uuid})}>
                    <img alt={props.post.caption}
                         src={props.post.image}/>
                </a>
                <div className={classes.Title}>
                    {props.post.caption}
                </div>
                    <PostWidgetToolbar user={props.user} post={props.post}/>
        </div>
    );
}

export default post;
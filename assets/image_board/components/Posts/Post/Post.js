import React from 'react';
import Card from '../../UI/Card/Card';
import Label from '../../UI/Label/Label';
import classes from './Post.css';

const post = props => {
    return (
        <div className={classes.Post}>
            <Card>
                <div className={classes.PostImage}>
                    <img alt={props.title}
                         src={props.post}/></div>
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
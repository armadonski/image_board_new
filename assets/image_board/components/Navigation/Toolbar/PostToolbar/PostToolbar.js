import React from 'react';
import classes from './PostToobar.css';
import Button from '../../../UI/Button/Button';

const postToolbar = props => {
    return (
        <div className={classes.PostToolbar}>
            <Button>Back</Button>
            <Button>Next > </Button>

        </div>
    );
}

export default postToolbar;
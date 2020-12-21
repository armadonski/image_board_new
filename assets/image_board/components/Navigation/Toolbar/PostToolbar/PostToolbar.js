import React from 'react';
import classes from './PostToolbar.css';
import Button from '../../../UI/Button/Button';

const postToolbar = props => {
    return (
        <div className={classes.PostToolbar}>
            <div>
                <div>Icon</div>
                <div>Name</div>
            </div>
            <div>
                <Button clicked={() => props.clicked('back')}>Back</Button>
                <Button clicked={() => props.clicked('next')}>Next> </Button>
            </div>
        </div>
    );
}

export default postToolbar;
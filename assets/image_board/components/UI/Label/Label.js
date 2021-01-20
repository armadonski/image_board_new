import React from 'react';
import classes from './Label.css';

const label = props => {
    return (
        <div className={classes[props.class]}>
            {props.children}
        </div>
    );
}

export default label;
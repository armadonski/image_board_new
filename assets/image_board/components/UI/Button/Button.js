import React from 'react';
import classes from './Button.css';

const button = props => (
    <button className={[classes.Button, props.background ? classes.NoBackground : null].join(' ')}>
        {props.children}
    </button>
)

export default button;
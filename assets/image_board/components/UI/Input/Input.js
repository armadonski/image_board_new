import React from 'react';
import classes from './Input.css';

const input = props => {
    return (
        <>
            <input className={classes.Input} type={props.type} placeholder={props.placeholder} onChange={props.onChange}/>
        </>
    );
}
export default input;
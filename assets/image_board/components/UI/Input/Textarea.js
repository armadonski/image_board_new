import React from 'react';
import classes from './Input.css';

const textarea = props => {
    return (
        <>
            <textarea
                className={classes.Input}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
                onChange={props.onChange}
                rows={props.rows}
                cols={props.cols}
                maxLength={200}
                value={props.value}
            />
        </>
    );
}
export default textarea;
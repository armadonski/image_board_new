import React from 'react';
import classes from './Logo.css';

const logo = props => {
    const indexHandler = () => {
        window.location.href = '/';
    };

    return (
        <div className={classes.Logo}>
            <h4 onClick={indexHandler}>Logo</h4>
        </div>
    );
};

export default logo;

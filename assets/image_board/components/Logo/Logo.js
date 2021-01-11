import React from 'react';
import classes from './Logo.css';
import Logo from '../../../../public/images/logo/logo.jpg';

const logo = props => {
    const indexHandler = () => {
        window.location.href = '/';
    };
    return (
        <div className={classes.Logo}>
            <img onClick={indexHandler} src={Logo} alt="Logo"/>
        </div>
    );
};

export default logo;

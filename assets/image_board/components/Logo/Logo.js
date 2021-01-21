import React from 'react';
import classes from './Logo.css';
import Logo from '../../../../public/images/logo/logo.jpg';

const logo = props => (
    <div className={classes.Logo}>
        <a href='/'><img src={Logo} alt="Logo"/></a>
    </div>
);

export default logo;

import React from 'react';
import Logo from '../../Logo/Logo';
import Button from '../../UI/Button/Button';
import classes from './Toolbar.css';

const toolbar = props => (
    <>
        <div className={classes.Toolbar}>
            <Logo/>
            <div className={classes.NavBar}>
                <Button background >Login</Button>
                <Button>Sign Up</Button>
            </div>
        </div>
    </>
);

export default toolbar;
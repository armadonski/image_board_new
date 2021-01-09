import React from 'react';
import classes from "./NavButtons.css";
import Button from "../../../UI/Button/Button";
import Routing from '../../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

const navButtons = props => {
    const loginPageHandler = () => {
        window.location.href = '/authentication#/login';
    }

    const signUpPageHandler = () => {
        window.location.href = '/authentication#/';
    }

    const logoutHandler = () => {
        window.location.href = (Routing.generate('authenticate_logout'))
    }

    const profileHandler = () => {
        window.location.href = (Routing.generate('profile'))
    }

    const navButton = !props.user ?
        <div className={classes.NavBar}>
            <Button background clicked={loginPageHandler}>Login</Button>
            <Button clicked={signUpPageHandler}>Sign Up</Button>
        </div> :
        <div className={classes.NavBar}>
            <Button clicked={profileHandler}>Profile</Button>
            <Button>Upload</Button>
            <Button clicked={logoutHandler}>Logout</Button>
        </div>;

    return (
        <>
            {navButton}
        </>
    );
}

export default navButtons;
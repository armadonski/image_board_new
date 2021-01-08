import React from 'react';
import classes from './Authentication.css';
import Label from '../../UI/Label/Label';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import {Route} from "react-router-dom";
import RegistrationForm from "../../Form/Authentication/RegistrationForm/RegistrationForm";
import LoginForm from "../../Form/Authentication/LoginForm/LoginForm";

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

const authentication = props => {
    {
        return (
            <>
                <Label class={'Label_no_background'}><a className={classes.Link} href={Routing.generate('index')}>Back
                    to main page</a></Label>
                <div className={classes.Authentication}>
                    <Route
                        path="/"
                        exact
                        render={({}) => {
                            return <RegistrationForm/>
                        }}
                    />
                    <Route
                        path="/login"
                        render={({}) => {
                            return <LoginForm/>
                        }}
                    />
                </div>
            </>
        );
    }

}

export default authentication;
import React from 'react';
import classes from './Authentication.css';
import {Route} from "react-router-dom";
import RegistrationForm from "../../Form/Authentication/RegistrationForm/RegistrationForm";
import LoginForm from "../../Form/Authentication/LoginForm/LoginForm";
import BackToIndex from '../../Navigation/BackToIndex/BackToIndex';
import Logo from "../../Logo/Logo";

const authentication = props => {
    {
        return (
            <>
                <BackToIndex/>
                <div className={classes.Authentication}>
                    <Logo/>
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
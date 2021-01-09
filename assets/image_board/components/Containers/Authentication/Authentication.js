import React from 'react';
import classes from './Authentication.css';
import Label from '../../UI/Label/Label';
import {Route} from "react-router-dom";
import RegistrationForm from "../../Form/Authentication/RegistrationForm/RegistrationForm";
import LoginForm from "../../Form/Authentication/LoginForm/LoginForm";
import BackToIndex from '../../Navigation/BackToIndex';

const authentication = props => {
    {
        return (
            <>
                <BackToIndex/>
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
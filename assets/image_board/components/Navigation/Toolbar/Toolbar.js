import React from 'react';
import Logo from '../../Logo/Logo';
import Button from '../../UI/Button/Button';
import classes from './Toolbar.css';

const toolbar = props => {
        const loginPageHandler = () => {
            window.location.href = '/authentication#/login'
        }

        const signUpPageHandler = () => {
            window.location.href = '/authentication#/'
        }

        return (
            <>
                <div className={classes.Toolbar}>
                    <Logo/>
                    <div className={classes.NavBar}>
                        {props.user}
                        <Button background clicked={loginPageHandler}>Login</Button>
                        <Button clicked={signUpPageHandler}>Sign Up</Button>
                    </div>
                </div>
            </>
        )
    }
;

export default toolbar;
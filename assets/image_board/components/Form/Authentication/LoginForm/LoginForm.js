import React, {Component} from 'react';
import classes from './LoginForm.css';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import Logo from '../../../Logo/Logo';
import Card from '../../../UI/Card/Card';
import Label from '../../../UI/Label/Label';
import Axios from "axios";
import Routing from '../../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class LoginForm extends Component {
    state = {
        email: null,
        password: null,
        errors: null
    };

    signUpPageHandler = () => {
        window.location.href = '/authentication#/'
    }

    loginHandler = () => {
        const email = this.state.email;
        const password = this.state.password;

        const data = {
            email: email,
            password: password
        };
        Axios.post(Routing.generate('authenticate_login'), data).then(response => {
            window.location.href = Routing.generate('index');
            console.log(response);
        }).catch(error => {
            const errors = error.response.data.error;
            console.log(errors)
            this.setState({errors: [...errors]}
            )
        })
    }

    displayErrors = () => {
        const error = this.state.errors;
        return (
            error ?
                <Label class={'Label_error'}>
                    {error}
                </Label> : null
        );
    }

    emailHandler = e => {
        this.setState({
            email: e.target.value
        })
    }

    passwordHandler = e => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        const errors = this.displayErrors();

        return (
            <>
                <div className={classes.FormGroup}>
                    <Logo/>
                    <Card>
                        <div className={classes.InputGroup}>
                            <Input type='text' onChange={this.emailHandler} placeholder='Enter your email address'/>
                            <Input type='password' onChange={this.passwordHandler} placeholder='Enter your password'/>
                        </div>
                        <div className={classes.Errors}>{errors}</div>
                    </Card>
                </div>
                <div className={classes.ButtonGroup}>
                    <Button clicked={this.loginHandler}>Sign In</Button>
                    <Button background='NoBackground' clicked={this.signUpPageHandler}>Sign Up</Button>
                </div>
            </>
        );
    }
}

export default LoginForm;
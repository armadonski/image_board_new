import React, {Component} from 'react';
import classes from './RegistrationForm.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Logo from '../../Logo/Logo';
import Card from '../../UI/Card/Card';
import Axios from "axios";
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class RegistrationForm extends Component {
    state = {
        email: null,
        username: null,
        password: null,
        retypePassword: null,
        error: null,
        success: null
    };

    emailHandler = e => {
        this.setState({
            email: e.target.value
        })
    }

    usernameHandler = e => {
        this.setState({
            username: e.target.value
        })
    }

    passwordHandler = e => {
        this.setState({
            password: e.target.value
        })
    }

    retypePasswordHandler = e => {
        this.setState({
            retypePassword: e.target.value
        })
    }

    registrationHandler = () => {
        const email = this.state.email;
        const nickname = this.state.username;
        const password = this.state.password;

        const data = {
            email: email,
            nickname: nickname,
            password: password
        }
        Axios.post(Routing.generate('authenticate_register'),
            data
        ).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error.response)
        })
    };

    checkUsernameHandler = () => {
        const username = this.state.username;
        if (username) {
            const data = {
                username: username
            };
            Axios.post(Routing.generate('authenticate_check_username'),
                data
            ).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error.response)
            })
        }
    }

    checkEmailHandler = () => {
        const email = this.state.email;
        if (email) {
            const data = {
                email: email
            };
            Axios.post(Routing.generate('authenticate_check_email'),
                data
            ).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error.response)
            })
        }
    }

    render() {
        return (
            <>
                <div className={classes.FormGroup}>
                    <Logo/>
                    <Card>
                        <div className={classes.InputGroup}>
                            <Input type="email" onBlur={this.checkEmailHandler} onChange={this.emailHandler}
                                   placeholder="E-mail address"/>
                            <Input type="text" onBlur={this.checkUsernameHandler} onChange={this.usernameHandler}
                                   placeholder="Username"/>
                            <Input type="password" onChange={this.passwordHandler} placeholder="Password"/>
                            <Input type="password" onChange={this.retypePasswordHandler} placeholder="Retype Password"/>
                        </div>
                    </Card>
                </div>
                <div className={classes.ButtonGroup}>
                    <Button background='NoBackground'>Sign In</Button>
                    <Button clicked={this.registrationHandler}>Register</Button>
                </div>
            </>
        );
    }
}

export default RegistrationForm;
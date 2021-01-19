import React, {Component} from 'react';
import classes from './LoginForm.css';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import Tooltip from '../../../UI/Tooltip/Tooltip';
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
        }).catch(error => {
            const errors = error.response.data.error;
            this.setState({errors: errors}
            )
        })
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

    blurTooltip = () => {
        this.setState(
            {
                errors: null
            }
        )
    }

    render() {
        return (
            <>
                <div className={classes.FormGroup}>
                    <Card>
                        <div className={classes.InputGroup}>
                            <Input type='text' onChange={this.emailHandler} placeholder='Enter your email address'/>
                            <Input type='password' onChange={this.passwordHandler} placeholder='Enter your password'/>
                        </div>
                    </Card>
                </div>
                <div className={classes.ButtonGroup}>
                    <Tooltip tooltipContent={this.state.errors} error blur={this.blurTooltip} show={this.state.errors}>
                        <Button clicked={this.loginHandler}>Sign In</Button>
                    </Tooltip>
                    <Button background='NoBackground' clicked={this.signUpPageHandler}>Sign Up</Button>
                </div>
            </>
        );
    }
}

export default LoginForm;
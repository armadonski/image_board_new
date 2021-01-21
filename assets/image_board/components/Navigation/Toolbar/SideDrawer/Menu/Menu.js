import React, {Component} from 'react';
import classes from './Menu.css';
import Logo from '../../../../Logo/Logo';
import Upload from "../../../../Posts/Upload/Upload";
import Routing from '../../../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class Menu extends Component {
    state = {
        upload: false
    };

    loginPageHandler = () => {
        window.location.href = '/authentication#/login';
    }

    signUpPageHandler = () => {
        window.location.href = '/authentication#/';
    }

    uploadHandler = () => {
        this.setState({
            upload: true
        })
    }

    uploadModalCloseHandler = () => {
        this.setState({
            upload: false
        })
    }

    logoutHandler = () => {
        window.location.href = (Routing.generate('authenticate_logout'))
    }

    render() {
        return (
            <>
                <Upload show={this.state.upload} close={this.uploadModalCloseHandler}/>
                <div className={classes.MenuContainer}>
                    <Logo/>
                    <div className={classes.Menu}>
                        {this.props.user ?
                            <div className={classes.Menu}>
                                <a onClick={this.uploadHandler}>Upload</a>
                                <a onClick={this.logoutHandler}>Logout</a>
                            </div>
                            : <div className={classes.Menu}>
                                <a onClick={this.loginPageHandler}>Login</a>
                                <a onClick={this.signUpPageHandler}>Sign Up</a>
                            </div>
                        }
                    </div>
                </div>
            </>
        );
    }

}

export default Menu;
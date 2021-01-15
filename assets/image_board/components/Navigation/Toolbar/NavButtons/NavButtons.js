import React, {Component} from 'react';
import classes from "./NavButtons.css";
import Button from "../../../UI/Button/Button";
import Upload from '.././../../Posts/Upload/Upload';
import Routing from '../../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class NavButtons extends Component {
    state = {
        upload: false
    };

    loginPageHandler = () => {
        window.location.href = '/authentication#/login';
    }

    signUpPageHandler = () => {
        window.location.href = '/authentication#/';
    }

    logoutHandler = () => {
        window.location.href = (Routing.generate('authenticate_logout'))
    }

    profileHandler = () => {
        window.location.href = (Routing.generate('profile'))
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

    navButton = !this.props.user ?
        <div className={classes.NavBar}>
            <Button background clicked={this.loginPageHandler}>Login</Button>
            <Button clicked={this.signUpPageHandler}>Sign Up</Button>
        </div> :
        <div className={classes.NavBar}>
            {/*<Button clicked={this.profileHandler}>Profile</Button>*/}
            <Button clicked={this.uploadHandler}>Upload</Button>
            <Button clicked={this.logoutHandler}>Logout</Button>
        </div>;

    render() {
        return (
            <>
                <Upload show={this.state.upload} close={this.uploadModalCloseHandler}/>
                {this.navButton}
            </>
        );
    }
}

export default NavButtons;
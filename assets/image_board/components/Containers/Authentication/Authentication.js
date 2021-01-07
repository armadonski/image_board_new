import React from 'react';
import classes from './Authentication.css';
import RegistrationFrom from '../../Form/Authentication/RegistrationForm';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

const authentication = props => {
    {
        return (
            <>
                <a href={Routing.generate('index')}>Back to main page</a>
                <div className={classes.Authentication}>
                    <RegistrationFrom/>
                </div>
            </>
        );
    }
}

export default authentication;
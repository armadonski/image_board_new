import React, {Component} from 'react';
import classes from './Authentication.css';
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import Axios from "axios";
import Input from '../../UI/Input/Input';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class Authentication extends Component {
    render() {
        return (
            <div>
                <a href='/'>Back to main page</a>
                <Input/>
            </div>
        );
    }
}

export default Authentication;
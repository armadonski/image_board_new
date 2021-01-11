import React from 'react';
import Label from "../../UI/Label/Label";
import classes from "./BackToIndex.css";
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

const backToIndex = props => (
    <Label class={'Label_grey'}>
        <a className={classes.Link} href={Routing.generate('index')}>
            Back to main page
        </a>
    </Label>
);

export default backToIndex;
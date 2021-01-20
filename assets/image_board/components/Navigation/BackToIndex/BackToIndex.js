import React from 'react';
import Label from "../../UI/Label/Label";
import classes from "./BackToIndex.css";
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import {MdBackspace} from 'react-icons/md';

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

const backToIndex = props => (
    <>
        <a className={classes.Link} href={Routing.generate('index')}>
            <Label class={'Label_grey'}>
                <MdBackspace/>
            </Label>
        </a>
    </>
);

export default backToIndex;
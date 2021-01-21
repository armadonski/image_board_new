import React from 'react';
import classes from './DrawerToggle.css';
import {BsLayoutSidebarInsetReverse} from 'react-icons/bs';

const drawerToggle = props => {
    return (
        <div className={[classes.DrawerToggle, props.active ? classes.Active : null].join(' ')} onClick={props.open}>
            <span><BsLayoutSidebarInsetReverse/></span>
        </div>
    );
}

export default drawerToggle;
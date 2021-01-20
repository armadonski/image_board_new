import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = props => {
    return (
        <div className={[classes.DrawerToggle, props.active ? classes.Active : null].join(' ')} onClick={props.open}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggle;
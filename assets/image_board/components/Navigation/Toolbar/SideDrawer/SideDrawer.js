import React from 'react';
import classes from './SideDrawer.css';
import Backdrop from '../../../hoc/Backdrop/Backdrop';
import Menu from './Menu/Menu';

const sideDrawer = props => {
    return (
        <>
            {
                props.show ?
                    <div>
                        <Backdrop show={props.show} clicked={props.close}/>
                        <div className={classes.SideDrawer}>
                            <Menu user={props.user}/>
                        </div>
                    </div> : null
            }
        </>
    );
}

export default sideDrawer;
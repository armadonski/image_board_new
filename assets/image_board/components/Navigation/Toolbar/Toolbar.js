import React from 'react';
import Logo from '../../Logo/Logo';
import NavButtons from './NavButtons/NavButtons';
import classes from './Toolbar.css';

const toolbar = props => {
        return (
            <>
                <div className={classes.Toolbar}>
                    <Logo/>
                    <NavButtons user={props.user}/>
                </div>
            </>
        )
    }
;

export default toolbar;
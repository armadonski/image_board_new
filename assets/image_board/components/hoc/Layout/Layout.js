import React from 'react';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = props => (
    <>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
        <footer>Footer</footer>
    </>
);

export default layout;
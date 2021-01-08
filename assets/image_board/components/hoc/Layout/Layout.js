import React from 'react';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const layout = props => (
    <>
        <Toolbar user={props.user}/>
            <main className={classes.Content}>
                {props.children}
            </main>
            <footer>Copyright Gigelius 2020</footer>
    </>
);

export default layout;
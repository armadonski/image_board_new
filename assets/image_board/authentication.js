import React from 'react';
import ReactDOM from 'react-dom';
import Authentication from './components/Containers/Authentication/Authentication';
import {HashRouter, Link} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Authentication/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('index')
);

import React from 'react';
import ImageBoard from "./components/Containers/ImageBoard/ImageBoard";
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <ImageBoard user={user}/>
    </React.StrictMode>,
    document.getElementById('index')
);

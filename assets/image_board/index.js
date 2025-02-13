import React from 'react';
import ImageBoard from "./components/Containers/ImageBoard/ImageBoard";
import ReactDOM from 'react-dom';
import Layout from './components/hoc/Layout/Layout';

ReactDOM.render(
    <React.StrictMode>
        <Layout user={user}>
            <ImageBoard user={user}/>
        </Layout>
    </React.StrictMode>,
    document.getElementById('index')
);

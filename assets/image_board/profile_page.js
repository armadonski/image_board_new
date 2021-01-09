import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from "./components/Containers/ProfilePage/ProfilePage";
import Layout from './components/hoc/Layout/Layout';

ReactDOM.render(
    <React.StrictMode>
        <Layout user={user}>
            <ProfilePage user={user}/>
        </Layout>
    </React.StrictMode>,
    document.getElementById('index')
);

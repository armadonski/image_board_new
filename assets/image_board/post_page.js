import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/hoc/Layout/Layout';
import PostPageContainer from './components/Containers/ImageBoard/PostPage/PostPageContainer'
import PostPage from "./components/Posts/PostPage/PostPage";

ReactDOM.render(
    <React.StrictMode>
        <Layout user={user}>
            <PostPageContainer>
                <PostPage user={user} post={post}/>
            </PostPageContainer>
        </Layout>
    </React.StrictMode>,
    document.getElementById('index')
);

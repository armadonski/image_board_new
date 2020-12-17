import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import Posts from '../Posts/Posts';

class ImageBoard extends Component {
    state = {
        helloWorld: 'Hello World!'
    }

    render() {
        return (
            <Layout>
                Stuff
                <Posts/>
                Stuff
            </Layout>
        );
    }
}

export default ImageBoard;
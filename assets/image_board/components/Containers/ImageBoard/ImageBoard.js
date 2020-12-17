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
                <div>
                    Stuff
                </div>
                <Posts/>
                <div>
                    Stuff
                </div>
            </Layout>
        );
    }
}

export default ImageBoard;
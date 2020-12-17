import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';

class ImageBoard extends Component {
    state = {
        helloWorld: 'Hello World!'
    }

    render() {
        return (
            <Layout>
                {this.state.helloWorld}
            </Layout>
        );
    }
}

export default ImageBoard;
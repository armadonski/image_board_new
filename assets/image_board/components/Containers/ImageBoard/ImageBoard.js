import React, {Component} from 'react';
import Posts from '../../Posts/Posts';


class ImageBoard extends Component {

    render() {
        return (
            <div>
                <Posts user={user}/>
            </div>
        );
    }
}

export default ImageBoard;
import React, {Component} from 'react';
import Modal from "../../UI/Modal/Modal";
import Dropzone from 'react-dropzone'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './Upload.css';

class Upload extends Component {
    state = {
        file: null
    }

    render() {
        return (
            <Modal show={this.props.show} modalClosed={this.props.close}>
                <div className={classes.UploadForm}>
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <div className={classes.DropZone} {...getRootProps()}>
                                <h1>Upload a new post</h1>
                                <input {...getInputProps()} />
                                <div>Drag here</div>
                            </div>
                        )}
                    </Dropzone>
                    <Input type='text' placeholder={"Type in the caption"}/>
                    <Input type='text' placeholder={"Type in the tags"}/>
                    <Button>Upload Post</Button>
                </div>
            </Modal>
        );
    }
}

export default Upload;
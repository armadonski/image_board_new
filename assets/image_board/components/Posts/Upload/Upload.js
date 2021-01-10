import React, {Component} from 'react';
import Modal from "../../UI/Modal/Modal";
import Dropzone from 'react-dropzone'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './Upload.css';
import Label from "../../UI/Label/Label";
import Routing from '../../../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min';
import Axios from "axios";

const routes = require('../../../../../public/js/fos_js_routes.json');
Routing.setRoutingData(routes);

class Upload extends Component {
    state = {
        file: '',
        files: [],
        errors: [],
        caption: '',
        tags: ''
    }

    displayErrors = () => {
        return this.state.errors ? this.state.errors.map((error, key) =>
            (
                <Label class={'Label_error'} key={key}>
                    {error}
                </Label>
            )
        ) : null;
    }

    setFileState(file) {
        this.setState({
            file: file
        })
    }

    uploadWidget = (getRootProps, getInputProps) => {
        return !this.state.file ? <div className={classes.DropZone} {...getRootProps()}>
                <h1>Upload a new post</h1>
                <input {...getInputProps()} />
                <div>Drag here</div>
            </div> :
            <div className={classes.DropZone} {...getRootProps()}>
                <input {...getInputProps()} />
                <img className={classes.ImagePreview} alt={'There was a problem loading the image'}
                     src={this.state.file}/>
            </div>;
    }

    previewImage = (acceptedFiles) => {
        this.setState({files: acceptedFiles})

        acceptedFiles.map(file => {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result
                this.setState({
                    file: result
                })
            }
            reader.readAsDataURL(file)
        })
    }

    captionHandler = e => {
        this.setState({
            caption: e.target.value
        })
    }

    tagsHandler = e => {
        this.setState({
            tags: e.target.value
        })
    }
    mapObjectsToArray = object => {
        return Object.keys(object).map(objectKey => {
            return object[objectKey];
        })
    };

    uploadHandler = () => {
        const caption = this.state.caption;
        const tags = this.state.tags;
        const file = this.state.files[0];
        console.log(this.state.files[0]);
        const fd = new FormData();
        fd.append('caption', caption);
        fd.append('tags', tags);
        fd.append('file', file);

        Axios.post(Routing.generate('upload_post'),
            fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
            console.log(response);
        }).catch((error) => {
            console.log(file);

            const errors = error.response.data;
            console.log(errors);
            this.setState(typeof errors !== 'object' ? {errors: [...errors]} : {
                errors: [...this.mapObjectsToArray(errors)]
            })
        });
    }

    render() {
        const errors = this.displayErrors();

        return (
            <Modal show={this.props.show} modalClosed={this.props.close}>
                <div className={classes.UploadForm}>
                    <Dropzone onDrop={acceptedFiles => {
                        this.previewImage(acceptedFiles);
                    }} maxFiles={1}>
                        {({getRootProps, getInputProps}) => (
                            this.uploadWidget(getRootProps, getInputProps)
                        )}
                    </Dropzone>
                    <Input onChange={this.captionHandler} type='text' placeholder={"Type in the caption"}/>
                    <Input onChange={this.tagsHandler} type='text' placeholder={"Type in the tags"}/>
                    {errors}
                    <Button clicked={this.uploadHandler}>Upload Post</Button>
                </div>
            </Modal>
        );
    }
}

export default Upload;
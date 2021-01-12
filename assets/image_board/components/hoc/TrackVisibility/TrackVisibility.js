import React, {Component} from 'react';

class TrackVisibility extends Component {
    ref = React.createRef();

    createObserver() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }

        let callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= 1) {
                    this.props.visible(this.props.uuid);
                }
            })
        };

        return new IntersectionObserver(callback, options);
    }

    componentDidMount() {
        const observer = this.createObserver();
        observer.observe(this.ref.current);
    }

    render() {
        return (
            <div ref={this.ref}>{this.props.children}</div>
        );
    }
}

export default TrackVisibility;
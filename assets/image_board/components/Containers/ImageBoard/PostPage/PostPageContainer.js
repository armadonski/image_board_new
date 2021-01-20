import React from 'react';
import classes from './PostPageContainer.css';

const postPageContainer = props=>{
    return (
        <div className={classes.PostPageContainer}>
            {props.children}
        </div>
    )
}

export default postPageContainer;
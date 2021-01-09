import React from 'react';
import classes from './Avatar.css';

const avatar = props => {

    const avatar = !props.userImage ?
        <img alt="cannot be loaded" src="/images/avatar/noAvatar.jpg" className={classes.Avatar}
             title={props.user}/> :
        <img alt="cannot be loaded" src={props.userImage} className={classes.Avatar}
             title={props.user}/>;

    return (
        <>
            <div className={classes.AvatarWidget}>
                {avatar}
                <div className={classes.Metadata}>
                    <p>{props.user}</p>
                    <p>point comments</p>
                </div>
            </div>
        </>
    );
}

export default avatar;
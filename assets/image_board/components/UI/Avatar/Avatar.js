import React from 'react';
import classes from './Avatar.css';

const avatar = props => {
    const noBackground = "/images/avatar/noAvatar.jpg";
    const avatar = !props.userImage ?
        <span className={props.small ? classes.SmallAvatar : classes.Avatar}
              style={{
                  backgroundImage: `url(${noBackground})`
              }}
              title={props.user}/> :
        <img alt="cannot be loaded" src={props.userImage} className={classes.Avatar}
             title={props.user}/>;

    return (
        <>
            <div className={classes.AvatarWidget}>
                {avatar}
                {
                    props.metadata ? <div className={classes.Metadata}>
                        <p>{props.user}</p>
                        <p>point comments</p>
                    </div> : null
                }

            </div>
        </>
    );
}

export default avatar;
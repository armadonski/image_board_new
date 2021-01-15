import React, {Component} from 'react';
import Avatar from '../../UI/Avatar/Avatar';
import classes from './ProfilePage.css';
import BackToIndex from '../../Navigation/BackToIndex/BackToIndex';

class ProfilePage extends Component {
    state = {}

    render() {
        return (
            <div className={classes.ProfilePage}>
                <Avatar user={this.props.user} metadata/>
                <BackToIndex/>
                <div className={classes.Tabs}>
                    Posts
                    Comments
                    Profile Info
                </div>
                <div className={classes.TabContent}>
                    Content
                </div>
            </div>
        );
    }
}

export default ProfilePage;
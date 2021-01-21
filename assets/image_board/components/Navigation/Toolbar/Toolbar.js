import React, {Component} from 'react';
import Logo from '../../Logo/Logo';
import NavButtons from './NavButtons/NavButtons';
import classes from './Toolbar.css';
import SideDrawer from './SideDrawer/SideDrawer';
import DrawerToggle from '../../UI/DrawerToggle/DrawerToggle';

class Toolbar extends Component {
    state = {
        showSideDrawer: false
    };

    openSideDrawerHandler = () => {
        const currentShowSideDrawer = this.state.showSideDrawer;
        this.setState({
            showSideDrawer: !currentShowSideDrawer
        })
    }

    render() {
        return (
            <>
                <div className={classes.Toolbar}>
                    <Logo/>
                    <DrawerToggle open={this.openSideDrawerHandler} active={this.state.showSideDrawer}/>
                    <NavButtons user={this.props.user}/>
                    <SideDrawer close={this.openSideDrawerHandler} show={this.state.showSideDrawer}
                                user={this.props.user}/>
                </div>
            </>
        );
    }
}

export default Toolbar;
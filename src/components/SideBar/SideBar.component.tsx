import React from 'react';
import { ILoginState } from '../../reducers';
import { Link, NavLink } from 'react-router-dom';
import { Users } from '../../models/Users';
import Toolbar from './Toolbar';
import SideDrawer from '../../components/SideBar/SideDrawer';
import BackDrop from '../../components/SideBar/BackDrop';
//import {ToggleSideBarButton} from '../SideBar/ToggleSideBarButton';
/*
This component is the navigation bar we will use at the top of our site for navigation purposes.
*/

interface ISideBarProps {
    user: Users
}

export class SideBarComponent extends React.Component<ISideBarProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false
        }
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        })
    }
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
        let backDrop;

        if (this.state.sideDrawerOpen) {
           
            backDrop = <BackDrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{ height: '100%' }}>
                <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backDrop}
                <main style={{ marginTop: "64px" }}>
                    
                </main>

            </div>

        )
    }
}
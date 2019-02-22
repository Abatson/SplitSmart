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
        //NO STATE
        this.state = {
            sideDrawerOpen: false
        }
    }

    //SHOULD BE ACTIONS
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        })
    }
    //SHOULD BE ACTIONS
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }

    render() {
        let backDrop;
        //THIS SHOULD BE IN PROPS
        if (this.state.sideDrawerOpen) {
           
            backDrop = <BackDrop click={this.backdropClickHandler} />
        }
        //I THINK MOVING THE TOOLBAR AWAY IS FINE BECAUSE OF REDUX
        //SIDEDRAWER HAS ALL THE ACTUAL STUFF
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
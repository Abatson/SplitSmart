import React from 'react';
import { ILoginState } from '../../reducers';
import { Link, NavLink } from 'react-router-dom';
import { Users } from '../../models/Users';
import { Fragment } from 'react';
import Toolbar from './Toolbar';
import SideDrawer from '../../components/SideBar/SideDrawer';
import BackDrop from '../../components/SideBar/BackDrop';
//import {ToggleSideBarButton} from '../SideBar/DrawerToggleButton'
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
    drawerToggleClickHandler = (event) => {
        event.preventDefault();
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
        let drawerClasses = ['side-drawer'];
        let backDrop;
        //THIS SHOULD BE IN PROPS
        if (this.state.sideDrawerOpen) {
            drawerClasses = ['side-drawer', 'open'];

        }
        else {
            drawerClasses = ['side-drawer', 'close'];

        }


        if (this.state.sideDrawerOpen) {
            backDrop = (
                <div className="backdrop" onClick={this.backdropClickHandler} />
            )
            //backDrop= <BackDrop click={this.backdropClickHandler} />
        }
        //I THINK MOVING THE TOOLBAR AWAY IS FINE BECAUSE OF REDUX
        //SIDEDRAWER HAS ALL THE ACTUAL STUFF
        return (
            <div style={{ height: '100%' }}>
                {/* <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />  */}

                {/* ************** TOOL BAR ******************* */}
                <header className="toolbar">
                    <nav className="toolbar_navigation">
                        {/* ************** DrawerToggleButton ******************* */}
                        <div className="toolbar_toggle-button">
                            {/* <DrawerToggleButton click={props.drawerToggleClickHandler} />  */}
                            <button className="toggle-button" onClick={this.drawerToggleClickHandler}>
                                <div className="toggle-button_line" />
                                <div className="toggle-button_line" />
                                <div className="toggle-button_line" />
                            </button>
                            {/* ************************************************************** */}
                        </div>
                        <div className="toolbar_toggle"><a href="/">Toggle SideBar</a></div>
                        <div className="spacer"></div>
                        <div className="toolbar_navigation-items">
                            <ul>
                                <li><a href="/">Profile</a></li>
                                <li><a href="/">Groups</a></li>
                                <li><a href="/">Debts</a></li>
                            </ul>
                        </div>
                    </nav>
                </header>

                {/* ************************************* */}

                {/* ***************** SIDE BAR ******************* */}
                {/* <SideDrawer show={this.state.sideDrawerOpen} /> */}
                <nav className={drawerClasses.join(' ')}  >
                    <ul>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Groups</a></li>
                    </ul>
                </nav>
                {/* ************************************************ */}
                {backDrop}
                <main style={{ marginTop: "64px" }}>

                </main>

            </div>

        )
    }
}
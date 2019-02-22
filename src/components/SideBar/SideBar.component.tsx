import React from 'react';
import { ILoginState } from '../../reducers';
import { NavLink } from 'react-router-dom';
import { Users } from '../../models/Users';
import { Fragment } from 'react';

/*This component is the navigation bar we will use at the top of our site for navigation purposes.
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
        event.preventDefault(); // Let's stop this event.
        event.stopPropagation(); // Really this time.
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
        }
        //I THINK MOVING THE TOOLBAR AWAY IS FINE BECAUSE OF REDUX
        //SIDEDRAWER HAS ALL THE ACTUAL STUFF
        return (
            <div style={{ height: '100%' }}>
                <header className="toolbar">
                    <nav className="toolbar_navigation">
                        <div className="toolbar_toggle-button">
                            <button className="toggle-button" onClick={this.drawerToggleClickHandler}>
                                <div className="toggle-button_line" />
                                <div className="toggle-button_line" />
                                <div className="toggle-button_line" />
                            </button>
                        </div>
                        <div className="toolbar_toggle"><NavLink to={{
                            pathname: '/'
                        }}>Toggle Sidebar</NavLink></div>
                        <div className="spacer"></div>
                        <div className="toolbar_navigation-items">
                            <ul>
                                <li><NavLink to={{
                                    pathname: '/'
                                }}></NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/'
                                }}></NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/'
                                }}></NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <nav className={drawerClasses.join(' ')} >
                    <ul>
                        <li><NavLink to={{
                            pathname: '/'
                        }}>Profile</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/'
                        }}>Groups</NavLink></li>
                    </ul>
                </nav>
                {backDrop}
                <main style={{ marginTop: "64px" }}></main>
            </div>
        )
    }
}
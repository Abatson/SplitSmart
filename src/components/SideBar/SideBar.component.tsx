import React from 'react';
import { ILoginState } from '../../reducers';
import { NavLink } from 'react-router-dom';
import { Users } from '../../models/Users';
import { Fragment } from 'react';
import  ModalAGComponent  from '../modals/ModalAG.container';

/*This component is the navigation bar we will use at the top of our site for navigation purposes.
*/
interface ISideBarProps {
    user: Users,
    sideDrawerOpen: boolean,
    backdropClick: () => void,
}
export class SideBarComponent extends React.Component<ISideBarProps, any> {
    constructor(props) {
        super(props);

    }
    render() {
        //I THINK MOVING THE TOOLBAR AWAY IS FINE BECAUSE OF REDUX
        //SIDEDRAWER HAS ALL THE ACTUAL STUFF
        return (
            <div style={{ height: '100%' }}>
                {this.props.sideDrawerOpen ? <nav className='side-drawer open'>
                    <div className="sidebarTop">
                        <span className="groupHeading">Groups</span>
                    </div>
                    <ModalAGComponent type="AddGroup" name="Add a Group" className="addAGroupBtn"/>
                    <ul>
                        <li><NavLink to={{
                            pathname: '/'
                        }}></NavLink></li>
                        <li><NavLink to={{
                            pathname: '/'
                        }}></NavLink></li>
                    </ul>
                </nav> : <nav className='side-drawer close'></nav>}
                {
                    this.props.sideDrawerOpen ?
                        <div className="backdrop" onClick={this.props.backdropClick} /> : null}

                <main style={{ marginTop: "64px" }}></main>
            </div>
        )
    }
}
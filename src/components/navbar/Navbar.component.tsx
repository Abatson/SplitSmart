import React, { Fragment } from 'react';
import { ILoginState } from '../../reducers';
import { Link, NavLink } from 'react-router-dom';
import { Users } from '../../models/Users';
import { FaUserAlt, FaSearch, Fa500px } from 'react-icons/fa';
import { ModalComponent } from '../modal/Modal.component';
import Modal from 'reactstrap/lib/Modal';

/*
This component is the navigation bar we will use at the top of our site for navigation purposes.

*/

interface INavbarProps {
    user: Users
    drawerToggle: () => void
}

export class NavBarComponent extends React.Component<INavbarProps, any> {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <Fragment>
             

                <header className="toolbar">
                    <nav className="toolbar_navigation">
                        <div className="toolbar_toggle-button">
                            <button className="toggle-button" onClick={this.props.drawerToggle}>
                                <div className="toggle-button_line" />
                                <div className="toggle-button_line" />
                                <div className="toggle-button_line" />
                            </button>
                        </div>
                        <div className="toolbar_toggle"><NavLink to={{
                            pathname: '/'
                        }}>Split$mart</NavLink></div>
                        <div className="spacer"></div>
                        <div className="toolbar_navigation-items">
                            <ul>
                                <li><form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">< FaSearch /></button></form></li>

                                <li><NavLink to={{
                                    pathname: '/profile',
                                    search: `?sort=${this.props.user.username}`,
                                    state: { fromDashboard: true }
                                }}><FaUserAlt /></NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/Group',
                                    search: `?sort=${this.props.user.username}`,
                                    state: { fromDashboard: true }
                                }}>Group</NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/Debts',
                                    search: `?sort=${this.props.user.username}`,
                                    state: { fromDashboard: true }
                                }}>Debts</NavLink></li>
                                <li><NavLink className='innerNavBar' to={{
                                    pathname: '/logout',
                                }} > Logout
                            </NavLink></li>

                            </ul>
                        </div>
                    </nav>
                   
                </header>

            </Fragment>
        )
    }
}
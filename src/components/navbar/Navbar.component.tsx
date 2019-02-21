import React from 'react';
import { ILoginState } from '../../reducers';
import { Link, NavLink } from 'react-router-dom';
import { Users } from '../../models/Users';
/*
This component is the navigation bar we will use at the top of our site for navigation purposes.

*/

interface INavbarProps {
    user: Users
}

export class NavBarComponent extends React.Component<INavbarProps, any> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navbar">
                <NavLink className='innerNavBar' to={{
                    pathname: '/profile',
                    search: `?sort=${this.props.user.username}`,
                    state: { fromDashboard: true }
                }} > Profile
                </NavLink>
                <NavLink className='innerNavBar' to={{
                    pathname: '/Group',
                    search: `?sort=${this.props.user.username}`,
                    state: { fromDashboard: true }
                }} > Group
                </NavLink>
                <NavLink className='innerNavBar' to={{
                    pathname: '/receipt',
                    state: { fromDashboard: true }
                }} > Receipts
                </NavLink>
                <NavLink className='innerNavBar' to={{
                    pathname: '/Debts',
                    search: `?sort=${this.props.user.username}`,
                    state: { fromDashboard: true }
                }} > Debts
                </NavLink>
                <Link className='innerNavBar' to={{
                    pathname: '/logout',
                }} > Logout
                </Link>
            </div >
        )
    }
}
import React from 'react';
import DrawerToggleButton from '../../components/SideBar/DrawerToggleButton';
//Whole class needs to be moved to our navbar
const toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerToggleClickHandler}/>
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
    )

}
export default toolbar;

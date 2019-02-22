import React from 'react';


const sideDrawer = props => {
    let drawerClasses =['side-drawer'];
    if(props.show){
        drawerClasses='side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Groups</a></li>
        </ul>
    </nav>
    )
};

export default sideDrawer;
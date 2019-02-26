import React, { Component } from 'react';
import './App.scss';
import { store } from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './include/Bootstrap';
//notice for our component import we are using the default import from the container file
//we need to do this so that redux can connect our component to the store and actions

import  LoginComponent  from './components/login/Login.container';
import  AccountSettingsComponent  from './components/accountsettings/AccountSettings.container';
import ProfileInfoComponent from './components/ProfileInfo/ProfileInfo.container';
import RegisterComponent  from './components/register/Register.container';
import  NavBarComponent  from './components/navbar/Navbar.container';
import DebtComponent from './components/debt/Debt.container';
import  AddGroupComponent  from './components/addGroup/AddGroup.container';



import SideBarComponent from './components/SideBar/SideBar.container';
import ModalASComponent from './components/modals/ModalAS.container';
import ModalGSComponent from './components/modals/ModalGS.container';
import ModalAGComponent from './components/modals/ModalAG.container';
import FooterComponent from './components/footer/Footer.container';
import  GroupSettingsComponent  from './components/groupSettings/GroupSettings.container';

class App extends Component {
  render() {
    return (
      // this is what makes it so we can use redux at all
      //we need to have all other components inside of the provider
      //however this is easy
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <div>
              <NavBarComponent />
              <SideBarComponent />
              <ModalASComponent />
              <ModalGSComponent />
              <ModalAGComponent />
              <FooterComponent/>
              <Route path='/login' component={LoginComponent} />
              <Route path='/usersettings' component={AccountSettingsComponent} />
              <Route path='/profile' search='?sort=username' component={ProfileInfoComponent} />
              <Route path='/register' component={RegisterComponent} />
              {/* //need a better path */}
              <Route path='/iou' component={DebtComponent} />

              <Route path='/addGroup' component={AddGroupComponent} />
              <Route path='/gsettings' component={GroupSettingsComponent}/>

            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

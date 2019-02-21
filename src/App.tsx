import React, { Component } from 'react';
import './App.scss';
import { store } from './Store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './include/Bootstrap';
//notice for our component import we are using the default import from the container file
//we need to do this so that redux can connect our component to the store and actions
import LoginComponent from './components/login/Login.container';
import AccountSettingsComponent from './components/accountsettings/AccountSettings.container';
import ProfileInfoComponent from './components/ProfileInfo/ProfileInfo.container';
import UserJoinsAGroupComponent from './components/UserJoinsAGroup/UserJoinsAGroup.container';


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
              <Route path='/login' component={LoginComponent} />
              <Route path='/usersettings' component={AccountSettingsComponent} />
              <Route path='/profileinfo/:username' component={ProfileInfoComponent} />
              <Route path='/userjoinsgroup/' component={UserJoinsAGroupComponent} />
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

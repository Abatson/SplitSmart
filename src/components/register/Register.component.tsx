import React from 'react';
import { IRegisterState } from '../../reducers';

interface IRegisterProps {
    register: IRegisterState,
    updatePassword: (password:string) => void,
    updateUsername: (username:string) => void,
    updateDisplayName: (displayName:string) => void,
    updateFirstName: (firstName:string) => void,
    updateLastName: (lastName:string) => void,
    updateEmail: (email:string) => void,
    updatePhone: (phone:string) => void,
    registerRequest: ( username:string, password:string, displayName:string, firstName:string, lastName: string, email:string, phone:string) => void,
    clearMessage: () => void

}

export class RegisterComponent extends React.Component<IRegisterProps, any> {
    constructor(props) {
      super(props);
    }

  componentDidMount() {
    this.props.clearMessage();
  }
  
    updateUsername = (event) => {
      this.props.updateUsername(event.target.value) 
    }

    updatePassword = (event) => {
      this.props.updatePassword(event.target.value)
    }

    updateDisplayName = (event) => {
      this.props.updateDisplayName(event.target.value)
    }

    updateFirstName = (event) => {
      this.props.updateFirstName(event.target.value)
    }

    updateLastName = (event) => {
      this.props.updateLastName(event.target.value)
    }

    updateEmail = (event) => {
      this.props.updateEmail(event.target.value)
    }

    updatePhone = (event) => {
      this.props.updatePhone(event.target.value)
    }
  
    register = (event) => {
      event.preventDefault();
      this.props.registerRequest(this.props.register.newUser.username, this.props.register.newUser.password,this.props.register.newUser.displayName,this.props.register.newUser.firstName,this.props.register.newUser.lastName, this.props.register.newUser.email, this.props.register.newUser.phone);
    }
  
  
    render() {
      const {username, password, displayName, firstName, lastName, email, phone } = this.props.register.newUser
      return (
        <div className='terminal'>
        <form className="form-signin" onSubmit={this.register}>
          <h1 className="h3 mb-3 font-weight-normal">Please register your information</h1>
          <label htmlFor="inputUsername" className="sr-only">Username</label>
          <input type="text"
            id="inputUsername"
            className="text-form"
            placeholder="Username"
            value={username}
            onChange={this.updateUsername}
            required />
          <label htmlFor="inputUsername" className="sr-only">Display Name</label>
          <input type="text"
            id="inputDisplayName"
            className="text-form"
            placeholder="Display Name"
            value={displayName}
            onChange={this.updateDisplayName}
            required />
            <label htmlFor="inputUsername" className="sr-only">First Name</label>
          <input type="text"
            id="inputFirstName"
            className="text-form"
            placeholder="First Name"
            value={firstName}
            onChange={this.updateFirstName}
            required />
            <label htmlFor="inputUsername" className="sr-only">Last Name</label>
          <input type="text"
            id="inputLastName"
            className="text-form"
            placeholder="Last Name"
            value={lastName}
            onChange={this.updateLastName}
            required />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password"
            id="inputPassword"
            className="text-form"
            placeholder="Password"
            value={password}
            onChange={this.updatePassword}
            required />
            <label htmlFor="inputUsername" className="sr-only">Email</label>
          <input type="text"
            id="inputEmail"
            className="text-form"
            placeholder="Email"
            value={email}
            onChange={this.updateEmail}
            required />
            <label htmlFor="inputEmail" className="sr-only">Phone Number</label>
          <input type="tel"
            id="inputPhone"
            className="text-form"
            placeholder="Phone #"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={phone}
            onChange={this.updatePhone}
            required />
          <p id="error-message">{this.props.register.registerFeedback}</p>
          <button className="button-form" type="submit">Register</button>
        </form>
        </div>
      )
    }
  
  }


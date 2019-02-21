import React from 'react';
import { Users } from '../../models/Users';
//import { reduxForm, Field } from 'redux-form';
import { Container } from 'reactstrap';



interface IAccountSettingsProps {
    user: Users,
    updatedUser: Users,
    updateUsername: (username: string) => void,
    updateDisplayName: (displayName: string) => void,
    updatePassword: (password: string) => void,
    updateFirstName: (firstName: string) => void,
    updateLastName: (lastName: string) => void,
    updateEmail: (email: string) => void,
    updateProfilePicture: (picture: URL) => void,
    updatePhoneNumber: (phone: string) => void,
    deactivateAccount: () => void,
    clearMessage: () => void
}

export class AccountSettingsComponent extends React.Component<IAccountSettingsProps, any>{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.clearMessage();
        this.props.updateUsername(this.props.user.username);
        this.props.updateDisplayName(this.props.user.displayName);
        this.props.updatePassword(this.props.user.password);
        this.props.updateFirstName(this.props.user.firstName);
        this.props.updateLastName(this.props.user.lastName);
        this.props.updateEmail(this.props.user.email);
        this.props.updatePhoneNumber(this.props.user.phone);
    }

    updateUsername = (event) => {
        this.props.updateUsername(event.target.value)
    }

    updateDisplayName = (event) => {
        this.props.updateDisplayName(event.target.value);
    }
    updatePassword = (event) => {
        this.props.updatePassword(event.target.value);
    }
    updateFirstName = (event) => {
        this.props.updateFirstName(event.target.value);
    }
    updateLastName = (event) => {
        this.props.updateLastName(event.target.value);
    }
    updateEmail = (event) => {
        this.props.updateEmail(event.target.value);
    }
    updatePhoneNumber = (event) => {
        this.props.updatePhoneNumber(event.target.value);
    }
    deactivateAccount = () => {
        this.props.deactivateAccount();
    }

    updateUser = (event) =>{
        event.preventDefault();
    }

    style = {
        border: "1px solid black"
        

    }
    render() {//renders here 
        return (

            <form onSubmit={this.updateUser}>
                <table style={this.style} id="accountSettingsTable" >
                    <tr>
                        <td><label htmlFor="username-input">Username </label>
                            <input type="text" className="form-control"  id="username-input" value={this.props.updatedUser.username} onChange={this.updateUsername} ></input>
                        </td>
                        <td><label htmlFor="displayName-input">Display Name </label>
                            <input type="text" className="form-control"  id="displayName-input" value={this.props.updatedUser.displayName} onChange={this.updateDisplayName} />
                        </td></tr>
                    <tr>
                        <td><label htmlFor="password-input">Password </label>
                            <input type="text" className="form-control"  id="password-input"  value={this.props.updatedUser.password} onChange={this.updatePassword} />
                        </td>
                        <td>
                            <label htmlFor="firstname-input">First Name </label>
                            <input type="text" className="form-control"  id="firstname-input"  value={this.props.updatedUser.firstName} onChange={this.updateFirstName} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="lastname-input">Last Name </label>
                            <input type="text" className="form-control"  id="lastname-input" value={this.props.updatedUser.lastName} onChange={this.updateLastName}/>
                        </td>
                        <td>


                            <label htmlFor="email-input">Email </label>
                            <input type="text" className="form-control"  id="email-input" value={this.props.updatedUser.email} onChange={this.updateEmail} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="phone-input">Phone </label>
                            <input type="text" className="form-control"  id="phone-input" value={this.props.updatedUser.phone} onChange={this.updatePhoneNumber}/>
                        </td>
                        <td>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </td>
                    </tr>
                </table>
            </form>


        )
    }
}
import React from 'react';
import { Users } from '../../models/Users';
import { reduxForm, Field } from 'redux-form';
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

    style = {
        border: "1px solid black"
        

    }
    render() {//renders here 
        return (

            <form>
                <table style={this.style} id="accountSettingsTable" >
                    <tr>
                        <td><label htmlFor="username-input">Username </label>
                            <input type="text" className="form-control" value="dunieski" id="username-input"/*value={this.props.updatedUser.username}*/></input>
                        </td>
                        <td><label htmlFor="displayName-input">Display Name </label>
                            <input type="text" className="form-control" value="duni" id="displayName-input"/*value={this.props.updatedUser.displayName}*/ />
                        </td></tr>
                    <tr>
                        <td><label htmlFor="password-input">Password </label>
                            <input type="text" className="form-control" value="password" id="password-input" /*value={this.props.updatedUser.password}*/ />
                        </td>
                        <td>
                            <label htmlFor="firstname-input">First Name </label>
                            <input type="text" className="form-control" value="Dunieski" id="firstname-input" /*value={this.props.updatedUser.firstName}*/ />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="lastname-input">Last Name </label>
                            <input type="text" className="form-control" value="Otano" id="lastname-input"/*value={this.props.updatedUser.lastName}*/ />
                        </td>
                        <td>


                            <label htmlFor="email-input">Email </label>
                            <input type="text" className="form-control" value="dunieskiotano@gmail.com" id="email-input"/*value={this.props.updatedUser.email}*/ />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="phone-input">Phone </label>
                            <input type="text" className="form-control" value="786984234" id="phone-input"/*value={this.props.updatedUser.phone}*/ />
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
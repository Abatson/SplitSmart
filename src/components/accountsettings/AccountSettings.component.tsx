import React from 'react';
import { Users } from '../../models/Users';


interface IAccountSettingsProps {
    // username: "dunieskiotano",//User
    // displayname: "dunieski",//GroupUser
    // password: "password",//User,
    // firstname: 'Dunieski',
    // lastname: 'Otano',
    // email: "dunieski@gmail.com",//User,
    // phonenumber: '7684949302',//User,
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

    render() {//renders here 
        return (
            <div>
                <p>{this.props.updatedUser.username}</p>
                <p>{this.props.updatedUser.displayName}></p>
                <p>{this.props.updatedUser.password}></p>
                <p>{this.props.updatedUser.firstName}></p>
                <p>{this.props.updatedUser.lastName}></p>
                <p>{this.props.updatedUser.email}</p>
                <p>{this.props.updatedUser.phone}</p>
            </div>

        )
    }
}
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
                <p>{this.props.user.username}</p>
                <p>{this.props.user.displayName}></p>
                <p>{this.props.user.password}></p>
                <p>{this.props.user.firstName}></p>
                <p>{this.props.user.lastName}></p>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.phone}</p>
            </div>

        )
    }
}
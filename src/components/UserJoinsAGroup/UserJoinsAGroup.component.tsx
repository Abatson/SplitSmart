import React from 'react';
import { Users } from '../../models/Users';

interface IUserJoinsAGroupProps {
    user: Users,
    userAdded: Users,
    addUsername: (username: string) => void,
    addDisplayName: (displayName: string) => void,
    addPassword: (password: string) => void,
    addFirstName: (firstName: string) => void,
    addLastName: (lastName: string) => void,
    addEmail: (email: string) => void,
    addPhoneNumber: (phone: string) => void,
    clearMessage: () => void
}

export class UserJoinsAGroupComponent extends React.Component<IUserJoinsAGroupProps, any>{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.clearMessage();
        this.props.addUsername(this.props.user.username);
        this.props.addDisplayName(this.props.user.displayName);
        this.props.addPassword(this.props.user.password);
        this.props.addFirstName(this.props.user.firstName);
        this.props.addLastName(this.props.user.lastName);
        this.props.addEmail(this.props.user.email);
        this.props.addPhoneNumber(this.props.user.phone);
    }

    addUsername = (event) => {
        this.props.addUsername(event.target.value)
    }

    addDisplayName = (event) => {
        this.props.addDisplayName(event.target.value);
    }
    addPassword = (event) => {
        this.props.addPassword(event.target.value);
    }
    addFirstName = (event) => {
        this.props.addFirstName(event.target.value);
    }
    addLastName = (event) => {
        this.props.addLastName(event.target.value);
    }
    addEmail = (event) => {
        this.props.addEmail(event.target.value);
    }
    addPhoneNumber = (event) => {
        this.props.addPhoneNumber(event.target.value);
    }
    

    style = {
        border: "1px solid black"
        

    }
    render() {//renders here 
        return (

            <form>
                <table style={this.style} id="userJoinsGroupTable" >
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
                            <button type="submit" className="btn btn-primary">Save</button>
                        </td>
                    </tr>
                    
                </table>
            </form>


        )
    }
}
import React from 'react';
import { Users } from '../../models/Users';

interface IUserRemovesOthersProps {
    user: Users,
    allUsers: Users[],
    params: any,
    userRemoved: Users,
    removeOtherUsers: (username: string) => void,
    clearMessage: () => void
}

export class UserRemovesOthersComponent extends React.Component<IUserRemovesOthersProps, any>{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.removeOtherUsers(this.props.params.username);
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
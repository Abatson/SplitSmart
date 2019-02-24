import React from 'react';
import { ILoginState } from '../../reducers';
import { Users } from '../../models/Users';
import { Url } from 'url';
import { Groups } from '../../models/Groups';

interface IAddGroupProps {
    user: Users,
    newGroup: Groups,
    usernameToAdd: string,
    updateGroupName: (groupName: string) => void,
    updateGroupPicture: (Url: Url) => void,
    updateGroupDescription: (groupDescription: string) => void,
    inviteUserToGroup: (username: string) => void,
    createGroup: (newGroup: Groups) => void,
    updateGroupOwner: (ownerId: number) => void,
    resetAddForm: () => void,
    updateUserToInvite: (usernameToAdd: string) => void
}

export class AddGroupComponent extends React.Component<IAddGroupProps, any> {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.updateGroupOwner(this.props.user.userId)
    }
    createGroup = (event) => {
        event.preventDefault(); //prevent default form submission
        this.props.createGroup(this.props.newGroup);
    }
    updateGroupName = (event) => {
        event.preventDefault(); //prevent default form submission
        this.props.updateGroupName(event.target.value);
    }
    updateDescription = (event) => {
        this.props.updateGroupDescription(event.target.value);
    }
    updateGroupPicture = (event) => {
        event.preventDefault();
        this.props.updateGroupPicture(event.target.value);
    }
    inviteUserToGroup = (event) => {
        event.preventDefault();
        this.props.inviteUserToGroup(this.props.user.username)
    }
    updateUserToInvite = (event) => {
        event.preventDefault();
        this.props.updateUserToInvite(event.target.value)
    }

    render() {
        console.log(this.props.newGroup)
        return (
            <div className="add-group-page">
                <form onSubmit={this.createGroup} className="add-group-form">
                    <table id='add-group-header'>
                        <tbody>
                            <tr id='add-group-row'>
                                <td>Group Name</td>
                                <td>Description</td>
                                <td>Picture</td>
                                <td>Invites</td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text"
                                        id="Group Name"
                                        className="text-form"
                                        placeholder="Group Name"
                                        value={this.props.newGroup.groupName}
                                        onChange={this.updateGroupName}
                                        required />
                                </td>
                                <td>
                                    <input type="text"
                                        id="Group Description"
                                        className="text-form"
                                        placeholder="Description"
                                        value={this.props.newGroup.groupDescription}
                                        onChange={this.updateDescription}
                                        required />
                                </td>
                                <td>
                                    <input type="url"
                                        id="Group Picture"
                                        className="text-form"
                                        placeholder="URL"
                                        value={this.props.newGroup.groupPicture}
                                        onChange={this.updateGroupPicture}
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button-form" type="submit">Create</button>
                </form>
                <form onSubmit={this.inviteUserToGroup} className="invite-user-to-group-form">
                    <table id='add-group-header'>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text"
                                        id="Invite User To Group"
                                        className="addUserToGroup"
                                        placeholder="Invite User"
                                        value={this.props.usernameToAdd}
                                        onChange={this.updateUserToInvite}
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button-form" type="submit">Add User</button>

                </form>
            </div >
        );
    }
}
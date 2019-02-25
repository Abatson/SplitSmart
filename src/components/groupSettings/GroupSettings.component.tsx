import React from 'react';
import { ILoginState } from '../../reducers';
import { Users } from '../../models/Users';
import { Url } from 'url';
import { Groups } from '../../models/Groups';

interface IGroupSettingsProps {
    user: Users,
    currentGroup: Groups,
    usernameToAdd: string,
    updateGroupName: (groupName: string) => void,
    updateGroupPicture: (Url: Url) => void,
    updateGroupDescription: (groupDescription: string) => void,
    inviteUserToGroup: (username: string) => void,
    resetAddForm: (usernameToAdd: string) => void,
    updateUserToAdd: (usernameToAdd: string) => void,
    updateGroup: (currentGroup: Groups) => void
}

export class GroupSettingsComponent extends React.Component<IGroupSettingsProps, any> {
    constructor(props) {
        super(props);
    }
    updateGroup = (event) => {
        this.props.updateGroup(event.target.value)
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
        this.props.inviteUserToGroup(this.props.usernameToAdd)
    }
    updateUserToAdd = (event) => {
        event.preventDefault();
        this.props.updateUserToAdd(event.target.value)
    }
    resetAddForm = (event) => {
        this.props.resetAddForm(event.target.value)
    }

    render() {
        //console.log(this.props.newGroup)
        return (
            <div className="group-settings-page">
                <form onSubmit={this.updateGroup} className="group-settings-form">
                    <table id='group-settings-header'>
                        <tbody>
                            <tr id='group-settings-row'>
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
                                        value={this.props.currentGroup.groupName}
                                        onChange={this.updateGroupName}
                                        required />
                                </td>
                                <td>
                                    <input type="text"
                                        id="Group Description"
                                        className="text-form"
                                        placeholder="Description"
                                        value={this.props.currentGroup.groupDescription}
                                        onChange={this.updateDescription}
                                        required />
                                </td>
                                <td>
                                    <input type="url"
                                        id="Group Picture"
                                        className="text-form"
                                        placeholder="URL"
                                        value={this.props.currentGroup.groupPicture}
                                        onChange={this.updateGroupPicture}
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button-form" type="submit">Create</button>
                </form>
                <form onSubmit={this.inviteUserToGroup} onReset={this.resetAddForm} className="invite-user-to-group-form">
                    <table id='group-settings-header'>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text"
                                        id="Invite User To Group"
                                        className="addUserToGroup"
                                        placeholder="Invite User"
                                        value={this.props.usernameToAdd}
                                        onChange={this.updateUserToAdd}
                                        required />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button-form" type="submit">Add User</button>
                    <button className="button-form" type="reset">Reset Entry</button>
                </form>
            </div >
        );
    }
}
import React from 'react';
import { ILoginState } from '../../reducers';
import { Users } from '../../models/Users';
import { Url } from 'url';
import { Groups } from '../../models/Groups';

interface IAddGroupProps {
    user: Users,
    allUsers: Users[]
    newGroup: Groups,
    updateGroupName: (groupName: string) => void,
    updateGroupPicture: (Url: Url) => void,
    updateGroupDescription: (groupDescription: string) => void,
    inviteUserToGroup: (usersArray: Users[]) => void,
    updateGroup: (newGroup: Groups) => void
}

export class AddGroupComponent extends React.Component<IAddGroupProps, any> {
    constructor(props) {
        super(props);
    }

    updateGroup = (event) => {
        event.preventDefault(); //prevent default form submission
        this.props.updateGroup(this.props.newGroup);
    }
    updateGroupName = (event) => {
        event.preventDefault(); //prevent default form submission
        this.props.updateGroupName(this.props.newGroup.groupName);
    }
    updateDescription = (event) => { 
        this.props.updateGroupDescription(this.props.newGroup.groupDescription);
    }
    updateGroupPicture = (event) => {
        this.props.updateGroupPicture(this.props.newGroup.groupPicture);
    }
    render() {
        return (
            <div className="add-group-page">
                <form onSubmit={this.updateGroup} className="add-group-form">
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
                                    <input type="image"
                                        id="Group Picture"
                                        className="text-form"
                                        placeholder="Description"
                                        value={this.props.newGroup.groupDescription}
                                        onChange={this.updateDescription}
                                        required />
                                </td>
                                <td>
                                    <div >
                                       <tr>Invite Users</tr> 
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="button-form" type="submit">Create</button>
                </form>
            </div >
        );
    }
}
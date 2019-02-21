import React from 'react'

import { Users } from '../../models/Users';
import { getUserProfile } from '../../actions/profileinfo/ProfileInfo.actions';

interface IProfileInfo {
    user: Users,
    params: any,
    profileUser: Users,
    getUserProfile: (username: string) => void
}

export class ProfileInfoComponent extends React.Component<IProfileInfo, any> {
    constructor(props) {
        super(props);
    }

componentDidMount() {
    this.props.getUserProfile(this.props.params.sort);
}

    render() {
        // const params = qs(this.props.ownProps.location.search)
        // console.log(this.props.ownProps.location.search)
        // console.log(params.sort)
        
        return (
            <div className="surroundingBox">
                <h1>Profile</h1>
                <div>
                    <img src="" width="" height=""></img>
                </div>
                <label>{this.props.params.sort}sdfs</label>
                <label>{this.props.profileUser.displayName}sdf</label>
                <label>{this.props.profileUser.password}sdf</label>
                <label>{this.props.profileUser.firstName}</label>
                <label>{this.props.profileUser.lastName}</label>
                <label>{this.props.profileUser.email}</label>
                <label>{this.props.profileUser.phone}</label>
            </div>

        )
    }
}

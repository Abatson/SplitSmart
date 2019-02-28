import React from 'react'
import { Groups } from '../../models/Groups';
import { Receipt } from '../../models/Receipt';
import { NavBarComponent } from '../navbar/Navbar.component';
import { SideBarComponent } from '../SideBar/SideBar.component';
import { bindActionCreators } from 'redux';
import { initializeReceipts } from '../../actions/receipt/Receipt.actions';
import ReceiptComponent from '../receipt/Receipt.container';
import { getAllGroups, setCurrentGroup } from '../../actions/Group/Group.action';
import { Users } from '../../models/Users';


interface IGroupProps {
    user: Users,
    currentGroup: Groups,
    allGroups: Groups[]
    setCurrentGroup: (groupId: number) => void,
    getAllGroups: (userId: number) => void,
}

export class GroupComponent extends React.Component<IGroupProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        initializeReceipts(this.props.currentGroup.groupId);//call action initialize receipts
        getAllGroups(this.props.user.userId)
    }

    setCurrentGroup = (groupId: number) => {
        this.props.setCurrentGroup(groupId);
    }
render() {

    return (
        <div>
            <div className="receipt-in-group-component">
                <ReceiptComponent />>
                </div>
            <div className="list-of-groups">
            <table className="table-list-of-groups">
                <thead className="table-head-list-of-groups">
                <tr className="top-table-row-list-of-groups">
                    <th>Group Name</th>
                    <th>Group Picture</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.props.allGroups.map(group => (
                            <tr key={'group' + group.groupId}>
                                <td>{group.groupName}</td>
                                <td><img src={group.groupPicture} /></td>
                                <td><button onClick={() => this.setCurrentGroup(group.groupId)}>View Group</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
                </div>
        </div>
    )
}
}

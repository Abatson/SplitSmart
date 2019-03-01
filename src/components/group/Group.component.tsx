import React from 'react'
import { Groups } from '../../models/Groups';
import { ReceiptDisplayComponent } from '../receipt/Receipt.display.component';
import { Receipt } from '../../models/Receipt';
import { NavBarComponent } from '../navbar/Navbar.component';
import { SideBarComponent } from '../SideBar/SideBar.component';
import { bindActionCreators } from 'redux';
import { initializeReceipts } from '../../actions/receipt/Receipt.actions';


interface IGroupProps {
    currentGroup: Groups,
    setCurrentGroup: () => void,

}

export class GroupComponent extends React.Component<IGroupProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        initializeReceipts(this.props.currentGroup.groupId);//call action initialize receipts
    }

    render() {

        return (
            <div>
                
            </div>
        )
    }
}

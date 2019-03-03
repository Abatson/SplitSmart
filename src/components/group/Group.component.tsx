import React from 'react'
import { Groups } from '../../models/Groups';
import { Receipt } from '../../models/Receipt';
import { NavBarComponent } from '../navbar/Navbar.component';
import { SideBarComponent } from '../SideBar/SideBar.component';
import { bindActionCreators } from 'redux';

import ReceiptComponent from '../receipt/Receipt.container';

import { Users } from '../../models/Users';
import { Line } from '../../models/Line';
import GroupSettingsComponent from '../groupSettings/GroupSettings.container';
import  ModalAGComponent  from '../modals/ModalAG.container';
import { Redirect } from 'react-router';


interface IGroupProps {
    user: Users,
    currentGroup: Groups,
    allGroups: Groups[],
    newReceipt: Receipt,
    newLine: Line,
    lineNameToAdd: string,
    linePriceToAdd: number,
    setCurrentGroup: (currentGroup: Groups) => void,
    getAllGroups: (userId: number) => void,
    addReceipt: (newReceipt: Receipt, currentGroup: Groups, owner: Users) => void,
    updateReceiptName: (receiptName: string) => void,
    addLineToReceiptButton: () => void,
    addLineToReceipt: (newLine: Line) => void,
    updateNameLineToAdd: (lineNameToAdd: string) => void,
    resetAddLineForm: () => void,
    updateLinePriceToAdd: (linePriceToAdd: number) => void,
    resetAddLineNameForm: (lineNameToAdd: string) => void,
    resetAddLinePriceForm: (linePriceToAdd: number) => void,
    initializeReceipts: (groupId: number) => void,

}

export class GroupComponent extends React.Component<IGroupProps, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.currentGroup.groupId)
        console.log(this.props.user.userId)
        this.props.getAllGroups(this.props.user.userId)
        console.log(this.props.allGroups)
        //this.props.initializeReceipts(this.props.currentGroup.groupId);//call action initialize receipts
    }
    addReceipt = (event) => {
        event.preventDefault()
        this.props.addReceipt(this.props.newReceipt, this.props.currentGroup, this.props.user);
    }
    updateReceiptName = (event) => {
        event.preventDefault(); //prevent default form submission
        this.props.updateReceiptName(event.target.value);
    }
    updateNameLineToAdd = (event) => {
        this.props.updateNameLineToAdd(event.target.value);
    }
    addLineToReceiptButton = (event) => {
        event.preventDefault();
        this.props.addLineToReceipt(this.props.newLine)
        this.props.resetAddLineForm()
    }
    resetAddLineNameForm = (event) => {
        this.props.resetAddLineNameForm(event.target.value)
    }
    updateLinePriceToAdd = (event) => {
        event.preventDefault();
        this.props.updateLinePriceToAdd(event.target.value)
    }
    resetAddLinePriceForm = (event) => {
        this.props.resetAddLinePriceForm(event.target.value)
    }

    // checkIfCurrentGroupIsntZero = () => {
    //     if (this.props.allGroups != []) {
    //         this.props.allGroups.map(group => (
    //             <tr key={'group' + group.groupId}>
    //                 <td>{group.groupName}</td>
    //                 <td><img src={group.groupPicture} /></td>
    //                 <td><button onClick={() => this.setCurrentGroup(group)}>View Group</button></td>
    //             </tr>
    //         ))
    //     }
    // }
    render() {
        let linesDisplay: any[] = [];
        console.log(this.props.newReceipt.lines)
        if (this.props.newReceipt.lines) {
            for (const key of this.props.newReceipt.lines) {
                linesDisplay.push(
                    <tr key={'group' + key.lineId}>
                        <td>{key.lineName}</td>
                        <td>{key.linePrice}</td>
                    </tr>
                )
            }
        }
        if(this.props.user.userId === 0) {
            return (
                <Redirect to='/login'/>
            )
        } else
        return (
            <div>
                <div className="receipt-in-group-component">
                    <ModalAGComponent type="GroupSettings" />
                    <ReceiptComponent />
                </div>
                <div className="add-receipt">
                    <table id='add-receipt-header'>
                        <tbody>
                            <tr id='add-receipt-row'>
                                <td>Receipt Name</td>
                                <td>Lines</td>
                            </tr>
                            <tr>

                                <td>
                                    <form onSubmit={this.addReceipt} className="add-receipt-form">
                                        <input type="text"
                                            id="Receipt Name"
                                            className="text-form"
                                            placeholder="Receipt Name"
                                            value={this.props.newReceipt.receiptName}
                                            onChange={this.updateReceiptName}
                                            required />
                                        <button className="button-form" type="submit">Add Receipt</button>
                                    </form>
                                </td>
                                <td>
                                    {
                                        linesDisplay
                                    }
                                    <form onSubmit={this.addLineToReceiptButton} className="invite-user-to-group-form">
                                        <input type="text"
                                            id="Add Line To Receipt"
                                            className="addLineToReceipt"
                                            placeholder="Item"
                                            value={this.props.lineNameToAdd}
                                            onChange={this.updateNameLineToAdd}
                                            required />
                                        <input type="number"
                                            id="Add Line Price To Receipt"
                                            className="addLinePriceToReceipt"
                                            placeholder="Price"
                                            value={this.props.linePriceToAdd}
                                            onChange={this.updateLinePriceToAdd}
                                            required />
                                        <button className="button-form" type="submit">Add Line</button>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

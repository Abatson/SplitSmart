import React from 'react';
import { IGroupState } from '../../reducers';
import { ReceiptDisplayComponent } from './Receipt.display.component';
import { Receipt } from '../../models/Receipt';
import { Line } from '../../models/Line';
import { Item } from '../../models/Item';
import { Users } from '../../models/Users';


//requires the importing of Line and Item classes, which should also be in Store
 
 const uID = 1;
 const lineID = 1;
 const receiptID = 0;
 let receiptTest : Receipt[]
 let receiptLines : Line[]
 
//passing everything thru props
interface IGroupProps {
    // receipt: Receipt,
    user: Users,
    groupReceipts: Receipt[],
    //lines have a 1:M relationship with items
    initializeReceipts: ()  => void,
    claimReceipt: (receiptID: number, claimant:number) => void, //as a user I would like to be able to claim a receipt
    claimLine: (receiptID: number, claimant:number, claimed: number) => void, //as a user I would like to be able to claim a line
}
export class ReceiptComponent extends React.Component<IGroupProps, any> {
  constructor(props) {
    super(props);
  }

// whenever the change the username input, call the updateUsername action with the value
initializeReceipts = () => {
  this.props.initializeReceipts() 
}

// whenever the change the username input, call the updateUsername action with the value
claimReceipt = (id:number, claiment:number) => {
  this.props.claimReceipt(id, claiment) 
}

// whenever the change the username input, call the updateUsername action with the value
claimLine = (event) => {
  event.preventDefault(); 
  this.props.claimLine(receiptID, uID, lineID) 
}


componentWillMount()
{
  this.props.initializeReceipts();
}

  render() {
     
//let firstLine = this.props.receipt.lines[0];
//let firstItem = firstLine.items[0];

//firstItem.itemName = "Test";
 

    //create some fake receipt array
    
    let receiptHTML : any = [];


    let dummyUser = new Users();
    dummyUser.username = "csfrancis";
    dummyUser.firstName = "Chris";
    dummyUser.lastName = "Francis";
    dummyUser.userId = 5;

    let itr_1 = 0;
    for (const key of this.props.groupReceipts)
    {

      let onClickFuncs : any = [];
      for (let i = 0; i < this.props.groupReceipts[itr_1].lines.length; i ++)
          onClickFuncs.push(()=>{this.props.claimLine(key.receiptId, 0, i); alert(key.receiptId)});
      receiptHTML.push(<li><ReceiptDisplayComponent user = {dummyUser} onClick1={()=>{this.props.claimReceipt(key.receiptId, 0); alert(key.receiptId)} } onClick2={onClickFuncs} claimReceipt = {this.claimReceipt} claimItem = {this.claimLine} receipt={key}></ReceiptDisplayComponent></li>)
      itr_1++;
    }


    return (
      <div>
        <ul>
          {receiptHTML}
        </ul>
      </div>
    )
  }
 
}
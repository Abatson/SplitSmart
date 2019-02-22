import React from 'react';
import { IGroupState } from '../../reducers';
import { ReceiptDisplayComponent } from './Receipt.display.component';
import { Receipt } from '../../models/Receipt';
import { Line } from '../../models/Line';
import { Item } from '../../models/Item';
import { initializeReceipts } from '../../actions/receipt/Receipt.actions';

//requires the importing of Line and Item classes, which should also be in Store
 
 const uID = 1;
 const lineID = 1;
 const receiptID = 0;
 let receiptTest : Receipt[]
 let receiptLines : Line[]
 
//passing everything thru props
interface IGroupProps {
    receipt: Receipt,
    groupReceipts: any,
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
claimReceipt = () => {
  this.props.claimReceipt(this.props.receipt.id, 0) 
}

// whenever the change the username input, call the updateUsername action with the value
claimLine = (event) => {
  event.preventDefault(); 
  this.props.claimLine(receiptID, uID, lineID) 
}


componentWillMount()
{
  initializeReceipts();
}

  render() {
     
//let firstLine = this.props.receipt.lines[0];
//let firstItem = firstLine.items[0];

//firstItem.itemName = "Test";
 

    //create some fake receipt array
    
    let receiptHTML : any = [];

    

    for (var i = 0; i < this.props.groupReceipts.length; i++)
    {
      receiptHTML.push(<li><ReceiptDisplayComponent onClick={()=>{this.props.claimReceipt(i, 0); alert(i)} } claimReceipt = {this.claimReceipt} claimItem = {this.claimLine} receipt={receiptTest[i]}></ReceiptDisplayComponent></li>)
    }


    return (
      <div>
          {<ul>{receiptHTML}</ul>}
      </div>
    )
  }
 
}
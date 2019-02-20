import React from 'react';
import { IReceiptState } from '../../reducers';
import { ReceiptDisplayComponent } from './Receipt.display.component';
import { Receipt } from '../../models/Receipt';

//requires the importing of Line and Item classes, which should also be in Store
 
 const uID = 1;
 const lineID = 1;

//passing everything thru props
interface IReceiptProps {
    receipt: Receipt,
    //lines have a 1:M relationship with items
    claimReceipt: (claimant:number) => void, //as a user I would like to be able to claim a receipt
    claimLine: (claimant:number, claimed: number) => void, //as a user I would like to be able to claim a line
}
export class ReceiptComponent extends React.Component<IReceiptProps, any> {
  constructor(props) {
    super(props);
  }

 
// whenever the change the username input, call the updateUsername action with the value
claimReceipt = (event) => {
  event.preventDefault();
  this.props.claimReceipt(uID) 
}

// whenever the change the username input, call the updateUsername action with the value
claimLine = (event) => {
  event.preventDefault(); 
  this.props.claimLine(uID, lineID) 
}
 
  render() {
    return (
      <div>
          <ReceiptDisplayComponent item={this.props.receipt.lines[0].items[0].itemName}></ReceiptDisplayComponent>
      </div>//add html here
    )
  }
 
}
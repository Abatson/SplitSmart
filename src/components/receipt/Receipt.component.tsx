import React from 'react';
import { IGroupState } from '../../reducers';
import { ReceiptDisplayComponent } from './Receipt.display.component';
import { Receipt } from '../../models/Receipt';
import { Line } from '../../models/Line';
import { Item } from '../../models/Item';

//requires the importing of Line and Item classes, which should also be in Store
 
 const uID = 1;
 const lineID = 1;
 const receiptID = 0;

 
//passing everything thru props
interface IReceiptProps {
    receipt: Receipt,
    //lines have a 1:M relationship with items
    claimReceipt: (receiptID: number, claimant:number) => void, //as a user I would like to be able to claim a receipt
    claimLine: (receiptID: number, claimant:number, claimed: number) => void, //as a user I would like to be able to claim a line
}
export class ReceiptComponent extends React.Component<IReceiptProps, any> {
  constructor(props) {
    super(props);
  }

 
// whenever the change the username input, call the updateUsername action with the value
claimReceipt = (event) => {
  event.preventDefault();
  this.props.claimReceipt(receiptID, uID) 
}

// whenever the change the username input, call the updateUsername action with the value
claimLine = (event) => {
  event.preventDefault(); 
  this.props.claimLine(receiptID, uID, lineID) 
}

  render() {
     
//let firstLine = this.props.receipt.lines[0];
//let firstItem = firstLine.items[0];

//firstItem.itemName = "Test";
    let receiptTest : Receipt[] = [];
    let receiptLines : Line[] =  [];
    receiptLines.push(new Line("Coffee"), new Line("Bagel"), new Line("Fruit"));
    receiptLines[0].items.push(new Item(2.50, 1), new Item(2.50, 1), new Item(2.50, 1));
    receiptLines[1].items.push(new Item(2.50, 1), new Item(2.50, 1), new Item(2.50, 1));
    receiptLines[2].items.push(new Item(2.50, 1), new Item(2.50, 1), new Item(2.50, 1));
    

    //create some fake receipt array
    receiptTest.push(new Receipt(0, receiptLines), new Receipt(1, receiptLines), new Receipt(2, receiptLines));

    let receiptHTML : any = [];

    

    for (var i = 0; i < receiptTest.length; i++)
    {
      receiptHTML.push(<li><ReceiptDisplayComponent receipt={receiptTest[i]}></ReceiptDisplayComponent></li>)
    }


    return (
      <div>
          {<ul>{receiptHTML}</ul>}
      </div>
    )
  }
 
}
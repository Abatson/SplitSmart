import React from 'react';
import {Item} from '../../models/Item';
import {Receipt} from '../../models/Receipt';
import { claimReceipt } from '../../actions/receipt/Receipt.actions';

interface iReceiptProps{
    receipt: Receipt
}
export class ReceiptDisplayComponent extends React.Component<any, any> {

  constructor(props : any) {
    super(props);
  }



  render() {
    const {props} = this.props;
    let receiptHTML : any = [];


    receiptHTML.push(  <p>
      Receipt Name: {this.props.receipt.name}
      <p>
      Claim Receipt:  <input onClick={this.props.onClick} type="checkbox" id="scales" name="scales"
     ></input>
      </p>
      <p>
      Purchases: 
      </p>
    </p>);


      for (let i = 0; i < this.props.receipt.lines.length; i++)
      {
        receiptHTML.push(<li><input type="checkbox" id="scales" name="scales"
        ></input>Purchase Name: {i}</li>)
              for (let j = 0; j < this.props.receipt.lines[i].items.length; j++)
              {
                receiptHTML.push(<div>Item : {this.props.receipt.lines[i].name} ItemPrice : {this.props.receipt.lines[i].items[j].itemPrice}</div>)
              }
        receiptHTML.push()
      }

    return (
      <div style={{background:'#999999'}} >

          {receiptHTML}
      
 
      </div>
    )
  }

}
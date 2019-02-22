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
      <p>
      Claimant: {this.props.receipt.claimant}  
      </p>
      Claim Receipt:  <input onClick={this.props.onClick1} type="checkbox" id="scales" name="scales"
     ></input>
      </p>
      <p>
      Purchases: 
      </p>
    </p>);

      let tempJSX : any = [];
      for (let i = 0; i < this.props.receipt.lines.length; i++)
      {
        tempJSX.push(<li><input onClick={this.props.onClick2} type="checkbox" id="scales" name="scales"
        ></input>Purchase Name: {this.props.receipt.lines[i].name}</li>)

        
              for (let j = 0; j < this.props.receipt.lines[i].items.length; j++)
              {
                tempJSX.push(<React.Fragment>Item : {this.props.receipt.lines[i].name} ItemPrice : {this.props.receipt.lines[i].items[j].itemPrice}</React.Fragment>)
              }
        
        receiptHTML.push(<div>{tempJSX}</div>)
        tempJSX = [];
      }

    return (
      <div style={{background:'#999999'}} >

          {receiptHTML}
      
 
      </div>
    )
  }

}